(
    function(){
        'use strict';

        angular
            .module('productsjs')
            .controller('productsCtrl',control);

        control.$inject=[
            '$state',
            'productsSrvc'
        ];

        function control(
            $state,
            productsSrvc
        ) {
            var vm=angular.extend(this, {
                products:[]
            });

            vm.onItemSelected = function(index){
                console.log("Product index "+index);
                //passing parameters into the new state
                //'selected is an attribute in a parameter object, defined in the module definition
                //write the destination controller, so it knows to look for an object with a 'selected' attribute
                var productID=vm.products[index].id;
                console.log("Product id: "+productID);

                $state.go('productView',{selected: productID});
            }

            productsSrvc.getProducts().then(
                function successCallback(response){
                    console.log(response.data);

                    vm.products=response.data;
                },
                function errorCallback(response) {
                    console.error(response);
                }
            );

            return vm;
        }
    }
)();