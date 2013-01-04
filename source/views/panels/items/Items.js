enyo.kind({
    name: "Todos.Items",
    kind: "enyo.View",
    layoutKind: "enyo.FittableRowsLayout",
    classes: "panel items",
    controller: "Todos.selectedList",
    status: null,
    bindings: [
        {from: "controller.length", to: "length"},
        {from: "$.filters.active", to: "controller.filter"}
    ],
    create: function() {
        this.inherited(arguments);
        this.lengthChanged();
    },
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
            layoutKind: "enyo.FittableColumnsLayout", 
            components: [
                {kind: "onyx.Grabber"},
                {fit: true},
                {
                    name: "filters",
                    classes: "filters",
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
    lengthChanged: function() {
        this.$.filters.setShowing(this.length > 0);
        this.reflow();
    }
});
