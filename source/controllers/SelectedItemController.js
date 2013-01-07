enyo.kind({
    name: "Todos.SelectedItemController",
    kind: "enyo.ModelController",
    handlers: {
        oninput: "input"
    },
    input: function (sender, event) {
        var originator = event.originator;
        var value = originator.get("value");
        this.set("description", value);
    }
});