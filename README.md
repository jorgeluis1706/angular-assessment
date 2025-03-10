# AngularAssessment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Assessment Documentation

This project is built on a modular, container-presenter component design.
The project is an ease-to-use app for Real State Rental Properties.
We can look up for rent properties based on: City, Property Type, Bedrooms and Bathrooms in all 50 states of US.

_NOTE: Please be advised that we are currently utilizing a restricted number of **free API requests (less than 50)**, and if we run more requests than the limit, that quotation will be invoiced._

**Project files** 
- Environments
  - We have 2 environment files in order to use when we need it (development and production).
  - the environment file contains API keys, service URLs, and other information dependent on the environment we are in.
- App
  - Core (Core files in the projects):
    - Interceptors (manage request/response and http errors globally)
    - Interfaces (the project's core interfaces).
  - Modules (modules of the app)
    - Listing (Components, interfaces, and services related to Listing Module).
      - Components 
        - listing-search-form and results-table.
      - Interfaces
        -  Specific interfaces used in the components.
      - Services
        - include a listing service that provides data on available properties for rent.
  - Shared (We may save shared components, layouts, and so forth)
    - Layout (layouts that we can use in the app template)

**Apis**

We use the https://developers.rentcast.io/reference/introduction API to get the listing rental properties

This API use an API Key that is stored in the _environment.ts_ file

To start the project in a development environment, please run: **npm run start**

**Unit testing**

The testing is not completed, only a few pieces of code was tested.

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
