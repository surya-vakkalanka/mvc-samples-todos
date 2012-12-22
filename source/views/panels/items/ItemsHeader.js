enyo.kind({
    name: "Todos.ItemsHeader",
    kind: "Todos.PanelHeader",
    classes: "header",
    controller: "Todos.selectedList",
    bindings: [
        {from: "controller.model", to: "$.clear.disabled", transform: "invert"},
        {from: "controller.model", to: "$.add.disabled", transform: "invert"},
        {from: "controller.title", to: "$.label.$.text.content"}
    ],
    components: [
        {name: "clear", kind: "onyx.Button", content: "clear", ontap: "clearList"},
        {name: "add", kind: "onyx.Button", content: "add", ontap: "addItem"}
    ],
    invert: function (value) {
        return !Boolean(value);
    }
});
