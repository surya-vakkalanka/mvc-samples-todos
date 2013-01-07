enyo.kind({
    name: "Todos.Lists",
    kind: "enyo.View",
    classes: "panel lists",
    layoutKind: "enyo.FittableRowsLayout",
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
            classes: "footer"
        }
    ]
});
