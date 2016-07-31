angular.module('products').component('products', {
    templateUrl: 'catalog/products/products.html',
    controller: ['$scope', 'Products', '$routeParams', '$sce',
        function ProductsController($scope, Products, $routeParams, $sce) {
            
                Products.get({page: $routeParams.currentPage, product: $routeParams.category}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;
                    $scope.currentPage = $routeParams.currentPage || 1;
                    $scope.category = $routeParams.category
                    $scope.pagesNum = Math.ceil($scope.totalItems / $scope.per_page);
                    $scope.paginationList = [];

                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&laquo;'),
                        link: '#/catalog/' + $scope.category + '?currentPage=' + (Number($scope.currentPage) - 1)
                    });

                    for (var i = 0; i < $scope.pagesNum; i++) {
                        var name = i + 1;
                        $scope.paginationList.push({
                            name: $sce.trustAsHtml(String(name)),
                            link: '#/catalog/' + $routeParams.category + '?currentPage=' + (i + 1)
                        });
                    }

                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&raquo;'),
                        link: '#/catalog/' + $routeParams.category + '?currentPage=' + (Number($scope.currentPage) + 1)
                    });
                });
        }
    ]
});