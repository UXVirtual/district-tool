export default {
    schema: {
        color: {type: 'color', default: 'red'}
    },
    init: function() {
        this.el.addEventListener('componentinitialized',function(){
            this.setColor(this.el);
        }.bind(this));
        this.el.addEventListener('child-attached',function(evt){
            this.setColor(evt.detail.el);
        }.bind(this));
    },
    setColor: function(el){
        el.setAttribute('material','color',this.data.color);
    }
};