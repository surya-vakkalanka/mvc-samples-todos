enyo.kind({
    name: "Todos.Dialog",
    kind: "enyo.Popup", 
    floating: true, 
    centered: true, 
    showing: false, 
    classes: "popup", 
    events: {
        onConfirm: ""
    },
    published: {
        textLabel: "Are you sure?", 
        confirmLabel: "Yes, go ahead!",
        cancelLabel: "No, cancel", 
    },
    create: function() {
        this.inherited(arguments);
        this.$.text.setContent(this.textLabel);
        this.$.confirmButton.setContent(this.confirmLabel);
        this.$.cancelButton.setContent(this.cancelLabel);
    },
    components: [
        {name: "text", style: "margin-bottom: 20px;"},
        {name: "confirmButton", kind: "onyx.Button", style: "margin-right: 20px;", classes: "onyx-affirmative", ontap: "confirm"},
        {name: "cancelButton", kind: "onyx.Button", classes: "onyx-negative", ontap: "hideDialog"}
    ],
    hideDialog: function() {
        this.setShowing(false);
    },
    confirm: function() {
        this.doConfirm();
        this.hideDialog();
    }
});