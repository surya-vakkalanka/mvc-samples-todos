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
        },
        initialize: function () {
            var cid = this.cid;
            var title = this.get("title");
            title = enyo.format("%. %.", title, cid);
            this.set("title", title);
        }
    });
    
}());