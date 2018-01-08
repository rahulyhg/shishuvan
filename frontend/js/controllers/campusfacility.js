 myApp.controller('CampusFacilityCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location,apiService) {
     $scope.template = TemplateService.getHTML("content/campus_facility.html");
     TemplateService.title = "CampusFacility"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
      $scope.school_facility = [{
        img: "img/school_facility/1.png",
        desc: "Technology enabled &amp; temperature controlled learning spaces."
    }, {
        img: "img/school_facility/2.png",
        desc: "Specially designed indoor and outdoor play area for our early years learners."
    }, {
        img: "img/school_facility/3.png",
        desc: "Multipurpose room for dance / drama / music"
    }, {
        img: "img/school_facility/6.png",
        desc: "Coding Skills Program"
    } ,{
        img: "img/school_facility/4.png",
        desc: "Small class sizes"
    }, {
        img: "img/school_facility/5.png",
        desc: "Age appropriate STEM Education"
    }]
 })