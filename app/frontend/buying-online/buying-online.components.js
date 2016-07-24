angular.module('buyingOnline').component('buyingOnline', {
    templateUrl: 'buying-online/buying-online.html',
    controller: ['$scope', 'BuyingOnline',
        function BuyingOnlineController($scope, BuyingOnline) {
            $scope.buyingOnline = BuyingOnline.query();
        }
    ]
});