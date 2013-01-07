enyo.kind({
    name: "Todos.Lists",
    kind: "enyo.View",
    classes: "panel lists",
    layoutKind: "enyo.FittableRowsLayout",
    controller: "Todos.lists", 
    bindings: [
        {from: "controller.selection", to: "status"}
    ],
    components: [
        {name: "header", kind: "Todos.ListsHeader"},
        {
            name: "list",
            kind: "enyo.CollectionRepeater",
            fit: true,
            controller: "Todos.lists",
            components: [
                {kind: "Todos.ListsRow"}
            ]
        },
        {
            name: "footer",
            kind: "onyx.Toolbar",
            classes: "footer",
            components: [
                {name: "delete", kind: "onyx.Button", classes: "onyx-negative", content: "Delete Selected List", ontap: "showDialog"}
            ]
        },
        {name: "confirm", kind: "enyo.Popup", floating: true, centered: true, showing: false, classes: "popup", 
            components: [
                {content: "Are you sure you want to delete selected TodoList?", style: "margin-bottom: 20px;"},
                {name: "removeAllBtn", kind: "onyx.Button", content: "Yes, Go Ahead!", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "deleteList"},
                {name: "cancelBtn", kind: "onyx.Button", content: "No, Cancel!", classes: "onyx-negative", ontap: "hideDialog"}
            ]
        }
    ], 
    create: function() {
        this.inherited(arguments);
        this.statusChanged();
    },
    statusChanged: function() {
        this.log(this.status);
        this.$.delete.setShowing(this.status);
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    hideDialog: function() {
        this.$.confirm.setShowing(false);
    },
    deleteList: function() {
        this.controller.removeList();
        this.hideDialog();
    }
});