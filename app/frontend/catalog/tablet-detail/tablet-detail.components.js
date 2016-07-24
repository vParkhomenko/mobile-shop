angular.module('tabletDetail').component('tabletDetail', {
    templateUrl: 'catalog/tablet-detail/tablet-detail.html',
    controller: ['$scope', 'Tablet', '$routeParams',
        function TabletDetailController($scope, Tablet, $routeParams) {

            $scope.tablet = Tablet.get({tabletId: $routeParams.tabletId}, function(tablet) {
                $scope.setImage($scope.tablet.images[0]);
            });
            
            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]
});

