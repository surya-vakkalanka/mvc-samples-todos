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
            title: "",
            selected: false,
        },
        initialize: function () {
            console.log(this);
            var cid = this.cid;
            var title = this.get("title");
            if ("" === title) {
                title = "TodoList " + this.cid;//enyo.format("%. %.", title, cid);
                this.set("title", title);
            }
            this.set("selected", false);
        }
    });
    
}());