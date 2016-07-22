angular.module('discounts').component('discounts', {
    templateUrl: 'discounts/discounts.html',
    controller: ['$scope', '$routeParams',
        function DiscountsController($scope, $routeParams) {
            $scope.discounts = [{
                'img': 'img/item1.jpg',
                'label': 'Название акции',
                'p': 'Описание акции, какой то текст'
            }, {
                'img': 'img/item2.jpg',
                'label': 'Название акции',
                'p': 'Описание акции, какой то текст'
            }, {
                'img': 'img/item3.jpg',
                'label': 'Название акции',
                'p': 'Описание акции, какой то текст'
            }]
            
        }
    ]
});