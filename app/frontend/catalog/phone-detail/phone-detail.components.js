angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'catalog/phone-detail/phone-detail.html',
    controller: ['$scope', 'Phone', '$routeParams',
        function PhoneDetailController($scope, Phone, $routeParams) {

            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
                $scope.setImage($scope.phone.images[0]);
            });
            
            $scope.setImage = function setImage(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }
    ]
});

