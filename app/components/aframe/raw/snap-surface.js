/**
 * Listens for collisions with snappable objects
 * Snap entity to the closest interval specified by `snap`.
 * Offset entity by `offset`.
 */

export default {
    dependencies: ['position'],

    schema: {
        offset: {type: 'vec3', default: '0.5 0.5 0.5'},
        snap: {type: 'vec3', default: '1 1 1'}
    },

    init: function () {
        this.el.addEventListener('collide',function(e){
            //console.log('Surface has collided with body ',e.detail.body.el);

            setTimeout(function(){
                e.detail.body.el.removeAttribute('dynamic-body');
            },50);

            setTimeout(function(){
                e.detail.body.el.setAttribute('rotation','0 0 0');
                e.detail.body.el.setAttribute('dynamic-body');
            },1000)
        });
    }
};