angular.module('guarantee').component('guarantee', {
    templateUrl: 'guarantee/guarantee.html',
    controller: ['$scope', 'Guarantee',
        function GuaranteeController($scope, Guarantee) {
            $scope.guarantee = Guarantee.query();
        }
    ]
});