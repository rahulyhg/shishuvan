// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr'
]);

// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('aboutus', {
            url: "/aboutus",
            templateUrl: tempateURL,
            controller: 'AboutusCtrl'
        })
        .state('contactus', {
            url: "/contactus",
            templateUrl: tempateURL,
            controller: 'ContactusCtrl'
        })
        .state('academic_programmes', {
            url: "/academic_programmes",
            templateUrl: tempateURL,
            controller: 'AcademicProgrammesCtrl'
        })
         .state('co-curricular_program', {
            url: "/co-curricular_program",
            templateUrl: tempateURL,
            controller: 'Co-curricularProgramCtrl'
        })
        .state('campus_facility', {
            url: "/campus_facility",
            templateUrl: tempateURL,
            controller: 'CampusFacilityCtrl'
        })
          .state('community', {
            url: "/community",
            templateUrl: tempateURL,
            controller: 'CommunityCtrl'
        })
           .state('admission', {
            url: "/admission",
            templateUrl: tempateURL,
            controller: 'AdmissionCtrl'
        })
        .state('employment_opportunities', {
            url: "/employment_opportunities",
            templateUrl: tempateURL,
            controller: 'EmploymentOpportunitiesCtrl'
        })
         .state('faq', {
            url: "/faq",
            templateUrl: tempateURL,
            controller: 'FaqCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});