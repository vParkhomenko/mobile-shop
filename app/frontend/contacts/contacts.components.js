angular.module('contacts').component('contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: ['$scope', '$http', '$routeParams',
        function СontactsController($scope, $http, $routeParams) {
            
            $http.get('contacts/contacts/contacts.json').then(function(response) {
                $scope.contacts = response.data;
            });
        }
    ]
});