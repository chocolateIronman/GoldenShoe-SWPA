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
                    name: "no name",
                    description: "no description",
                    quantity: "no quanityt",
                    price: "no price",
                    image: "no image",
                    category: "no category",
                    colour: "no colour"
                }
            })

            var params = $stateParams;

            productsSrvc.getProduct(params.selected).then(
                function successCallback(response) {
                    console.log(response.data[0]);

                    vm.product = response.data[0];
                    console.table(vm.product);
                },
                function errorCallback(response) {
                    console.error(response);
                }
            );

            vm.noPoducts = function(){
                console.log(vm.product.quantity);
                return vm.product.quantity == "0";
                
            };

            return vm;

        }

    }
)();