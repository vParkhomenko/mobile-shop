angular.module('credits').component('credits', {
    templateUrl: 'credits/credits.html',
    controller: ['$scope', 'Credits',
        function CreditsController($scope, Credits) {
            $scope.credits = Credits.query();
        }
    ]
});