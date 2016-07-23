angular.module('credits').component('credits', {
    templateUrl: 'credits/credits.html',
    controller: ['$scope', '$http', '$routeParams',
        function CreditsController($scope, $http, $routeParams) {
            $http.get('credits/credits/credits.json').then(function(response) {
                $scope.credits = response.data;
            });
        }
    ]
});