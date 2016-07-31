angular.module('allCategories').component('allCategories', {
    templateUrl: 'catalog/products/products.html',
    controller: ['$scope', 'AllCategories', '$routeParams', '$sce',
        function AllCategoriesController($scope, AllCategories, $routeParams, $sce) {
                     
                AllCategories.get({page: $routeParams.currentPage}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;

                    $scope.currentPage = $routeParams.currentPage || 1;
                    $scope.pagesNum = Math.ceil($scope.totalItems / $scope.per_page);
                    $scope.paginationList = [];

                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&laquo;'),
                        link: '#/catalog/all-categories?currentPage=' + (Number($scope.currentPage) - 1)
                    });

                    for (var i = 0; i < $scope.pagesNum; i++) {
                        var name = i + 1;
                        $scope.paginationList.push({
                            name: $sce.trustAsHtml(String(name)),
                            link: '#/catalog/all-categories?currentPage=' + (i + 1)
                        });
                    }

                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&raquo;'),
                        link: '#/catalog/all-categories?currentPage=' + (Number($scope.currentPage) + 1)
                    });
                });
        }
    ]
});