angular.module('exchange').component('exchange', {
    templateUrl: 'exchange/exchange.html',
    controller: ['$scope', 'Exchange',
        function ExchangeController($scope, Exchange) {
            $scope.exchange = Exchange.query();
        }
    ]
});