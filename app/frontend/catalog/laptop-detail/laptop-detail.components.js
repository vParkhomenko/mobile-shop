angular.module('laptopDetail').component('laptopDetail', {
    templateUrl: 'catalog/laptop-detail/laptop-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function LaptopDetailController($scope, $http, $routeParams) {

            $http.get('catalog/laptop-detail/laptop-detail/' + $routeParams.laptopId + '.json').then(function(response) {
                $scope.laptop = response.data;
            });
        }
    ]
});



