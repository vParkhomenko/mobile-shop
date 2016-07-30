angular.module('adminEdit').component('adminEdit', {
    templateUrl: 'admin-edit/admin-edit.html',
    controller: ['$scope', '$http', 'AdminEdit', '$routeParams',
        function AdminEditController($scope, $http, AdminEdit, $routeParams) {

            AdminEdit.get({product: $routeParams.product}, function (product) {
                $scope.editProduct = {
                    "category": product.category,
                    "id": product.id,
                    "imageUrl": product.imageUrl,
                    "name": product.name,
                    "snippet": product.snippet,
                    "description": product.description,
                    "manufacturer": product.manufacturer,
                    "model": product.model,
                    "diagonal": product.diagonal,
                    "screen": product.screen,
                    "system": product.system,
                    "CPU": product.CPU,
                    "cores": product.cores,
                    "sim": product.sim,
                    "battery": product.battery,
                    "weight": product.weight,
                    "images": product.images
                }
            });
            
            $scope.save = function (editProduct) {
                                
                if ( $scope.editingForm.$valid ) {
                    $('.modal-title').text('Товар ' + editProduct.name + ' изменен!');
                    $http.put('/api/' + editProduct.category + '/' + editProduct.id, editProduct).success(function (editProduct) {
                        $('#myModal').modal('show');
                    });
                };
            };
        }
    ]
});