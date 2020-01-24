(function () {
    'use strict';

    angular
        .module('productsjs')
        .factory('productsSrvc', productsSrvc);

    productsSrvc.$inject = [
        '$q',
        '$timeout',
        '$http'
        
    ];

    function productsSrvc(
        $q,
        $timeout,
        $http
    ) {
        var service = {};//declare an object ti hold all the functions
        //$http.$httpProvider.xsrfWhitelistedOrigins=['https://goldenshoeapi.herokuapp.com:443'];
        service.products = [];//declare the local array for products

        
        

        service.getProducts = function getProducts() {
            return ($http({
                method: 'GET',
                url: 'https://goldenshoeapi.herokuapp.com:443/product'
                
            }));
        }

        service.getProduct = function getProduct(ProductID) {
            return ($http({
                method: 'GET',
                url: 'https://goldenshoeapi.herokuapp.com/product/' + ProductID
            }))
        }

        return service;
    }
})();