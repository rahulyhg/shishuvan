 myApp.controller('CampusFacilityCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/school_facility.html");
     TemplateService.title = "SchoolFacility"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
      $scope.school_facility = [{
        img: "img/school_facility/1.png",
        desc: "Temperature Controlled Learning Spaces."
    }, {
        img: "img/school_facility/2.png",
        desc: "Technology Enabled Classrooms."
    }, {
        img: "img/school_facility/3.png",
        desc: "Specially Designed Play Area for our Early Years Learners"
    }, {
        img: "img/school_facility/6.png",
        desc: "Multi-purpose Outdoor Play Area"
    } ,{
        img: "img/school_facility/4.png",
        desc: "Early Years Classroom"
    }, {
        img: "img/school_facility/5.png",
        desc: "Small Class Sizes"
    }]
 })