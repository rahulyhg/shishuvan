 myApp.controller('AcademicProgrammesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/academic_programmes.html");
     TemplateService.title = "AcademicProgrammes"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
 })