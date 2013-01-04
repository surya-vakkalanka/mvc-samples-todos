enyo.kind({
    name: "Todos.ListsRow",
    kind: "enyo.View",
    classes: "row",
    bindings: [
        {from: "controller.selected", to: "selected"}
    ],
    layoutKind: "enyo.FittableColumnsLayout",
    components: [
    	{
            kind: "onyx.InputDecorator", fit: true, 
            components: [
                {
                    name: "editor", kind: "onyx.Input", classes: "editor",
                    oninput: "input", onblur: "deselect", onfocus: "select", bindProperty: "title", bindTarget: "value"
                }
            ]
        },
        {name: "taskCount", kind: "Todos.Badge", content: "0", bindProperty: "items.length"}
    ]
});