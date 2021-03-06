enyo.kind({
    name: "Todos.Details",
    kind: "enyo.View",
    classes: "panel details",
    controller: "Todos.selectedItem",
    layoutKind: "enyo.FittableRowsLayout",
    status: null,
    bindings: [
        {from: "controller.task", to: "$.label.content"},
        {from: "controller.model", to: "status"},
        {from: "controller.completed", to: "$.completed.checked", oneway: false},
        {from: "controller.description", to: "$.description.value"}
    ],
    create: function() {
        this.inherited(arguments);
        this.statusChanged();
    },
    components: [
        {name: "header", kind: "onyx.Toolbar", 
            layoutKind: "enyo.FittableColumnsLayout",
            components: [  
                {kind: "onyx.Grabber"},
                {name: "label", content: " ", fit: true},
                {name: "delete", kind: "onyx.Button", content: "Delete Task", classes: "onyx-negative", ontap: "showDialog"},
                {name: "confirm", kind: "Todos.Dialog", textLabel: "Are you sure you want to delete the selected task?", onConfirm: "deleteTask"}
            ]
        },
        {
            name: "detail", kind: "enyo.View", fit: true, layoutKind: "enyo.FittableRowsLayout",
            components: [
                {
                    layoutKind: "enyo.FittableColumnsLayout", fit: true,
                    components: [
                        {
                            kind: "onyx.InputDecorator", fit: true,
                            components: [
                                {name: "description", kind: "onyx.TextArea", classes: "description"}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "footer", kind: "onyx.Toolbar", 
            layoutKind: "enyo.FittableColumnsLayout", 
            components: [
                {kind: "onyx.Grabber"},
                {fit: true}, 
                {
                    name: "status", layoutKind: "enyo.FittableColumnsLayout",
                    components: [
                        {content: "Completed", fit: true, style: "padding: 5px 5px 0 0;"}, 
                        {
                            kind: "onyx.InputDecorator",
                            components: [
                                {name: "completed", kind: "onyx.Checkbox", onchange: "didCheck"}
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    statusChanged: function () {
        this.inherited(arguments);
        this.$.delete.setShowing(this.status);
        this.$.description.setShowing(this.status);
        this.$.status.setShowing(this.status);
        this.reflow();
    },
    showDialog: function() {
        this.$.confirm.setShowing(true);
    },
    deleteTask: function() {
        this.controller.destroyItem();
    }
});