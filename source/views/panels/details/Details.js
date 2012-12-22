enyo.kind({
    name: "Todos.Details",
    kind: "enyo.View",
    classes: "panel details",
    controller: "Todos.selectedItem",
    layoutKind: "enyo.FittableRowsLayout",
    fit: true,
    status: null,
    bindings: [
        {from: "controller.model", to: "$.description.showing"},
        {from: "controller.model", to: "$.completed.showing"},
        {from: "controller.model", to: "$.label.showing"},
        {from: "controller.model", to: "status"},
        {from: "controller.task", to: "$.header.$.label.$.text.content"},
        {from: "controller.completed", to: "$.completed.checked"},
        {from: "controller.description", to: "$.description.value"}
    ],
    components: [
        {
            name: "header",
            kind: "Todos.PanelHeader",
            components: [
                {name: "label", content: "Completed: "},
                {
                    name: "completed",
                    kind: "onyx.Checkbox",
                    onchange: "didCheck"
                }
            ]
        },
        {
            name: "detail",
            kind: "enyo.View",
            fit: true,
            layoutKind: "enyo.FittableRowsLayout",
            components: [
                {
                    layoutKind: "enyo.FittableColumnsLayout",
                    fit: true,
                    components: [
                        {
                            kind: "onyx.InputDecorator",
                            fit: true,
                            components: [
                                {
                                    name: "description",
                                    kind: "onyx.TextArea",
                                    classes: "description"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {name: "footer", kind: "onyx.Toolbar"}
    ],
    statusChanged: function () {
        this.reflow();
    }
});
