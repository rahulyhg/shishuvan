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
       $scope.goToAnchor = function (anchor, id) {
        console.log("inside anchor")
        $state.go(anchor)
            // $location.hash(anchor);
        if (id) {
            $timeout(function () {
                // $anchorScroll();
                $('html,body').animate({
                    scrollTop: $('#' + id).offset().top - 50
                }, "slow");
            }, 500);
        }
    };
});