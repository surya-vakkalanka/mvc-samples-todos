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
        {name: "Todos.lists", kind: "Todos.ListsController"},
        {name: "Todos.selectedList", kind: "Todos.SelectedListController"},
        {name: "Todos.selectedItem", kind: "Todos.SelectedItemController"}
    ]
});
