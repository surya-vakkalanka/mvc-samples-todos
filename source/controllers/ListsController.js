enyo.kind({
    name: "Todos.ListsController",
    kind: "enyo.CollectionController",
    collection: "Todos.ListCollection",
    autoLoad: true,
    handlers: {
        oncollectionadd: "didAdd"
    },
    load: function () {
        var options = {update:true};
        var _super = this.load._inherited;
        _super.call(this, options);
    },
    addList: function () {
        this.add({});
    },
    clearList: function () {
        this.reset();
    },
    didAdd: function (sender, event) {
        var model = event.model;
        if (model.isNew()) model.save();
        model.bind("add:items", function (child) {
            child.save();
            model.save();
        });
        model.bind("remove:items", function () {
            model.save();
        });
    }
});
