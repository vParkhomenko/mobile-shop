angular.module('discountDetail').component('discountDetail', {
    templateUrl: 'discount-detail/discount-detail.html',
    controller: ['$scope', '$http', '$routeParams',
        function DiscountDetailController($scope, $http, $routeParams) {

            $http.get('discount-detail/discount-detail/' + $routeParams.discountId + '.json').then(function(response) {
                $scope.discount = response.data;
            });
        }
    ]
});



