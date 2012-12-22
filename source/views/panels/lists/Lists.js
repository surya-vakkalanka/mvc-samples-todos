enyo.kind({
    name: "Todos.Lists",
    kind: "enyo.View",
    classes: "panel lists",
    layoutKind: "enyo.FittableRowsLayout",
    controller: "Todos.selectedList",
    status: null,
    bindings: [
        {from: "controller.model", to: "$.details.showing"},
        {from: "controller.model", to: "status"},
        {from: "controller.length", to: "$.counter.length"},
        {from: "controller.length", to: "$.count.content"}
    ],
    components: [
        {name: "header", kind: "Todos.ListsHeader"},
        {
            name: "list",
            kind: "enyo.CollectionRepeater",
            fit: true,
            controller: "Todos.lists",
            components: [
                {
                    kind: "Todos.Row",
                    editorBindProperty: "title",
                    editorPlaceholder: "Add a title"
                }
            ]
        },
        {
            name: "footer",
            kind: "onyx.Toolbar",
            classes: "footer",
            components: [
                {
                    name: "details",
                    layoutKind: "enyo.FittableColumnsLayout",
                    classes: "details",
                    components: [
                        {name: "count", classes: "number"},
                        {
                            name: "counter",
                            classes: "label",
                            content: enyo.Computed(function () {
                                return enyo.format(" entr%.", this.length === 1? "y": "ies");
                            }, "length")
                        }
                    ]
                }
            ]
        }
    ],
    statusChanged: function () {
        this.reflow();
    }
});
