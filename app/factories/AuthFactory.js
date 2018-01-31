"use strict";

angular.module("UserNotes").factory("AuthFactory", (FBCreds, $q) => {
    let authObj = {};

    authObj.createUser = ({ email, password }) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    authObj.loginUser = ({ email, password }) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };

    return authObj;
});