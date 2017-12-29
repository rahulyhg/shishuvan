myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.scrollTop = function()
    {
         $('html, body').animate({
        scrollTop: $('body,html').offset().top -100 
    }, 3000);
    }
});