angular.module('phones').component('phones', {
    templateUrl: 'catalog/phones/phones.html',
    controller: ['$scope', 'Phone',
        function PhonesController($scope, Phone) {
            $scope.phones = Phone.query();
        }
    ]
});

