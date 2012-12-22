enyo.kind({
    name: "Todos.SelectedListController",
    kind: "enyo.ModelController",
    proxy: new Todos.ProxyController(),
    bindings: [
        {from: "items", to: "proxy.collection"},
        {from: "proxy.length", to: "length"},
        {from: "activeFilter", to: "proxy.filter"}
    ],
    addItem: function () {
        this.proxy.add({});
    },
    clearList: function () {
        this.proxy.reset();
    },
    activeFilter: enyo.Computed(function () {
        var filter = this.filter;
        if (!filter) return "all";
        else return filter.content;
    }, "filter")
});
