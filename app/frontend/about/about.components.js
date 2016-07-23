angular.module('about').component('about', {
    templateUrl: 'about/about.html',
    controller: ['$scope', '$http', '$routeParams',
        function AboutController($scope, $http, $routeParams) {
            $http.get('about/about/about.json').then(function(response) {
                $scope.about = response.data;
            });
        }
    ]
});
