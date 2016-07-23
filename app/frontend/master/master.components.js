angular.module('master').component('master', {
    templateUrl: 'master/master.html',
    controller: ['$scope', '$http', '$routeParams',
        function MasterController($scope, $http, $routeParams) {
            $http.get('master/master/master.json').then(function(response) {
                $scope.master = response.data;
            });
        }
    ]
});
