angular.module('contacts').component('contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: ['$scope', '$routeParams',
        function СontactsController($scope, $routeParams) {

            $scope.contacts = {
                'h1': 'Многоканальный телефон горячей линии. Ежедневно 8:00-21:00',
                'h2': '0-800-303-505',
                'p1': '(звонки с мобильных и стационарных телефонов в пределах Украины бесплатные)',
                'p2': 'E-mail: info@moditel.ua',
                'p3': 'Если у вас есть жалобы, предложения или комментарии по работе магазинов MobiTel — обязательно сообщите нам об этом по телефону!',
                'p4': 'Мы всегда рады ответить на вопросы в социальных сетях!'                
            };
            $scope.social = [{
                'img': 'img/contact_1.png'
            }, {
                'img': 'img/contact_2.png'
            }, {
                'img': 'img/contact_3.png'
            }, {
                'img': 'img/contact_4.png'
            },{
                'img': 'img/contact_5.png'
            }]
        }
    ]
});