(function () {
    
    Todos.ItemModel = Backbone.RelationalModel.extend({
        defaults: {
            task: "default entry",
            selected: false,
            completed: false,
            description: "Add a description for this todo item"
        }
    });
    
}());