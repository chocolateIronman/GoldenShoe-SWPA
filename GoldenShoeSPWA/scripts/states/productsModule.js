(
    function() {
        'use strict';

        const module = angular.module('productsjs',[
            'ui.router',
            'ngAnimate'
        ]);

        module.config(function($stateProvider,$urlRouterProvider){

            $stateProvider.state('products',{
                cache: false,
                url:'/home',
                templateUrl:'/scripts/states/products.html',
                controller:'productsCtrl as vm'
            });

           







            $urlRouterProvider.otherwise('/home');    
        });
    }
)();