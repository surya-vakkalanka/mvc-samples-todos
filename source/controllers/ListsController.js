enyo.kind({
    name: "Todos.ListsController",
    kind: "enyo.CollectionController",
    model: "Todos.ListModel",
    addList: function () {
        this.add({});
    },
    clearList: function () {
        this.reset();
    }
});
