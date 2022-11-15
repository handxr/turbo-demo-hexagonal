"use strict";
exports.__esModule = true;
exports.AppLoader = void 0;
var adapters_1 = require("adapters");
var domain_1 = require("domain");
var AppLoader;
(function (AppLoader) {
    var postAdapter = new adapters_1.PostRestAdapter();
    var postServiceApi = new domain_1.Post(postAdapter);
    function getPostInstance() {
        return postServiceApi;
    }
    AppLoader.getPostInstance = getPostInstance;
})(AppLoader || (AppLoader = {}));
exports.AppLoader = AppLoader;
