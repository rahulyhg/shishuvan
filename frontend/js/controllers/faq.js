 myApp.controller('FaqCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/faq.html");
     TemplateService.title = "Faq"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
 })