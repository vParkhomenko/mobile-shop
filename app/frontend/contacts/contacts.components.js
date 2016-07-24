angular.module('contacts').component('contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: ['$scope', 'Contacts',
        function СontactsController($scope, Contacts) {
            $scope.contacts = Contacts.query();
        }
    ]
});