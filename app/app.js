"use strict";


angular.module("user-notes", ["ngRoute"])
    .constant("FBUrl", "https://ej-to-do.firebaseio.com/")
    .config( ($routeProivder) => {
        $routeProivder
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        })
        .when("/register", {
            templateUrl: "partials/register.html",
            controller: "RegisterCtrl.js"
        })
        .when("/newnote", {
            templateUrl: "partials/newnote.html",
            controller: "NewNoteCtrl.js"
        })
        .when("/notelist/:id", {
            templateUrl: "partials/notelist.html",
            controller: "NoteListCtrl.js"
        })
        .otherwise("/login");
    })
    .run(FBCreds => {
        let creds = FBCreds;
        let authConfig = {
            apiKey: creds.key,
            authDomain: creds.authDomain
        };
        firebase.initializeApp(authConfig);
    });
