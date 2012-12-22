enyo.kind({
    name: "Todos.SelectedListController",
    kind: "enyo.ModelController",
    proxy: new enyo.CollectionController(),
    bindings: [
        {from: "items", to: "proxy.collection"},
        {from: "proxy.length", to: "length"}
    ],
    addItem: function () {
        this.proxy.add({});
    },
    clearList: function () {
        this.proxy.reset();
    }
});
