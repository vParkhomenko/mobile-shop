angular.module('productDetail').component('productDetail', {
    templateUrl: 'catalog/product-detail/product-detail.html',
    controller: ['$scope', 'ProductDetail', '$routeParams',
        function LaptopDetailController($scope, ProductDetail, $routeParams) {
            
            $scope.product = ProductDetail.get({product: $routeParams.product}, function(product) {
                $scope.setImage($scope.product.images[0]);
            });
            
            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]
});



