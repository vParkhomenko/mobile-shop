angular.module('laptopDetail').component('laptopDetail', {
    templateUrl: 'catalog/laptop-detail/laptop-detail.html',
    controller: ['$scope', 'Laptop', '$routeParams',
        function LaptopDetailController($scope, Laptop, $routeParams) {

            $scope.laptop = Laptop.get({laptopId: $routeParams.laptopId}, function(laptop) {
                $scope.setImage($scope.laptop.images[0]);
            });
            
            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]
});



