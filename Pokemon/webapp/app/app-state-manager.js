"use strict";

(function () {

    angular.module('pokemon').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/pokeSearcher");

        $stateProvider
            .state("pokeBattler",
                {
                    url: "/pokeBattler",
                    templateUrl: "app/feature/pokeBattler/battler.html"
                })
            .state("pokeBox",
                {
                    url: "/pokeBox",
                    templateUrl: "app/feature/pokeBox/box.html"
                })
            .state("pokeSearcher",
                {
                    url: "/pokeSearcher",
                    templateUrl: "app/feature/pokeSearcher/searcher.html"
                })
    });
}());