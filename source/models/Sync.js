enyo.ready(function () {

    // borrowed from Joao Carlos, RFC4122 compliant
    // http://blog.snowfinch.net/post/3254029029/uuid-v4-js
    enyo.uuid = function () {
        var res = "";
        var idx = 0;
        var random;
        for (; idx < 32; ++idx) {
            random = Math.random() * 16 | 0;
            if (idx == 8 || idx == 12 || idx == 16 || idx == 20) {
                res += "-";
            }
            res += (idx == 12?4:(idx == 16?(random&3|8):random)).toString(16);
        }
        return res;
    };

    var store = {};
    // here are some overloaded methods to support the minimum features
    // for local storage as we need it in this application
    enyo.mixin(store, {
        create: function (model) {
            // if there isn't an id, create it
            var id = model.id || (model.id = enyo.uuid());
            var collection = model.collection || {};
            var prefix = collection.prefix;
            var key = enyo.format("%.-%.", prefix, id);
            var related;
            var attributes;
            if (!(collection instanceof Backbone.Collection)) {
                if (id) {
                    key = store.findKey(id);
                } else return;
            }
            // if the attribute isn't store as an attribute
            // or isn't the same ensure that it is now
            if (model.get("uuid") !== id) model.set("uuid", id);

            // since this is written for this example only
            // we only need to worry about relations of items if we're
            // saving a ListModel
            if (model instanceof Todos.ListModel) {
                related = model.get("items").models;
                enyo.forEach(related, function (model) {
                    model.save();
                });
            }
            
            attributes = model.toJSON();
            
            // now create the entry in local storage
            amplify.store(key, attributes);
            return attributes;
        },
        read: function (model) {
            var prefix = model.prefix;
            var records = amplify.store();
            var uuids = enyo.keys(records);
            uuids = enyo.filter(uuids, function (uuid) {
                return !!~uuid.indexOf(prefix);
            });
            records = enyo.only(uuids, records);
            return records;
        },
        find: function (model) {
            // we find ourselves here during a fetch for recursive
            // records
            var id = model.id;
            var key = store.findKey(id);
            return amplify.store(key);
        },
        delete: function (model) {
            var id = model.id;
            var key = store.findKey(id);
            var related;
            var child;
            
            if (model instanceof Todos.ListModel) {
                related = enyo.cloneArray(model.get("items").models);
                while (related.length) {
                    child = related.shift();
                    child.destroy({silent:true});
                }
            }
            
            amplify.store(key, null);
            return model;
        },
        update: function (model) {
            // deliberately avoid returning anything
            store.create(model);
        },
        findKey: function (id) {
            var records = amplify.store();
            var keys = enyo.keys(records);
            return enyo.filter(keys, function (key) {
                return !!~key.indexOf(id);
            })[0];
        }
    });
    
    Backbone.sync = function (method, model, options) {        
        var res;
        options = options || {};
        
        switch (method) {
        case "create":
            res = store.create(model);
            break;
        case "read":
            if (!model.id) res = store.read(model);
            else res = store.find(model);
            break;
        case "delete":
            res = store.delete(model);
            break;
        case "update":
            res = store.update(model);
            break;
        }
        
        if (options.success) {
            options.success(model, res || {}, options);
        }
    };
    
});
