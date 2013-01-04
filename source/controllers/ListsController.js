enyo.kind({
    name: "Todos.ListsController",
    kind: "enyo.CollectionController",
    collection: "Todos.ListCollection",
    autoLoad: true,
    handlers: {
        oncollectionadd: "didAdd",
        onmodelchange: "didChange",
        oncollectionloaded: "didLoad"
    },
    addList: function () {
        this.add({});
    },
    removeList: function(inSender, inEvent) {
        this.log(inSender, inEvent);
        //this.remove();
    },
    clearLists: function () {
        this.reset();
    },
    didAdd: function (sender, event) {
        var model = event.model;
        var collection = this.collection;
        var store = collection.localStorage;
        model.localStorage = store;
        model.save();
    },
    didChange: function (sender, event) {
        var model = event.model;
        var changed = model.changed;
        var change = enyo.keys(changed)[0];
        if ("title" === change) model.save();
    },
    didLoad: function () {
        var collection = this.collection;
        var models = this.models;
        var store = collection.localStorage;
        enyo.forEach(models, function (model) {
            model.localStorage = store;
        });
    }
});
