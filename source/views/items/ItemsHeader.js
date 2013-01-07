enyo.kind({
    name: "Todos.ItemsHeader",
    kind: "onyx.Toolbar", 
    classes: "header",
    layoutKind: "FittableColumnsLayout", 
    controller: "Todos.selectedList",
    bindings: [
        {from: "controller.length", to: "length"},
        {from: "controller.model", to: "status"},
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
        {name: "clearAll", kind: "onyx.Button", classes: "onyx-negative", content: "Delete All", ontap: "showDialog"},
        {name: "add", kind: "onyx.Button", classes: "onyx-affirmative", content: "New Task", ontap: "addItem"},
        {name: "confirm", kind: "enyo.Popup", floating: true, centered: true, showing: false, classes: "popup", 
            components: [
                {content: "Are you sure you want to delete all tasks from this TodoList?", style: "margin-bottom: 20px;"},
                {name: "removeAllBtn", kind: "onyx.Button", content: "Yes, Go Ahead!", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "removeList"},
                {name: "cancelBtn", kind: "onyx.Button", content: "No, Cancel!", classes: "onyx-negative", ontap: "hideDialog"}
            ]
        }
    ],
    lengthChanged: function() {
        this.$.clearAll.setShowing(this.length > 0);
        this.reflow();
    },
    statusChanged: function() {
        this.$.add.setShowing(this.status);
        this.reflow();
    },
    removeList: function() {
        this.controller.clearList();
        this.hideDialog();
        this.reflow();
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    hideDialog: function() {
        this.$.confirm.setShowing(false);
    }
});