import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * Request Error interceptor to managed HTTP Errors in a Request
 * @param req Request to be validated
 * @param next HttpHandler to continue with the request lifecycle
 */
export const requestErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = "";

      switch (error.status){
        case 0:
          errorMsg = `Oops, you're disconnected; try connecting and searching again!`;
          break;
        case 401:
          errorMsg = `You don't have permissions to access this resource.`;
          break;
        case 500:
          errorMsg = `We are facing technical issues, please try again later.`;
          break;
      }

      snackbar.open(errorMsg, "OK", {
        duration: 5000,
        panelClass: 'red-snackbar'
      });
      return throwError(() => errorMsg);
    }),
  )
};
