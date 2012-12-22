enyo.kind({
    name: "Todos.Application",
    kind: "enyo.Application",
    view: "Todos.RootView",
    autoStart: true,
    renderOnStart: true,
    bindings: [
        {from: "lists.selection", to: "selectedList.model"},
        {from: "selectedList.proxy.selection", to: "selectedItem.model"}
    ],
    controllers: [
        {name: "lists", kind: "Todos.ListsController"},
        {name: "selectedList", kind: "Todos.SelectedListController"},
        {name: "selectedItem", kind: "Todos.SelectedItemController"}
    ]
});
