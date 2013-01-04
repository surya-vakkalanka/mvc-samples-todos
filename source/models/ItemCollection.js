(function () {
    
    Todos.ItemCollection = Backbone.Collection.extend({
        model: Todos.TodoModel,
        prefix: "item"
    });
    
}());