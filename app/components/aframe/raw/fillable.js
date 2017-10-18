import AFRAME from 'aframe';

export default {
    init: function() {
        //console.log('inited');

        //console.log('El: ',this.el);

        this.el.addEventListener('drop', function(evt){
            console.log('Dropped: ',evt);

            if(evt.relatedTarget && evt.relatedTarget.parentNode.classList){

                console.log('Has class: ',evt.relatedTarget.parentNode.classList.contains('cube'));
                console.log('Has template: ',evt.relatedTarget.parentNode.getAttribute('template'));

                if(!(evt.relatedTarget.parentNode.classList.contains('cube') && evt.relatedTarget.parentNode.getAttribute('template'))){
                    return;
                }
                console.log('Setting new template');


                //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                this.el.setAttribute('template',evt.relatedTarget.parentNode.getAttribute('template'));
                this.el.removeAttribute('fillable');
                this.el.removeAttribute('drag-droppable');

                //TODO move dropped back to pool
            }
        }.bind(this));

        this.el.addEventListener('drag-drop', function(evt) {

            //console.log('Transformer el: ',this.el);
            //console.log('Dropped',evt.detail.dropped.parentNode);





        }.bind(this));
    }
};