"use strict";


angular.module("UserNotes", ["ngRoute"])
    .constant("FBUrl", "https://ej-to-do.firebaseio.com/")
    .config( ($routeProvider) => {
        $routeProvider
        .when("/login", {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        })
        .when("/register", {
            templateUrl: "partials/register.html",
            controller: "RegisterCtrl"
        })
        .when("/newnote", {
            templateUrl: "partials/newnote.html",
            controller: "NewNoteCtrl"
        })
        .when("/notelist/:id", {
            templateUrl: "partials/notelist.html",
            controller: "NoteListCtrl"
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

