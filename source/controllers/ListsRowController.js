enyo.kind({
    name: "Todos.ListsRowController",
    kind: "enyo.ModelController", 
    itemLength: enyo.Computed(function() {
        return this.get("items.length");
    }, "items")
});
