(function () {
    
    Todos.ListModel = Backbone.RelationalModel.extend({
        relations: [{
            type: Backbone.HasMany,
            key: "items",
            relatedModel: "Todos.ItemModel",
            collectionType: "Todos.ItemCollection",
            reverseRelation: {
                key: "list",
                includeInJSON: "id"
            }
        }],
        defaults: {
            title: "default title",
            selected: false,
            items: [{},{},{}]
        }
    });
    
}());