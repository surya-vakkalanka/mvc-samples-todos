(function () {
    
    Todos.ItemCollection = Backbone.Collection.extend({
        model: Todos.TodoModel,
        localStorage: new Backbone.LocalStorage("TodosItems")
    });
    
}());