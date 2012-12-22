enyo.kind({
    name: "Todos.PanelHeader",
    kind: "enyo.View",
    classes: "header-toolbar",
    controlParentName: "tools",
    defaultComponents: [
        {name: "label", kind: "Todos.LabelToolbar", isChrome: true},
        {name: "tools", kind: "onyx.Toolbar", isChrome: true}
    ],
    initComponents: function () {
        this.createComponents(this.defaultComponents);
        this.inherited(arguments);
    }
});
