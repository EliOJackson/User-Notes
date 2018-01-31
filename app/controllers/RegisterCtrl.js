"use strict";

angular.module("UserNotes").controller("RegisterCtrl", function ($scope, AuthFactory) {

    $scope.register = () => {
        AuthFactory.createUser($scope.account).then(user => {
            console.log("newUser", user);
        })
            .catch(function ({ code, message }) {
                console.log("Oops", code, message);
            });
    };

});