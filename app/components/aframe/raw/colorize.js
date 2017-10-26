export default {
    schema: {
        color: {type: 'color', default: null}
    },
    init: function() {
        this.setColor = this.setColor.bind(this);

        var self = this;

        self.el.addEventListener('componentinitialized',function(){
            //console.log('componentinitialized, so setColor ', self.el);
            self.setColor(self.el);
        });

        self.el.addEventListener('child-attached',function(evt){
            //console.log('child-attached, so setColor ', evt.detail.el);
            self.setColor(evt.detail.el);
        });
    },
    update: function(){
        //console.log(this.el, ' Updated: ',this.data.color)
        this.setColor(this.el);
        this.updateChildren(this.el);
    },
    updateChildren: function(el){
        for(var i = 0; i < el.children.length; i++){
            this.setColor(el.children[i]);
            if (el.children[i].children.length > 0) {
                this.updateChildren(el.children[i]);
            }
        }
    },
    setColor: function(el){
        // Get current element color for comparison, or null.
        var color = el.getAttribute('material') || null;
        if (color) { color = color.color || null; }

        if (this.data.color === null) {
            //console.log(el, ' setColor null, ignoring and using ', color);
            this.data.color = color; // this.el.setAttribute('colorize', 'color', color);
        } else
        if (this.data.color === color) {
            //console.log(el, ' setColor, but already ', this.data.color);
        } else {
            //console.log(el, ' setColor from ', color, ' to ', this.data.color);
            el.setAttribute('material', 'color', this.data.color);
        }
    }
};