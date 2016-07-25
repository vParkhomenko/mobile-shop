angular.module('laptopDetail').component('laptopDetail', {
    templateUrl: 'catalog/laptop-detail/laptop-detail.html',
    controller: ['$scope', 'LaptopDetail', '$routeParams',
        function LaptopDetailController($scope, LaptopDetail, $routeParams) {
            
            $scope.laptop = LaptopDetail.get({laptopId: $routeParams.product}, function(laptop) {
                $scope.setImage($scope.laptop.detail.images[0]);
            });
            
            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]
});



