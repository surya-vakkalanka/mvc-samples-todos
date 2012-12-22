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
    deselect: function () {
        // this was deselecting the list when add was pressed for an item
        //if (true === this.get("selected")) this.set("selected", false);
    },
    didCheck: function (sender, event) {
        this.set("completed", sender.get("checked"));
    }
});
