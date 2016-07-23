angular.module('shippingAndPayment').component('shippingAndPayment', {
    templateUrl: 'shipping-and-payment/shipping-and-payment.html',
    controller: ['$scope', '$http', '$routeParams',
        function shippingAndPaymentController($scope, $http, $routeParams) {
            $http.get('shipping-and-payment/shipping-and-payment/shipping-and-payment.json').then(function(response) {
                $scope.tabs = response.data;
            });
        }
    ]
});
