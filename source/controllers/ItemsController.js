enyo.kind({
    name: "Todos.ItemsController",
    kind: "enyo.CollectionRepeaterController",
    bindings: [
        {from: "Todos.selectedList.items", to: "collection"}
    ]
});
