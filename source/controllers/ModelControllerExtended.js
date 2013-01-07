enyo.ModelController.extend({
    input: function (sender, event) {
        var originator = event.originator;
        var value = originator.get("value");
        var property = originator.bindProperty;
        this.set(property, value);
    },
    select: function () {
        if (false === this.get("selected")) this.set("selected", true);
    },
    didCheck: function (sender, event) {
        this.set("completed", sender.get("checked"));
    },
    destroyItem: function () {
        var model = this.model;
        if (model) model.destroy();
    }
});