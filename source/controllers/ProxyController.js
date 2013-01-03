enyo.kind({
    name: "Todos.ProxyController",
    kind: "enyo.CollectionRepeaterController",
    filter: "all",
    handlers: {
        onmodelchange: "dataChanged"
    },
    data: enyo.Computed(function () {
        var filter = this.filter;
        return this.get(filter);
    }, "models", "filter"),
    all: enyo.Computed(function () {
        return this.models || [];
    }),
    completed: enyo.Computed(function () {
        var models = this.models || [];
        return enyo.filter(models, function (model) {return model.get("completed")});
    }),
    active: enyo.Computed(function () {
        var models = this.models || [];
        return enyo.filter(models, function (model) {return !model.get("completed")});
    }),
    dataChanged: function () {
        this.renderAllRows();
    },
    modelAdded: function (sender, event) {
        var data = this.get("data");
        var len = data.length;
        var model = event.model;
        if (len && !!~data.indexOf(model)) {
            this.inherited(arguments);
        }
    }
});
