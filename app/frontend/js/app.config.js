angular.
    module('MobiTel').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {

                $routeProvider.
                    when('/admin', {
                        template: '<admin></admin>'
                    }).
                    when('/admin/add', {
                        template: '<admin-add></admin-add>'
                    }).
                    when('/admin/edit/:product', {
                        template: '<admin-edit></admin-edit>'
                    }).
                    when('/home', {
                        template: '<home></home>'
                    }).
                     when('/discounts', {
                         template: '<discounts></discounts>'
                    }).
                    when('/discounts/:discountId', {
                        template: '<discount-detail></discount-detail>'
                    }).
                    when('/shipping-and-payment', {
                        template: '<shipping-and-payment></shipping-and-payment>'
                    }).
                    when('/contacts', {
                        template: '<contacts></contacts>'
                    }).
                    when('/shops', {
                        template: '<shops></shops>'
                    }).
                    when('/catalog/all-categories', {
                        template: '<all-categories></all-categories>'
                    }).
                    when('/catalog/:category', {
                        template: '<products></products>'
                    }).
                    when('/catalog/:category/:product', {
                        template: '<product-detail></product-detail>'
                    }).
                    when('/about', {
                        template: '<about></about>'
                    }).
                    when('/bonuses', {
                        template: '<bonuses></bonuses>'
                    }). 
                    when('/credits', {
                        template: '<credits></credits>'
                    }).
                    when('/master', {
                        template: '<master></master>'
                    }).
                    when('/guarantee', {
                        template: '<guarantee></guarantee>'
                    }).
                    when('/exchange', {
                        template: '<exchange></exchange>'
                    }).
                    when('/buying-online', {
                        template: '<buying-online></buying-online>'
                    }).
                    otherwise('/home')
            }
        ])