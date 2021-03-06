// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BaseUrl: 'https://localhost:44380/api/', // API Url in localhost
  ImagePathUrl: 'http://127.0.0.1:8887/', // Image path in Localhost
  ImagePathUrlSlider: 'http://127.0.0.1:8887/Slider/IMG/Uploads/', // Image path in Localhost
  ImagePathUrlNews: 'http://127.0.0.1:8887/News/Uploads/', // Image path in Localhost
  ImagePathUrlSponosr: 'http://127.0.0.1:8887/Sponser/Uploads/', // Image path in Localhost
  ImagePathUrlAlbum: 'http://127.0.0.1:8887/Album/Uploads/', // Image path in Localhost
  ImagePathUsersUrl: 'http://127.0.0.1:8887/OperaImages/UserAvatar/', // Image path in Localhost
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
