(function () {
    
    Todos.ListCollection = Backbone.Collection.extend({
        model: Todos.ListModel,
        localStorage: new Backbone.LocalStorage("TodosLists")
    });
    
}());