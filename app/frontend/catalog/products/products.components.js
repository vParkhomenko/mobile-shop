angular.module('products').component('products', {
    templateUrl: 'catalog/products/products.html',
    controller: ['$scope', 'Products', '$routeParams',
        function ProductsController($scope, Products, $routeParams) {
            $scope.currentPage = 1;
            $scope.pageChanged = function (page) {
                $scope.getProducts();
            };
            
            $scope.getProducts = function () {

                Products.get({page: $scope.currentPage, product: $routeParams.category}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;
                });
            };
        }
    ]
});