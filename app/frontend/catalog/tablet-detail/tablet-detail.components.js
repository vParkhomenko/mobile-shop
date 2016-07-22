angular.module('tabletDetail').component('tabletDetail', {
    templateUrl: 'catalog/tablet-detail/tablet-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function TabletDetailController($scope, $http, $routeParams) {

            $http.get('catalog/tablet-detail/tablet-detail/' + $routeParams.tabletId + '.json').then(function(response) {
                $scope.tablet = response.data;
            });
        }
    ]
});

