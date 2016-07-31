angular.module('admin').component('admin', {
    templateUrl: 'admin/admin.html',
    controller: ['$scope', '$http', 'Admin', '$routeParams', '$sce',
        function AdminController($scope, $http, Admin, $routeParams, $sce) {
                
                Admin.get({page: $routeParams.currentPage}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;
                    $scope.currentPage = $routeParams.currentPage || 1;
                    $scope.pagesNum = Math.ceil($scope.totalItems / $scope.per_page);
                    $scope.paginationList = [];

                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&laquo;'),
                        link: '#/admin?currentPage=' + (Number($scope.currentPage) - 1)
                    });

                    for (var i = 0; i < $scope.pagesNum; i++) {
                        var name = i + 1;
                        $scope.paginationList.push({
                            name: $sce.trustAsHtml(String(name)),
                            link: '#/admin?currentPage=' + (i + 1)
                        });
                    }
                    
                    $scope.paginationList.push({
                        name: $sce.trustAsHtml('&raquo;'),
                        link: '#/admin?currentPage=' + (Number($scope.currentPage) + 1)
                    });
                });
                        
            $scope.removeProduct = function (product) {
                $http.delete('/api/' + product.category + '/' + product.id).success(function () {
                    $scope.getProducts();
                });
            };
        }
    ]
});