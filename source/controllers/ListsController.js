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
    removeList: function() {
        var model = this.selection;
        //This should happen automatically in SelectionSupportMixin and not have to rely on explicitly setting the deselect on destroy
        this.deselect(model);
        model.destroy();
    },
    clearLists: function () {
        this.reset();
    },
    didAdd: function (sender, event) {
        var model = event.model;
        var items = model.get("items");
        if (model.isNew()) model.save();
        model.bind("add:items", function (child) {
            child.on("change", function () {
                model.trigger("change", model);
            });
            child.on("destroy", function () {
                model.trigger("change", model);
            });
            child.save();
            model.save();
        });
        if (items) {
            items = items.models;
            enyo.forEach(items, function (child) {
                child.on("change", function () {
                    model.trigger("change", model);
                });
                child.on("destroy", function () {
                    model.trigger("change", model);
                });
            });
        }
        model.bind("remove:items", function () {
            model.save();
        });
    }
});