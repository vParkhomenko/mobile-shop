angular.module('guarantee').component('guarantee', {
    templateUrl: 'guarantee/guarantee.html',
    controller: ['$scope', '$http', '$routeParams',
        function GuaranteeController($scope, $http, $routeParams) {
            $http.get('guarantee/guarantee/guarantee.json').then(function(response) {
                $scope.guarantee = response.data;
            });
        }
    ]
});