// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA8F9phze0p2JNgdgmt961zIy-qdm2EkOc",
    authDomain: "twitter-digital-hub.firebaseapp.com",
    databaseURL: "https://twitter-digital-hub.firebaseio.com",
    projectId: "twitter-digital-hub",
    storageBucket: "twitter-digital-hub.appspot.com",
    messagingSenderId: "969923659518"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
