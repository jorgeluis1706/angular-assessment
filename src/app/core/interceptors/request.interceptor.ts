import {HttpInterceptorFn, HttpParams, HttpRequest} from '@angular/common/http';
import { environment } from '../../../environments/environment';

/**
 * Get only the query params with value from the request
 * @param req Request with the query params unfiltered
 */
function getHttpParamsWithoutEmptyParams(req: HttpRequest<unknown>) {
  return new HttpParams({
    fromString:
      req.params.keys()
        .map((key) => req.params.get(key) !== '' ? `${key}=${req.params.get(key)}` : '')
        .filter((param) => param !== '').toString()
  });
}

/**
 * Request Interceptor to perform several actions over a request
 * @param req Request to be modified
 * @param next HttpHandler to continue with the request lifecycle
 */
export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const requestWithHeaders = req.clone({
    headers: req.headers
      .append('X-Api-Key', environment.listingServiceApiKey)
      .append('accept', 'application/json'),
    params: getHttpParamsWithoutEmptyParams(req)
  });

  return next(requestWithHeaders);
};
