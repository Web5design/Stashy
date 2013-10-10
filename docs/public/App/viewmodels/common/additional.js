define(['durandal/app', 'durandal/system','lib/pagelayout','plugins/router'], function (app, system, router) {            
    
    var layouts = [{
        name : "OffCanvas",
        hash : "#/offcanvas"
    },{
        name : "Flyout",
        hash : "#/flyout"        
    },{
        name : "Sticky",
        hash : "#/sticky"    
    }],

    media = [{
        name : "FocalPoint",
        hash : "#/focalpoint"        
    },{
        name : "ElasticVideo",
        hash : "#/elasticvideo"        
    }],
    
    navigation = [{
        name : "Toggle",
        hash : "#/toggle"
    }],

    misc = [{
        name : "Slider",
        hash : "#/slider"                
    },{
        name : "Refresh",
        hash : "#/refresh"        
    },{
        name : "Loader",
        hash : "#/loader"        
    },{
        name : "ShowMeMore",
        hash : "#/showmemore"    
    },{
        name : "ElasticText",
        hash : "#/elastictext"        
    },{
        name : "List",
        hash : "#/list"        
    },{
        name : "Table",
        hash : "#/table"        
    },{
        name : "Notify",
        hash : "#/notify"
    }]
    
    return {
        layouts : layouts,
        navigation : navigation,
        media : media,
        misc : misc
    };
});