angular.module('exchange').component('exchange', {
    templateUrl: 'exchange/exchange.html',
    controller: ['$scope', '$http', '$routeParams',
        function ExchangeController($scope, $http, $routeParams) {
            $http.get('exchange/exchange/exchange.json').then(function(response) {
                $scope.exchange = response.data;
            });
        }
    ]
});