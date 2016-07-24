angular.module('tablets').component('tablets', {
    templateUrl: 'catalog/tablets/tablets.html',
    controller: ['$scope', 'Tablet',
        function TabletsController($scope, Tablet) {
            $scope.tablets = Tablet.query();
        }
    ]
});

