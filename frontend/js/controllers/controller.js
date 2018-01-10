myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        // To open modal when website loads 
        $scope.startMsgOpen = function () {
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/start-msg.html',
                scope: $scope,
                size: 'md',
            });
        };
        // To open modal once when website loads first time. For that we will use jstorage
        $scope.$on('$viewContentLoaded', function () {
            if (_.isEmpty($.jStorage.get('firstTime'))) {
                $.jStorage.set('firstTime', {
                    value: true
                });
                $scope.startMsgOpen(); // To open modal when website loads
            }
        });

        $scope.mySlides = [{
                img: 'img/home/b1.png',
                // title1: "aaaaaaaaaaaaaaaaaaaaa",
                // title2: "bbbbbbbbbbbbbbbbbbbbbbbbbbb"
            }, {
                img: 'img/home/b2.png',
                // title1: "cccccccccccccccccccc",
                // title2: "bbbbbbbbbbbbbbbbbbbbbbbbbbb"
            }, {
                img: 'img/home/b3.png',
                // title1: "ggggggggggggggggggggggg",
                // title2: "bbbbbbbbbbbbbbbbbbbbbbbbbbb"
            }
            //  {
            //     img: 'img/home/b4.png',
            //     title1: "jjjjjjjjjjjjjjjjjjjjjjjjjj",
            //     title2: "bbbbbbbbbbbbbbbbbbbbbbbbbbb"
            // }
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        // $scope.parentsDay = [{
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }, {
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }, {
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }, {
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }, {
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }, {
        //     para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        //     name: "ssssssss",
        //     desc: "esdxfcghbvjn"
        // }]
        // $scope.Courses = [{
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }, {
        //     img: "img/course/course_1.jpg",
        //     courseDetail: "Angel Di Maria",
        // }]
        $scope.school_facility = [{
            img: "img/school_facility/home1.jpg",
            desc: "Temperature Controlled Learning Spaces."
        }, {
            img: "img/school_facility/home2.jpg",
            desc: "Technology Enabled Classrooms."
        }, {
            img: "img/school_facility/home3.jpg",
            desc: "Specially Designed Play Area for our Early Years Learners"
        }, {
            img: "img/school_facility/home4.jpg",
            desc: "Multi-purpose Outdoor Play Area"
        }, {
            img: "img/school_facility/home5.jpg",
            desc: "Early Years Classroom"
        }, {
            img: "img/school_facility/home6.jpg",
            desc: "Small Class Sizes"
        }]


    })
    .controller('navCtrl', function ($scope, $location, $anchorScroll, $state, $timeout) {
        $scope.goToAnchor = function (anchor, id) {
            console.log("inside anchor")
            $state.go(anchor)
            // $location.hash(anchor);
            if (id) {
                $timeout(function () {
                    // $anchorScroll();
                    $('html,body').animate({
                        scrollTop: $('#' + id).offset().top - 100
                    }, "slow");
                }, 500);
            }
        };



    })
    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });