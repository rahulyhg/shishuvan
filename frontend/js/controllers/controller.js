myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
            $scope.template = TemplateService.getHTML("content/home.html");
            TemplateService.title = "Home"; //This is the Title of the Website
            $scope.navigation = NavigationService.getNavigation();

            $scope.mySlides = [{
                    img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
                    title1:"aaaaaaaaaaaaaaaaaaaaa",
                     title2:"bbbbbbbbbbbbbbbbbbbbbbbbbbb"
                }, {
                    img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
                     title1:"cccccccccccccccccccc",
                     title2:"bbbbbbbbbbbbbbbbbbbbbbbbbbb"
                }, {
                    img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
                     title1:"ggggggggggggggggggggggg",
                     title2:"bbbbbbbbbbbbbbbbbbbbbbbbbbb"
                }, {
                    img: 'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
                     title1:"jjjjjjjjjjjjjjjjjjjjjjjjjj",
                     title2:"bbbbbbbbbbbbbbbbbbbbbbbbbbb"
                }
                ];
                var abc = _.times(100, function (n) {
                    return n;
                });

                var i = 0;
                $scope.buttonClick = function () {
                    i++;
                    console.log("This is a button Click");
                };

                $scope.parentsDay = [{
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }, {
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }, {
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }, {
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }, {
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }, {
                    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
                    name: "ssssssss",
                    desc: "esdxfcghbvjn"
                }]

                $scope.Courses = [{
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",

                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",

                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }, {
                    img: "img/course/course_1.jpg",
                    courseDetail: "Angel Di Maria",
                }]
                $scope.Teachers = [{
                    img: "img/course/course_1.jpg",
                    Tname: "Angel Di Maria",
                    Desig: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }, {
                    img: "img/course/course_1.jpg",
                    name: "Angel Di Maria",
                    desc: "Assistant Teacher"
                }]
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