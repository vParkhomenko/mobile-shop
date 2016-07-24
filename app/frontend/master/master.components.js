angular.module('master').component('master', {
    templateUrl: 'master/master.html',
    controller: ['$scope', 'Master',
        function MasterController($scope, Master) {
            $scope.master = Master.query();
        }
    ]
});
