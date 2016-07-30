angular.module('admin').component('admin', {
    templateUrl: 'admin/admin.html',
    controller: ['$scope', '$http', 'Admin', '$routeParams',
        function AdminController($scope, $http, Admin, $routeParams) {
            $scope.currentPage = 1;
            $scope.pageChanged = function () {
                $scope.getProducts();
            };

            $scope.getProducts = function () {

                Admin.get({page: $scope.currentPage}, function(response) {
                    $scope.products = response.data;
                    $scope.totalItems = response.totalItems;
                    $scope.per_page = response.per_page;
                });
            };
            
            $scope.removeProduct = function (product) {
                $http.delete('/api/' + product.category + '/' + product.id).success(function () {
                    $scope.getProducts();
                });
            };
        }
    ]
});