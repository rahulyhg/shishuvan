 myApp.controller('Co-curricularProgramCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/co-curricular_program.html");
     TemplateService.title = "Co-curricularProgram"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
 })