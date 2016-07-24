angular.module('MobiTel').
    factory('About', [
        '$resource', function($resource) {
            return $resource('about/about/about.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Bonuses', [
        '$resource', function($resource) {
            return $resource('bonuses/bonuses/bonuses.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('BuyingOnline', [
        '$resource', function($resource) {
            return $resource('buying-online/buying-online/buying-online.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Laptop', [
        '$resource', function($resource) {
            return $resource('catalog/laptops/laptops/:laptopId.json', {}, {
                query: {
                    method: 'GET',
                    params: {laptopId: 'laptops'},
                    isArray: true
                }
            });
        }
    ]).
    factory('Phone', [
        '$resource', function($resource) {
            return $resource('catalog/phones/phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            });
        }
    ]).
    factory('Tablet', [
        '$resource', function($resource) {
            return $resource('catalog/tablets/tablets/:tabletId.json', {}, {
                query: {
                    method: 'GET',
                    params: {tabletId: 'tablets'},
                    isArray: true
                }
            });
        }
    ]).
    factory('Contacts', [
        '$resource', function($resource) {
            return $resource('contacts/contacts/contacts.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Credits', [
        '$resource', function($resource) {
            return $resource('credits/credits/credits.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Discount', [
        '$resource', function($resource) {
            return $resource('discounts/discounts/:discountId.json', {}, {
                query: {
                    method: 'GET',
                    params: {discountId: 'discounts'},
                    isArray: true
                }
            });
        }
    ]).
    factory('Exchange', [
        '$resource', function($resource) {
            return $resource('exchange/exchange/exchange.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Guarantee', [
        '$resource', function($resource) {
            return $resource('guarantee/guarantee/guarantee.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Home', [
        '$resource', function($resource) {
            return $resource('home/home/home.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Master', [
        '$resource', function($resource) {
            return $resource('master/master/master.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('ShippingAndPayment', [
        '$resource', function($resource) {
            return $resource('shipping-and-payment/shipping-and-payment/shipping-and-payment.json', {}, {
                query: {
                    method: 'GET'
                }
            });
        }
    ]).
    factory('Shops', [
        '$resource', function($resource) {
            return $resource('shops/shops/shops.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    ]); 