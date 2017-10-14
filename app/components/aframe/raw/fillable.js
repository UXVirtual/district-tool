import AFRAME from 'aframe';

export default {
    init: function() {
        //console.log('inited');

        //console.log('El: ',this.el);

        this.el.addEventListener('drag-drop', function(evt) {

            //console.log('Transformer el: ',this.el);
            //console.log('Dropped',evt.detail.dropped.parentNode);

            if(!(evt.detail.dropped.parentNode.getAttribute('class') === 'cube' && evt.detail.dropped.parentNode.getAttribute('template'))){
                return;
            }



            //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

            //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
            this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
            this.el.setAttribute('template',evt.detail.dropped.parentNode.getAttribute('template'));
            this.el.removeAttribute('fillable');
            this.el.removeAttribute('drag-droppable');

            //TODO move dropped back to pool

        }.bind(this));
    }
};