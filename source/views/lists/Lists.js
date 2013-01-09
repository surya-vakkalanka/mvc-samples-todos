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
        {name: "confirm", kind: "Todos.Dialog", textLabel: "Are you sure you want to delete selected TodoList?", onConfirm: "deleteList"}
    ], 
    create: function() {
        this.inherited(arguments);
        this.statusChanged();
    },
    statusChanged: function() {
        this.$.delete.setShowing(this.status);
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    deleteList: function() {
        this.controller.removeList();
    }
});