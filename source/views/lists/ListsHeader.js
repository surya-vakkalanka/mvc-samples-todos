enyo.kind({
    name: "Todos.ListsHeader",
    kind: "onyx.Toolbar", 
    classes: "header",
    layoutKind: "FittableColumnsLayout", 
    controller: "Todos.lists",
    bindings: [
        {from: "controller.length", to: "length"},
        {from: "controller.length", to: "$.count.content"}
    ],
    components: [
        {name: "count", kind: "Todos.Badge", background: "#fff", color: "#333", content: ""},
        {
            fit: true,
            name: "label", content: "TodoLists"
        },
        {name: "clear", kind: "onyx.Button", classes: "onyx-negative", content: "Delete All", ontap: "showDialog"},
        {name: "add", kind: "onyx.Button", classes: "onyx-affirmative", content: "New List", ontap: "addList"},
        {name: "confirm", kind: "enyo.Popup", floating: true, centered: true, showing: false, classes: "popup", 
            components: [
                {content: "Are you sure you want to delete all TodoLists?", style: "margin-bottom: 20px;"},
                {name: "removeAllBtn", kind: "onyx.Button", content: "Yes, Go Ahead!", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "removeAll"},
                {name: "cancelBtn", kind: "onyx.Button", content: "No, Cancel!", classes: "onyx-negative", ontap: "hideDialog"}
            ]
        }
    ],
    lengthChanged: function() {
        this.$.clear.setShowing(this.length > 0);
        this.reflow();
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    hideDialog: function() {
        this.$.confirm.setShowing(false);
    },
    removeAll: function() {
        this.controller.clearLists();
        this.hideDialog();
        this.reflow();
    }
});