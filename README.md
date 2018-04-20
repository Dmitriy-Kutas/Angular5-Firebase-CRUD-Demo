# Angular5-Firebase Realtime Database CURD Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Demo Link

You can see my demo in [here](https://ppwebmaster.000webhostapp.com/angular5-firebase/).

## Environment

Change firebase config information in `src/environments/environment.ts` into your info.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC19PmNcCGp7RMvH2zsWDW8KRQWdX1vXZY',
    authDomain: 'company-sample-977f4.firebaseapp.com',
    databaseURL: 'https://company-sample-977f4.firebaseio.com',
    projectId: 'company-sample-977f4',
    storageBucket: 'company-sample-977f4.appspot.com',
    messagingSenderId: '439125903097'
  }
};

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
