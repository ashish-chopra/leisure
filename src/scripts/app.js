(function() {
    angular
        .module('Leisure', ['ui.router'])
        .config(configureApp);

    configureApp.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configureApp($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })
            .state('search', {
                url: '/search?keywords',
                controller: 'resultsController',
                controllerAs: 'resultCtrl',
                templateUrl: 'templates/results.html'
            });
    }

}());
