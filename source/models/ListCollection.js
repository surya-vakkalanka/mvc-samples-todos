(function () {
    
    Todos.ListCollection = Backbone.Collection.extend({
        model: Todos.ListModel,
        prefix: "list"
    });
    
}());