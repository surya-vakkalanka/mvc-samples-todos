enyo.kind({
    name: "Todos.ListsHeader",
    kind: "Todos.PanelHeader",
    classes: "header",
    controller: "Todos.lists",
    bindings: [
        {from: "Todos.selectedList.title", to: "$.label.$.text.content"}
    ],
    components: [
        {name: "clear", kind: "onyx.Button", content: "clear", ontap: "clearList"},
        {name: "add", kind: "onyx.Button", content: "add", ontap: "addList"}
    ]
});
