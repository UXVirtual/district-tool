import AFRAME from 'aframe';

export default {
    schema: {
        offset: {type: 'vec3', default: {x: 0.5, y: 0.5, z: 0.5}},
        snap: {type: 'vec3', default: {x: 1, y: 1, z: 1}}
    },
    init: function() {

        console.log('Inited block cursor');

        this.cursorEl = document.createElement("a-box");
        this.cursorEl.setAttribute('id','block-cursor');
        this.cursorEl.setAttribute('material','transparent',true);
        this.cursorEl.setAttribute('material','opacity',0.5);
        this.cursorEl.setAttribute('material','wireframe',true);
        this.cursorEl.setAttribute('material','shader','flat');
        this.cursorEl.setAttribute('material','color','#ee75eb');
        this.cursorEl.setAttribute('position','0 2.5 0');
        this.el.sceneEl.appendChild(this.cursorEl);

        this.el.addEventListener('raycaster-intersection', function (evt) {
            //console.log('hit',evt.detail.intersections[evt.detail.intersections.length-1].point);

            var pos = this.snapPoint(evt.detail.intersections[evt.detail.intersections.length-1].point)
            this.cursorEl.setAttribute('position',pos);
        }.bind(this));
    },
    snapPoint: function(originalPos){
        var pos = AFRAME.utils.clone(originalPos);
        pos.x = Math.floor(pos.x / this.data.snap.x) * this.data.snap.x + this.data.offset.x;
        pos.y = Math.floor(pos.y / this.data.snap.y) * this.data.snap.y + this.data.offset.y;
        pos.z = Math.floor(pos.z / this.data.snap.z) * this.data.snap.z + this.data.offset.z;
        return pos;
    },
    update: function(){


    }
};