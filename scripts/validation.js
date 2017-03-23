(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },

        // Decaf Validation Challenge
        isDecaf: function(coffeeOrder, coffeeStrength) {
            if (/decaf/.test(coffeeOrder) && coffeeStrength > 20) {
                return false;
            }
            return true;
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
