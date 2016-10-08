(function() {
'use strict';

    angular
        .module('studmon')
        .controller('teacherController', teacherController);

    teacherController.$inject = ['$http'];

    function teacherController($http) {
        var vm = this;
        vm.students = [];

        fetchData();

        ////////////////

        function fetchData() {
            $http
                .get('students.json')
                .then(function success(data){
                    console.log(data);
                    vm.students = data.data;
                })
                .catch(function failure(data){
                    console.log(data);
                });            
        }
    }
})();