(function () {
    'use strict';
    angular
        .module('Leisure')
        .controller('resultsController', resultsController);

    resultsController.$inject = ['$stateParams', 'searchService'];

    function resultsController($stateParams, searchService) {
        var vm = this;
        var keywords = $stateParams['keywords'];
        if (!keywords) {
            searchService.search(keywords).then(function (results) {
                vm.results = result;
            }, function (error) {
                console.log(error);
            });
        }
    }

}());