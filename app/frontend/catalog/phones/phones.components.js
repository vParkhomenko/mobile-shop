angular.module('phones').component('phones', {
    templateUrl: 'catalog/phones/phones.html',
    controller: ['$scope', '$http', '$routeParams',
        function PhonesController($scope, $http, $routeParams) {

            $http.get('catalog/phones/phones/phones.json').then(function(response) {
                $scope.phones = response.data;
            });
        }
    ]
});

