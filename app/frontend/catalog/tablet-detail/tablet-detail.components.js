angular.module('tabletDetail').component('tabletDetail', {
    templateUrl: 'catalog/tablet-detail/tablet-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function TabletDetailController($scope, $http, $routeParams) {

            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
            
            $http.get('catalog/tablet-detail/tablet-detail/' + $routeParams.tabletId + '.json').then(function(response) {
                $scope.tablet = response.data;
                $scope.setImage($scope.tablet.images[0]);
            });
        }
    ]
});

