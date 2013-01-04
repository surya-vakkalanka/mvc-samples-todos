enyo.kind({
    name: "Todos.ListsHeader",
    kind: "onyx.Toolbar", 
    classes: "header",
    layoutKind: "FittableColumnsLayout", 
    controller: "Todos.lists",
    bindings: [
        {from: "controller.length", to: "length"}
    ],
    components: [
        {name: "label", content: "TodoLists", fit: true},
        {name: "clear", kind: "onyx.Button", classes: "onyx-negative", content: "Delete All", ontap: "clearLists"},
        {name: "add", kind: "onyx.Button", classes: "onyx-affirmative", content: "New List", ontap: "addList"},
        {name: "confirm", kind: "enyo.Popup", floating: true, centered: true, showing: false, 
            style: "background-color: #444; color: #fff; border-radius: 6px; padding: 20px;", 
            components: [
                {content: "Are you sure you want to delete all TodoLists?", style: "margin-bottom: 20px;"},
                {name: "removeAllBtn", kind: "onyx.Button", content: "Yes, Delete!", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "removeAll"},
                {name: "cancelBtn", kind: "onyx.Button", content: "No, Cancel!", classes: "onyx-negative", ontap: "hideDialog"}
            ]
        }
    ],
    lengthChanged: function() {
        this.$.clear.setShowing(this.length > 0);
        this.reflow();
    }
});
