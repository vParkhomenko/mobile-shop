angular.module('home').component('home', {
    templateUrl: 'home/home.html',
    controller: ['$scope', 'Home', 
        function HomeController($scope, Home) {
            
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $scope.home = Home.query();
        }
    ]
});

