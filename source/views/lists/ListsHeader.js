enyo.kind({
    name: "Todos.ListsHeader",
    kind: "onyx.Toolbar", 
    layoutKind: "FittableColumnsLayout", 
    controller: "Todos.lists",
    bindings: [
        {from: "controller.length", to: "length"},
        {from: "controller.length", to: "$.count.content"}
    ],
    components: [
        {name: "count", kind: "Todos.Badge", background: "#fff", color: "#333", content: ""},
        {name: "label", content: "TodoLists", fit: true},
        {name: "clear", kind: "onyx.Button", classes: "onyx-negative", content: "Delete All", ontap: "showDialog"},
        {name: "add", kind: "onyx.Button", classes: "onyx-affirmative", content: "New List", ontap: "addList"},
        {name: "confirm", kind: "Todos.Dialog", textLabel: "Are you sure you want to delete all TodoLists?", onConfirm: "removeAll"}
    ],
    lengthChanged: function() {
        this.$.clear.setShowing(this.length > 0);
        this.reflow();
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    removeAll: function() {
        this.controller.clearLists();
    }
});