boxEditorControls['info']=GridBackbone.View.extend({
    className: "grid-editor-widget-info",
    initialize:function(){

    },
    render:function(){
        html="<label>"+this.model.structure.label+"</label><p class='info'>"+this.model.structure.text+"</p>";
        jQuery(this.$el).html(html);
        return this;
    },
    fetchValue:function(){
        return {};
    },
});