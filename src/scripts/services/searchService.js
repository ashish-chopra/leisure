(function () {
    'use strict';
    angular
        .module('Leisure')
        .service('searchService', searchService);
    
    searchService.$inject = [];
    function searchService() {
        return {
            search : function() {}
        };
    }
    
}());