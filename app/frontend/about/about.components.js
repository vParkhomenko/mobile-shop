angular.module('about').component('about', {
    templateUrl: 'about/about.html',
    controller: ['$scope', 'About',
        function AboutController($scope, About) {
            $scope.about = About.query();
        }
    ]
});
