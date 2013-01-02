enyo.kind({
    name: "Todos.Application",
    kind: "enyo.Application",
    view: "Todos.RootView",
    autoStart: true,
    renderOnStart: true,
    bindings: [
        {from: "Todos.lists.selection", to: "Todos.selectedList.model"},
        {from: "Todos.selectedList.proxy.selection", to: "Todos.selectedItem.model"}
    ],
    controllers: [
        {name: "lists", kind: "Todos.ListsController"},
        {name: "selectedList", kind: "Todos.SelectedListController"},
        {name: "selectedItem", kind: "Todos.SelectedItemController"}
    ]
});
