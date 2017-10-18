import AFRAME from 'aframe';

export default {
    init: function() {
        //console.log('inited');

        //console.log('El: ',this.el);

        /*this.el.addEventListener('dragover-end',function(evt){
            console.log('Drag over end',evt);
            console.log('Carried: ',evt.detail.carried);

            if(evt.detail.carried){

                //console.log('Has class: ',evt.relatedTarget.parentNode.classList.contains('cube'));
                //console.log('Has template: ',evt.relatedTarget.parentNode.getAttribute('template'));

                if(evt.detail.carried.parentEl.classList.contains('cube') && evt.detail.carried.parentEl.getAttribute('template')){
                    console.log('Setting new template');


                    //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                    //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                    this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                    this.el.setAttribute('template',evt.detail.carried.parentEl.getAttribute('template'));
                    this.el.removeAttribute('fillable');
                    this.el.removeAttribute('drag-droppable');

                    //TODO move dropped back to pool
                }else if(evt.detail.carried.parentEl.parentNode.classList.contains('cube') && evt.detail.carried.parentEl.parentNode.getAttribute('template')){
                    console.log('Setting new template');


                    //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                    //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                    this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                    this.el.setAttribute('template',evt.detail.carried.parentEl.getAttribute('template'));
                    this.el.removeAttribute('fillable');
                    this.el.removeAttribute('drag-droppable');
                }

            }
        }.bind(this));*/

        /*this.el.addEventListener('drop', function(evt){
            console.log('Dropped: ',evt);


        }.bind(this));*/

        /*this.el.addEventListener('dragover-start', function(evt) {
            console.log('Dragged over: ',evt);
        });*/

        this.el.addEventListener('drag-drop', function(evt) {

            //console.log('Transformer el: ',this.el);


            if(evt.detail.dropped){

                console.log('Dropped',evt.detail.dropped.parentNode);

                //console.log('Has class: ',evt.relatedTarget.parentNode.classList.contains('cube'));
                //console.log('Has template: ',evt.relatedTarget.parentNode.getAttribute('template'));

                if(evt.detail.dropped.parentNode.classList.contains('cube') && evt.detail.dropped.parentNode.getAttribute('template')){
                    console.log('Setting new template');


                    //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                    //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                    //this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                    this.el.children[0].setAttribute('template',evt.detail.dropped.parentNode.getAttribute('template'));
                    //this.el.removeAttribute('fillable');
                    //this.el.removeAttribute('drag-droppable');

                    //TODO move dropped back to pool
                }else if(evt.detail.dropped.parentNode.parentNode.parentNode.classList.contains('cube') && evt.detail.dropped.parentNode.parentNode.parentNode.getAttribute('template')){
                    console.log('Setting new template');

                    console.log('Dropped',evt.detail.dropped.parentNode.parentNode.parentNode);

                    //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                    //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                    //this.el.children[0].setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                    this.el.children[0].setAttribute('template',evt.detail.dropped.parentNode.parentNode.parentNode.getAttribute('template'));
                    //this.el.children[0].removeAttribute('fillable');
                    //this.el.children[0].removeAttribute('drag-droppable');
                }

            }





        }.bind(this));
    }
};