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
    update: function(){

        console.log('Updated: ',this.data.color)

        this.setColor(this.el);
        this.updateChildren(this.el);
    },
    updateChildren: function(el){
        for(var i = 0; i < el.children.length; i++){
            this.setColor(el.children[i]);
            if(el.children[i].children.length > 0){
                this.updateChildren(el.children[i]);
            }
        }
    },
    setColor: function(el){
        el.setAttribute('material','color',this.data.color);
    }
};