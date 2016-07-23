angular.module('bonuses').component('bonuses', {
    templateUrl: 'bonuses/bonuses.html',
    controller: ['$scope', '$http', '$routeParams',
        function BonusesController($scope, $http, $routeParams) {

            $http.get('bonuses/bonuses/bonuses.json').then(function(response) {
                $scope.bonuses = response.data;
            });
        }
    ]         
});