angular.module('adminAdd').component('adminAdd', {
    templateUrl: 'admin-add/admin-add.html',
    controller: ['$scope', '$http', '$routeParams',
        function AdminEditController($scope, $http, $routeParams) {
            
            $scope.save = function (addProduct) {
                                
                if ( $scope.addingForm.$valid ) {
                    $('.modal-title').text('Товар ' + addProduct.name + ' добавлен!');
                    $http.post('/api/' + addProduct.category, addProduct).success(function (addProduct) {
                        $('#myModal').modal('show');
                    });
                };
            };
        }
    ]
});