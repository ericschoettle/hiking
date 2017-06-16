# hiking-club

This is a basic hiking club application, built as practice for using ember with firebase. 

## Functionality

* Home Page: All Users listed
* Click on list to go to dynamically generated details page.
* About page at the top.
* Save data to firebase.
* Pipes for favorite hiking location or style or something. 

* Admin route to add new users.
* Admin route to update and delete users.

* Bootstrap 

* Bonus: user authentication
* Bonus: deployment

## API Keys

* You will need to set up a project in firebase and put the keys in a file called "api-keys.ts". Make the file in the home directory of the project and make sure its name is included in the ".gitignore" file. Copy and paste the following code into the api-keys file:

export var masterFirebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXX",
  databaseURL: "XXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXX"
};

* In the Firebase Console click on "add firebase to web app" and use the provided content to fill out the api-keys file seen above

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
