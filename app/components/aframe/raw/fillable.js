import AFRAME from 'aframe';

export default {
    init: function() {
        console.log('inited');

        console.log('El: ',this.el);

        this.el.addEventListener('drag-drop', function(evt) {
            console.log('Dropped');

            this.el.setAttribute('material',evt.detail.dropped.getAttribute('material'));
            this.el.setAttribute('material','wireframe:false');
            console.log('Object3d: ',evt.detail.dropped.body);
            evt.detail.dropped.removeAttribute('dynamic-body');
            evt.detail.dropped.setAttribute('static-body');

            //console.log('Parent',evt.detail.dropped.parentNode);
            setTimeout(function(){
                evt.detail.dropped.el.parentNode.removeChild(evt.detail.dropped.el);
            },1000);

        }.bind(this));
    }
};