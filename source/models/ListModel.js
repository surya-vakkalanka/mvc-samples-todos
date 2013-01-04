(function () {
    
    Todos.ListModel = Backbone.RelationalModel.extend({
        idAttribute: "uuid",
        defaults: {
            title: "",
            selected: false,
        },
        relations: [{
            type: Backbone.HasMany,
            key: "items",
            relatedModel: "Todos.ItemModel",
            collectionType: "Todos.ItemCollection",
            includeInJSON: "uuid",
            autoFetch: true,
            reverseRelation: {
                key: "list",
                includeInJSON: "uuid"
            }
        }],
        initialize: function () {
            var cid = this.cid;
            var title = this.get("title");
            if ("" === title) {
                title = enyo.format("TodoList %.", this.cid.substring(1));
                this.set("title", title);
            }
        },
        parse: function (json) {
            delete json.selected;
            return json;
        }
    });
    
}());