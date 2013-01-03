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
    modelAdded: function () {
        if (this.get("data").length) {
            this.inherited(arguments);
        }
    }
});
