enyo.kind({
    name: "Todos.ItemsRow",
    kind: "Todos.Row",
    editorBindProperty: "task",
    editorPlaceholder: "Add a task",
    components: [
        {kind: "onyx.Checkbox", onchange: "didCheck", bindProperty: "completed", bindTarget: "checked"}
    ]
});
