enyo.kind({
    name: "Todos.Lists",
    kind: "enyo.View",
    classes: "panel lists",
    layoutKind: "enyo.FittableRowsLayout",
    controller: "Todos.selectedList",
    status: null,
    bindings: [
        {from: "controller.model", to: "status"},
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
                {kind: "Todos.ListsRow"}
            ]
        },
        {
            name: "footer",
            kind: "onyx.Toolbar",
            classes: "footer",
            /*controller: "Todos.lists", 
            components: [
                {
                    name: "details",
                    layoutKind: "enyo.FittableColumnsLayout",
                    classes: "details",
                    components: [
                        {name: "count", classes: "number"},
                        {
                            name: "counter", classes: "label",
                            content: enyo.Computed(function () {
                                return enyo.format(" task%.", this.length === 1? "": "s");
                            }, "length")
                        }
                    ]
                }
            ]*/
        }
    ]/*,
    statusChanged: function () {
        this.$.details.setShowing(this.status);
        this.reflow();
    }*/
});
