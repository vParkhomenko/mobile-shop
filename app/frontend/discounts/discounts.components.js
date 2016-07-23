angular.module('discounts').component('discounts', {
    templateUrl: 'discounts/discounts.html',
    controller: ['$scope', '$http', '$routeParams',
        function DiscountsController($scope, $http, $routeParams) {
            $http.get('discounts/discounts/discounts.json').then(function(response) {
                $scope.discounts = response.data;
            });            
        }
    ]
});