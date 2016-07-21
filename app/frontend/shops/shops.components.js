angular.module('shops').component('shops', {
    templateUrl: 'shops/shops.html',
    controller: ['$scope', '$routeParams',
        function HomeController($scope, $routeParams) {
            $scope.shops = [{
                'city': 'Киев',
                'street': 'ул. Днепровская наб., 33',
                'shop': 'ТЦ "Аркадия"',
                'time': 'Время работы с 10:00 до 22:00'
            }, {
                'city': 'Одесса',
                'street': 'ул. Магнитогорская, 1А',
                'shop': 'ТЦ "Дарынок"',
                'time': 'Время работы с 10:00 до 20:00'
            }, {
                'city': 'Харьков',
                'street': 'ул. Борщаговская, 154 А',
                'shop': 'ТЦ "Аркадия"',
                'time': 'Время работы с 10:00 до 21:00'
            }, {
                'city': 'Николаев',
                'street': 'пр. Московський, 23',
                'shop': 'ТЦ "Городок"',
                'time': 'Время работы с 9:00 до 21:00'
            }, {
                'city': 'Херсон',
                'street': 'ТЦ "Новая Волна"',
                'shop': 'ул. Шекспира, 6',
                'time': 'Время работы с 10:00 до 22:00'
            }, {
                'city': 'Львов',
                'street': 'ул.Вербицкого, 1',
                'shop': 'ТЦ "NEW WAY"',
                'time': 'Время работы с 10:00 до 22:00'
            }]
        }
    ]
});