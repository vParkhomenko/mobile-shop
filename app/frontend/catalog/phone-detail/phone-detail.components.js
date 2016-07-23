angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'catalog/phone-detail/phone-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function PhoneDetailController($scope, $http, $routeParams) {

            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };

            $http.get('catalog/phone-detail/phone-detail/' + $routeParams.phoneId + '.json').then(function(response) {
                $scope.phone = response.data;
                $scope.setImage($scope.phone.images[0]);
            });
        }
    ]
});

