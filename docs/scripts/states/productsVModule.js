(
    function () {
        'use strict';

        const module = angular.module('productVStatejs', [
            'ui.router',
            'ngAnimate'
        ]);

        module.config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state('productView', {
                cache: false,
                url: '/product',
                templateUrl: 'scripts/states/productV.html',
                params: { 'selected': 0 },
                controller: 'productVCtrl as vm'
            });









            $urlRouterProvider.otherwise('/home');
        });
    }
)();