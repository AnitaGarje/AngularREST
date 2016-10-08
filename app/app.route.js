  (function() {
      'use strict';
  
      angular
            .module('studmon')
            .config(
                [
                    '$stateProvider',
                    '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to "/students"
    $urlRouterProvider.otherwise("/teachers");

    // Now set up the states
    $stateProvider

      .state('students', {
        url: "/students",
        templateUrl:"student/studentList.html",
        controller: "StudentController as ctrl",
      })

      .state('teacher', {
        url: "/teachers",
        templateUrl:"teacher/teacherList.html",
        controller: "teacherController as ctrl",
      });
      
  } ]);

  })();