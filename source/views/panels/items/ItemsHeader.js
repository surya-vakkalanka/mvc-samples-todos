enyo.kind({
    name: "Todos.ItemsHeader",
    //kind: "Todos.PanelHeader",
    kind: "onyx.Toolbar", 
    classes: "header",
    layoutKind: "FittableColumnsLayout", 
    controller: "Todos.selectedList",
    bindings: [
        {from: "controller.length", to: "length"},
        {from: "controller.model", to: "status"},
        //{from: "controller.model", to: "$.add.disabled", transform: "invert"},
        {from: "controller.title", to: "$.text.content"}
    ],
    create: function() {
        this.inherited(arguments);
        this.lengthChanged();
        this.statusChanged();
    },
    components: [
        {kind: "onyx.Grabber"},
        {name: "text", content: "", fit: true},
        {name: "clear", kind: "onyx.Button", classes: "onyx-negative", content: "Delete All", ontap: "clearList"},
        {name: "add", kind: "onyx.Button", classes: "onyx-affirmative", content: "New Task", ontap: "addItem"}
    ],
    lengthChanged: function() {
        this.$.clear.setShowing(this.length > 0);
        this.reflow();
    },
    statusChanged: function() {
        this.$.add.setShowing(this.status);
        this.reflow();
    },
    invert: function (value) {
        return !Boolean(value);
    }
});