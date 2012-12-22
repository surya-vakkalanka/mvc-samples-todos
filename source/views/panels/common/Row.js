enyo.kind({
    name: "Todos.Row",
    kind: "enyo.View",
    classes: "row",
    bindings: [
        {from: "controller.selected", to: "selected"}
    ],
    defaultComponents: [
        {
            kind: "onyx.InputDecorator",
            components: [
                {
                    name: "editor",
                    kind: "onyx.Input",
                    classes: "editor",
                    oninput: "input",
                    onblur: "deselect",
                    onfocus: "select",
                    bindTarget: "value"
                }
            ]
        }
    ],
    initComponents: function () {
        var components = this.defaultComponents;
        var bindProperty = this.editorBindProperty;
        var placeholder = this.editorPlaceholder;
        var editor = components[0].components[0];
        editor.bindProperty = bindProperty;
        editor.placeholder = placeholder;
        this.createComponents(components);
        this.inherited(arguments);
    },
    selectedChanged: function () {
        var selected = this.selected;
        if (true === selected) {
            this.$.editor.focus();
        }
    }
});
