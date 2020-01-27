angular.module('starter', [
    'ui.router',
    'ngAnimate',
    'ui.bootstrap',
    'productsjs',
    'productVStatejs',
    'faqjs',
    'ngResource'
])
    .config(['$httpProvider', function ($httpProvider) {

        $httpProvider.xsrfWhitelistedOrigins = ['https://goldenshoeapi.herokuapp.com:443'];
        
    }])
    .run(function ($state, $rootScope) {
        $rootScope.$on('$stateChangeError', function (event) {
            event.preventDefault();

            //$state.get('about').error={code: 123, description: 'Exception stack trace'}
            //return $state.go('about');
        });
    });