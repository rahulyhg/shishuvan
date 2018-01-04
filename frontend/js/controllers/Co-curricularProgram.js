 myApp.controller('Co-curricularProgramCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/co-curricular_program.html");
     TemplateService.title = "Co-curricularProgram"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
       $scope.ArtOpen = function () {
         $uibModal.open({
             animation: true,
             templateUrl: 'views/modal/art.html',
             scope: $scope,
             size: 'md',
         });
     };
         $scope.STEMOpen = function () {
         $uibModal.open({
             animation: true,
             templateUrl: 'views/modal/STEM.html',
             scope: $scope,
             size: 'md',
         });
     };
     
 })