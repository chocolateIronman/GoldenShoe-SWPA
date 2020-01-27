(
    function () {
        'use strict';

        angular
            .module('productVStatejs')
            .controller('productVCtrl', control);

        control.$inject = [
            '$state',
            '$stateParams',
            'productsSrvc'
        ];

        function control(
            $state,
            $stateParams,
            productsSrvc
        ) {
            var vm = angular.extend(this, {
                product: {
                    name: null,
                    description: null,
                    quantity: 0,
                    price: 0.0,
                    image: null,
                    category: null,
                    colour: null
                },
                newProduct : {}
            })


            var params = $stateParams;
            var productID=$stateParams.productID;

            productsSrvc.getProduct(params.selected).then(
                function successCallback(response) {
                    console.log(response.data[0]);

                    vm.product = response.data[0];
                    console.table(vm.product);
                },
                function errorCallback(response) {
                    console.error(response);
                    vm.product=null;
                }
            );

           

            return vm;

        }

    }
)();