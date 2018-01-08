myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
            subnav: [{
                    name: "History & Legacy",
                    classis: "active",
                    anchor: "aboutus",
                    link: "HistoryandLegacy"
                },
                {
                    name: "School Mission and Vision Statements",
                    classis: "active",
                    anchor: "aboutus",
                    link: "MissionandVission",

                },
                // {
                //     name: "Educational Pillars",
                //     classis: "active",
                //     anchor: "aboutus",
                //     link: "EducationalPillars",
                // },
                // {
                //     name: "School Governing Board",
                //     classis: "active",
                //     anchor: "aboutus",
                //     link: "SchoolGoverningBoard",
                // }
            ]
        },
        {
            name: "School Facilities",
            classis: "active",
            anchor: "school_facility",
            // subnav: [{
            //         name: "Virtual tour of the School",
            //         classis: "active",
            //         anchor: "campus_facility"
            //     },
            //     {
            //         name: "Technology enabled & temperature controlled learning spaces",
            //         classis: "active",
            //         anchor: "campus_facility"
            //     },
            //     {
            //         name: "Play Area",
            //         classis: "active",
            //         anchor: "campus_facility"
            //     },
            //     {
            //         name: "Multipurpose Room",
            //         classis: "active",
            //         anchor: "home"
            //     },
            //     {
            //         name: "Music Room",
            //         classis: "active",
            //         anchor: "home"
            //     },
            //     {
            //         name: "Sick Bay",
            //         classis: "active",
            //         anchor: "home"
            //     }
            // ]
        },
        {
            name: "Program",
            classis: "active",
            // anchor: "program",
            subnav: [{
                name: "Academic Programmes",
                classis: "active",
                anchor: "academic_programmes",
                // innersub: [{
                //         name: "Preschool & Kindergarten – following the Play Way Method",
                //         classis: "active",
                //         anchor: "home"
                //     },
                //     {
                //         name: "Primary School – Following the Cambridge Primary Programme",
                //         classis: "active",
                //         anchor: "home"
                //     }
                // ]
            }, {
                name: "Co-curricular Program",
                classis: "active",
                anchor: "co-curricular_program",
                // innersub: [{
                //         name: "Art",
                //         classis: "active",
                //         anchor: "home"
                //     },
                //     {
                //         name: "STEM",
                //         classis: "active",
                //         anchor: "home"
                //     },
                //     {
                //         name: "Drama",
                //         classis: "active",
                //         anchor: "home"
                //     },
                //     {
                //         name: "Dance",
                //         classis: "active",
                //         anchor: "home"
                //     },
                //     {
                //         name: "Music",
                //         classis: "active",
                //         anchor: "home"
                //     }
                // ]

            }]
        }
        // {
        //    name:"Academic Programmes",
        //    classis:"active",
        //    anchor:"home",
        //    subnav:[{
        //        name:"Preschool & Kindergarten – following the Play Way Method",
        //        classis:"active",
        //        anchor:"home"
        //                },
        //             {
        //                 name:"Primary School – Following the Cambridge Primary Programme",
        //                 classis:"active",
        //                 anchor:"home"
        //             }] 
        // },
        // {
        //     name:"Co-curricular Program",
        //     classis:"active",
        //     anchor:"home",
        //     subnav:[
        //         {
        //             name:"Art",
        //             classis:"active",
        //             anchor:"home"
        //         },
        //         {
        //             name:"STEM",
        //             classis:"active",
        //             anchor:"home"
        //         },
        //         {
        //             name:"Drama",
        //             classis:"active",
        //             anchor:"home"
        //         },
        //         {
        //             name:"Dance",
        //             classis:"active",
        //             anchor:"home"
        //         },
        //         {
        //             name:"Music",
        //             classis:"active",
        //             anchor:"home"
        //         }
        //     ]
        // },
        ,
        {
            name: "Community",
            classis: "active",
            anchor: "community",
            subnav: [{
                    name: "Initiatives of the KVOSJM Trust",
                    classis: "active",
                    anchor: "community",
                    link: "Initiatives"
                },
                {
                    name: "Our Aspirations ",
                    classis: "active",
                    anchor: "community",
                    link: "Our-Traditions"
                }
            ]
        },
        {
            name: "Admissions",
            classis: "active",
            anchor: "admission",
            subnav: [{
                    name: "Admissions Overview",
                    classis: "active",
                    anchor: "admission"
                },
                {
                    name: "Admissions FAQ",
                    classis: "active",
                    anchor: "faq",
                    link: "faq"
                },
                {
                    name: "Contact & Enquiries",
                    classis: "active",
                    anchor: "admission"
                }
            ]
        },
        {
            name: "Employment Opportunities",
            classis: "active",
            anchor: "employment_opportunities",
            subnav: [{
                name: "Working at ShishuVihar School",
                classis: "active",
                anchor: "employment_opportunities",
                link: "Working"
            }, {
                name: "Online Application Form",
                classis: "active",
                anchor: "employment_opportunities",
                link: "Application"
            }]
        },
        {
            name: "Contact Us",
            classis: "active",
            anchor: "contactus",
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
        saveEmployeeForm: function (data, callback) {
            $http({
                url: adminurl + 'Employee/save',
                method: 'POST',
                data: data,
                withCredentials: false
            }).then(callback);
        },
        saveStudentForm: function (data, callback) {
            $http({
                url: adminurl + 'Student/save',
                method: 'POST',
                data: data,
                withCredentials: false
            }).then(callback);
        },
        sendEmployeeApplication: function (data, callback) {
            $http({
                url: adminurl + 'Employee/employeeFormEmail',
                method: 'POST',
                data: data,
                withCredentials: false
            }).then(callback);
        },
        sendStudentApplication: function (data, callback) {
            $http({
                url: adminurl + 'Employee/studentFormEmail',
                method: 'POST',
                data: data,
                withCredentials: false
            }).then(callback);
        },
    };
});