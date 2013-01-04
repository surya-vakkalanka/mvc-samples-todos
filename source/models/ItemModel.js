(function () {
    
    var paragraphs = [
        "Nisl diam commodo ad dolore dolor commodo esse in ut nulla aliquip dolore eu facilisis nulla dignissim velit autem quis, facilisis veniam vel nibh. Wisi vero eros commodo nulla aliquam eros enim luptatum vel. Duis dignissim ut, exerci enim laoreet euismod et et. Vulputate autem ut iusto quis lobortis feugiat adipiscing luptatum ad lobortis, veniam eu consequat qui quis sit dolor eros hendrerit odio ex, ea hendrerit, augue et. Odio tation facilisis eu tation ullamcorper iriure in et velit praesent dolore autem esse dolore qui, dolore blandit et at nisl praesent in exerci qui vel. Qui facilisi dolor illum facilisis luptatum commodo, delenit eum, duis delenit augue esse lobortis velit ut aliquip ad, consectetuer ut, eros consequat autem aliquip hendrerit iriure. Nulla, feugait suscipit aliquip consequat aliquam consequat accumsan diam commodo ad dolore dolor commodo esse in ut nulla.",
        "Dolore nulla eum vulputate nostrud in duis, nostrud blandit. Veniam praesent odio tincidunt wisi vel accumsan ex nonummy augue eum autem te. Dolor duis, accumsan iusto enim nulla dolor vel dolore dolore vulputate, vel quis dolore, zzril tation wisi luptatum, dolore feugait illum suscipit feugiat iusto, elit. Sit lorem illum consequat elit minim vel ut ad exerci zzril odio et molestie, vero, consequat at lobortis vulputate ut consequat ea. Autem iusto ex at minim erat duis accumsan, delenit molestie dolore in vero hendrerit molestie qui velit feugait suscipit zzril ea. Delenit nostrud magna veniam in dignissim duis tincidunt feugait amet ut ipsum suscipit iriure minim blandit, et at vulputate feugiat nulla volutpat consequat.",
        "Ullamcorper aliquam consequat accumsan diam commodo ad dolore dolor commodo esse in ut nulla aliquip dolore eu facilisis nulla dignissim velit autem quis. Ut veniam vel nibh, sed vero eros commodo nulla aliquam eros enim luptatum vel dolor dignissim ut, exerci enim laoreet euismod et et nulla. Vel ut iusto quis lobortis feugiat adipiscing luptatum ad lobortis, veniam eu consequat qui. In sit dolor eros hendrerit odio ex, ea hendrerit, augue et delenit. Et facilisis eu tation ullamcorper iriure in et velit praesent dolore autem esse dolore qui, dolore blandit et at nisl. Dolore in exerci qui vel augue facilisi dolor illum facilisis luptatum commodo, delenit eum, duis delenit augue esse.",
        "Velit feugait amet ut ipsum suscipit iriure minim blandit, et. Hendrerit vulputate feugiat nulla volutpat consequat in, ullamcorper ex duis nisl et, duis eu wisi nulla zzril vero blandit nonummy molestie amet nulla eum. Nulla nostrud in duis, nostrud blandit ut praesent odio tincidunt wisi vel accumsan ex nonummy. Eros eum autem te blandit duis, accumsan iusto enim nulla dolor vel dolore dolore vulputate, vel quis dolore, zzril tation wisi luptatum, dolore feugait illum suscipit. Consequat iusto, elit in lorem illum consequat elit minim vel ut ad exerci zzril odio et. Eu, vero, consequat at lobortis vulputate ut consequat ea ea iusto ex at minim erat duis accumsan, delenit molestie dolore in vero hendrerit.",
        "Qui facilisi dolor illum facilisis luptatum commodo, delenit eum, duis delenit augue esse lobortis velit ut aliquip ad, consectetuer ut, eros consequat autem aliquip hendrerit iriure. Nulla, feugait suscipit aliquip consequat aliquam consequat accumsan diam commodo ad dolore dolor commodo esse in ut nulla. Amet dolore eu facilisis nulla dignissim velit autem quis, facilisis veniam vel nibh, sed vero eros commodo nulla aliquam eros enim. Te vel dolor dignissim ut, exerci enim laoreet euismod et et nulla autem ut iusto quis lobortis feugiat adipiscing luptatum ad lobortis, veniam eu consequat."
    ];
    
    Todos.ItemModel = Backbone.RelationalModel.extend({
        idAttribute: "uuid",
        defaults: {
            task: "",
            selected: false,
            completed: false,
            description: "Add a description for this todo item"
        },
        initialize: function () {
            var cid = this.cid;
            var task = this.get("task");
            var rand = Math.floor((Math.random()*10)%5);
            var desc = paragraphs[rand];
            if ("" === task) {
                task = enyo.format("%. %.", task, cid);
                this.set("task", task);
                this.set("description", desc);
            }
        },
        parse: function (json) {
            delete json.selected;
            return json;
        }
    });
    
}());