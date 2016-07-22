angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'catalog/phone-detail/phone-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function PhoneDetailController($scope, $http, $routeParams) {

            $http.get('catalog/phone-detail/phone-detail/' + $routeParams.phoneId + '.json').then(function(response) {
                $scope.phone = response.data;
            });
        }
    ]
});

