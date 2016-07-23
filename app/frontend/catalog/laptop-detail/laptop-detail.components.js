angular.module('laptopDetail').component('laptopDetail', {
    templateUrl: 'catalog/laptop-detail/laptop-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function LaptopDetailController($scope, $http, $routeParams) {

            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
            
            $http.get('catalog/laptop-detail/laptop-detail/' + $routeParams.laptopId + '.json').then(function(response) {
                $scope.laptop = response.data;
                $scope.setImage($scope.laptop.images[0]);
            });
        }
    ]
});



