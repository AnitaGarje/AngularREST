(function() {
'use strict';

    angular
        .module('studmon')
        .controller('StudentController', StudentController);

    StudentController.$inject = [];
    
    function StudentController() {
        var vm = this;
        vm.greet = "Hello World";

        activate();

        ////////////////

        function activate() { }
    }
})();