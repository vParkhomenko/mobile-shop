angular.module('home').component('home', {
    templateUrl: 'home/home.html',
    controller: ['$scope', '$http', '$routeParams', 
        function HomeController($scope, $http, $routeParams) {
            
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;

            $http.get('home/home/home.json').then(function(response) {
                $scope.home = response.data;
            });
        }
    ]
});

