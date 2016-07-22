angular.module('tablets').component('tablets', {
    templateUrl: 'catalog/tablets/tablets.html',
    controller: ['$scope', '$http', '$routeParams',
        function TabletsController($scope, $http, $routeParams) {
            
            $http.get('catalog/tablets/tablets/tablets.json').then(function(response) {
                $scope.tablets = response.data;
            });
        }
    ]
});

