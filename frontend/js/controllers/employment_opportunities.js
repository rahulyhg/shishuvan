 myApp.controller('EmploymentOpportunitiesCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $location, apiService, $state) {
     $scope.template = TemplateService.getHTML("content/employment_opportunities.html");
     TemplateService.title = "EmploymentOpportunities"; //This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     $scope.formSubmitted = false;
     $scope.view = "tab-one";
     $scope.Nexttab = function (view) {
         if (view == "tab-one") {
             $scope.view = "tab-two";
         }
         if (view == "tab-two") {
             $scope.view = "tab-three";
         }
         if (view == "tab-three") {
             $scope.view = "tab-four";
         }
     }

     $scope.Previoustab = function (view) {
         if (view == "tab-two") {
             $scope.view = "tab-one";
         }
         if (view == "tab-three") {
             $scope.view = "tab-two";
         }
         if (view == "tab-four") {
             $scope.view = "tab-three";
         }
     }

     ///for datepicker
     $scope.today = function () {
         $scope.dt = new Date();
     };
     $scope.today();

     $scope.clear = function () {
         $scope.dt = null;
     };

     $scope.inlineOptions = {
         customClass: getDayClass,
         minDate: new Date(),
         showWeeks: true
     };

     $scope.dateOptions = {
         dateDisabled: disabled,
         formatYear: 'yy',
         maxDate: new Date(2020, 5, 22),
         minDate: new Date(),
         startingDay: 1
     };

     // Disable weekend selection
     function disabled(data) {
         var date = data.date,
             mode = data.mode;
         return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
     }

     $scope.toggleMin = function () {
         $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
         $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
     };

     $scope.toggleMin();

     $scope.open1 = function () {
         $scope.popup1.opened = true;
     };

     $scope.open2 = function () {
         $scope.popup2.opened = true;
     };

     $scope.setDate = function (year, month, day) {
         $scope.dt = new Date(year, month, day);
     };

     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
     $scope.format = $scope.formats[0];
     $scope.altInputFormats = ['M!/d!/yyyy'];

     $scope.popup1 = {
         opened: false
     };

     $scope.popup2 = {
         opened: false
     };

     var tomorrow = new Date();
     tomorrow.setDate(tomorrow.getDate() + 1);
     var afterTomorrow = new Date();
     afterTomorrow.setDate(tomorrow.getDate() + 1);
     $scope.events = [{
         date: tomorrow,
         status: 'full'
     }, {
         date: afterTomorrow,
         status: 'partially'
     }];

     function getDayClass(data) {
         var date = data.date,
             mode = data.mode;
         if (mode === 'day') {
             var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

             for (var i = 0; i < $scope.events.length; i++) {
                 var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                 if (dayToCheck === currentDay) {
                     return $scope.events[i].status;
                 }
             }
         }

         return '';
     }
     $scope.open = false;
     $scope.openDiv = function () {
         if ($scope.open) {
             $scope.open = false;
         } else {
             $scope.open = true;
         }
     }
     //To open the modal after submitting the form
     $scope.openSubmitTextForm = function () {
         $uibModal.open({
             animation: true,
             templateUrl: 'views/modal/employee-admission-msg.html',
             scope: $scope,
             size: 'sm',
         });
     };
     $scope.submitForm = function (employeeForm) {
         NavigationService.saveEmployeeForm(employeeForm, function (data) {
             console.log("!!!!!!!!!!!!submitForm(employeeForm)", data);
             if (data.data) {
                 //  NavigationService.sendEmployeeApplication(data.data.data, function (data) {
                 //      console.log("send email to applicant", data.data);
                 //  });
                 $scope.openSubmitTextForm();
                 $timeout(function () {
                     //  $uibModalInstance.dismiss('cancel');
                     $state.reload();
                 }, 800);
             }
         })
     }

 });