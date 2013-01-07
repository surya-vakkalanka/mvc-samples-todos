enyo.kind({
    name: "Todos.RootView",
    kind: "enyo.View",
    classes: "todos",
    components: [
        {
        	name: "panels", 
        	kind: "enyo.Panels",
		    arrangerKind: "enyo.CollapsingArranger",
		    classes: "enyo-fit",
		    realtimeFit: true,
		    components: [
		        {name: "left", kind: "Todos.Lists"},
		        {name: "center", kind: "Todos.Items"},
		        {name: "right", kind: "Todos.Details"}
		    ]
    	}
    ]
});