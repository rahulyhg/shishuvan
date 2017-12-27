myApp.factory('NavigationService', function () {
    var navigation = [ {
            name: "About Us",
            classis: "active",
            anchor: "home",
            subnav: [{
                    name: "History & Legacy",
                    classis: "active",
                    anchor: "home"
                },
                {
                    name: "School Mission and Vision Statements",
                    classis: "active",
                    anchor: "home"

                },
                {
                    name:"Educational Pillars",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"School Governing Board",
                    classis:"active",
                    anchor:"home"
                }
            ]
        },
        {
            name: "Campus Facilities",
            classis: "active",
            anchor: "grid",
            subnav: [
                {
                    name:"Virtual tour of the School",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Technology enabled &amp; temperature controlled learning spaces",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Play Area",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Multipurpose Room",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Music Room",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Sick Bay",
                    classis:"active",
                    anchor:"home"
                }
            ]
        },
        {
           name:"Academic Programmes",
           classis:"active",
           anchor:"home",
           subnav:[{
               name:"Preschool &amp; Kindergarten – following the Play Way Method",
               classis:"active",
               anchor:"home"
                       },
                    {
                        name:"Primary School – Following the Cambridge Primary Programme",
                        classis:"active",
                        anchor:"home"
                    }] 
        },
        {
            name:"Co-curricular Program",
            classis:"active",
            anchor:"home",
            subnav:[
                {
                    name:"Art",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"STEM",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Drama",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Dance",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Music",
                    classis:"active",
                    anchor:"home"
                }
            ]
        },
        {
            name:"Our Community",
            classis:"active",
            anchor:"home",
            subnav:[
                {
                    name:"Initiatives of the KVOSJM Trust",
                    classis:"active",
                    anchor:"home"
                },
                {
                    name:"Our Traditions",
                    classis:"active",
                    anchor:"home"
                }
            ]
        },{
            name:"Admissions",
            classis:"active",
            anchor:"home",
            subnav:[{
                name:"Admissions Overview",
                classis:"active",
                anchor:"home"
            },
        {
            name:"Admission Process",
            classis:"active",
            anchor:"home"
        },
        {
            name:"Contact & Enquiries",
            classis:"active",
            anchor:"home"
        }
        ]
        },
        {
            name:"Employment Opportunities",
            classis:"active",
            anchor:"home",
            subnav:[
                {
                    name:"Working at ShishuVihar School",
                    classis:"active",
                    anchor:"home"
                },{
                    name:"Online Application Form",
                    classis:"active",
                    anchor:"home"
                }
            ]
        },{
            name:"Contact Us",
            classis:"active",
            anchor:"home",
            subnav:[
                {
                    name:"Directions & Contact Information (Google Map)",
                    classis:"active",
                    anchor:"home"
                }
            ]
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});