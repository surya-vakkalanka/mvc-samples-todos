enyo.CollectionRepeaterController.extend({
    reflow: enyo.Observer(function () {
        var owner = this.owner;
        if (enyo.exists(owner)) owner.reflow();
    }, "length", "models", "selection")
});
