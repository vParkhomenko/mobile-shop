angular.module('allCategories').component('allCategories', {
    templateUrl: 'catalog/products/products.html',
    controller: ['$scope', 'AllCategories', '$routeParams',
        function AllCategoriesController($scope, AllCategories, $routeParams) {
                        
            $scope.pageChanged = function (page) {
                $scope.getProducts();
            };

            $scope.getProducts = function () {

                AllCategories.get({page: $scope.currentPage}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;
                });
            };
        }
    ]
});