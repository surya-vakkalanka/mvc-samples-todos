enyo.kind({
    name: "Todos.Items",
    kind: "enyo.View",
    layoutKind: "enyo.FittableRowsLayout",
    classes: "panel items",
    controller: "Todos.selectedList",
    status: null,
    bindings: [
        {from: "controller.model", to: "$.filters.showing"},
        {from: "controller.model", to: "status"}
    ],
    components: [
        {name: "header", kind: "Todos.ItemsHeader"},
        {
            name: "list",
            fit: true,
            kind: "enyo.CollectionRepeater",
            controller: "Todos.selectedList.proxy",
            components: [
                {kind: "Todos.ItemsRow"}
            ]
        },
        {
            name: "footer",
            kind: "onyx.Toolbar",
            classes: "footer",
            components: [
                {
                    name: "filters",
                    kind: "onyx.RadioGroup",
                    controller: "Todos.selectedList",
                    components: [
                        {name: "all", content: "all", active: true},
                        {name: "active", content: "active"},
                        {name: "completed", content: "completed"}
                    ]
                }
            ]
        }
    ],
    statusChanged: function () {
        this.reflow();
    }
});
