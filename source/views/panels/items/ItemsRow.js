enyo.kind({
    name: "Todos.ItemsRow",
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
                {kind: "onyx.Checkbox", onchange: "didCheck", bindProperty: "completed", bindTarget: "checked"},
                {
                    name: "editor", kind: "onyx.Input", classes: "editor",
                    oninput: "input", onblur: "deselect", onfocus: "select", bindProperty: "task", bindTarget: "value"
                }
            ]
        }
    ]
});