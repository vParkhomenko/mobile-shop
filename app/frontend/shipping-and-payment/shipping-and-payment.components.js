angular.module('shippingAndPayment').component('shippingAndPayment', {
    templateUrl: 'shipping-and-payment/shipping-and-payment.html',
    controller: ['$scope', 'ShippingAndPayment',
        function shippingAndPaymentController($scope, ShippingAndPayment) {
            $scope.tabs = ShippingAndPayment.query();
        }
    ]
});
