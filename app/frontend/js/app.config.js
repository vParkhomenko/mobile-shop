angular.
    module('MobiTel').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {

                $routeProvider.
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
                    when('/catalog/laptops', {
                        template: '<laptops></laptops>'
                    }).
                    when('/catalog/laptops/:laptopId', {
                        template: '<laptop-detail></laptop-detail>'
                    }).
                    when('/catalog/phones', {
                        template: '<phones></phones>'
                    }).
                    when('/catalog/phones/:phoneId', {
                        template: '<phone-detail></phone-detail>'
                    }).
                    when('/catalog/tablets', {
                        template: '<tablets></tablets>'
                    }).
                    when('/catalog/tablets/:tabletId', {
                        template: '<tablet-detail></tablet-detail>'
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