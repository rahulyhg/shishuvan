 myApp.controller('EmploymentOpportunitiesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/employment_opportunities.html");
     TemplateService.title = "EmploymentOpportunities"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
 })