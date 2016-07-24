angular.module('bonuses').component('bonuses', {
    templateUrl: 'bonuses/bonuses.html',
    controller: ['$scope', 'Bonuses',
        function BonusesController($scope, Bonuses) {
            $scope.bonuses = Bonuses.query();
        }
    ]         
});