(function () {
    'use strict';
    angular
        .module('Leisure')
        .controller('searchBarController', searchBarController);
    
    searchBarController.$inject = ['$state'];
    function searchBarController($state) {
        var vm = this;
        vm.keywords = undefined;
        
        vm.search = function() {
            if (!vm.keywords) {
                console.log('keywords not defined while clicking search.');
                return false;
            } 
            $state.go('search', {keywords: vm.keywords});
        }
    } 
}());