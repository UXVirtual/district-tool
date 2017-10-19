import AFRAME from 'aframe';

export default {
    init: function(){
        const lod = this.lod = new THREE.LOD();
        Array.from( this.el.children ).forEach( function( childElement ){
            childElement.addEventListener( 'loaded', function(){
                const lodLevelComponent = childElement.components[ 'lod-level' ];
                if( lodLevelComponent !== undefined ){
                    lod.addLevel( childElement.object3D, lodLevelComponent.data );
                }
            });
        });
        this.el.setObject3D( 'lod', lod );
    },
    tick: function(){
        if( this.el.sceneEl.camera ){
            this.lod.update( this.el.sceneEl.camera );
        }
    }
};

