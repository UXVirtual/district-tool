export default {

    schema: {
        src:            { type: 'asset'}, //this should be the URL to the texture file you wish to load. If loading cross-domain do NOT load it via a-asset-item as this will not send the correct headers
        crossorigin:    { type: 'string', default: '' },//if the src and texture are loaded from a different domain, then set this to 'anonymous'
        repeat:         { type: 'float', default: 1.0 } //number of times to repeat the texture across the material. Affects new texture if src is set, otherwise the existing texture
    },

    init: function() {

        this.el.object3D.traverse(function(child){

            if(child instanceof THREE.Mesh){

                if(child.geometry.type === "PlaneGeometry"){

                    if(this.data.src){
                        var loader = new THREE.TextureLoader();
                        if (this.data.crossorigin) texloader.setCrossOrigin(self.data.crossorigin);
                        loader.load(
                            this.data.src.getAttribute('src'),
                            function ( texture ) {
                                texture.repeat.x = this.data.repeat;
                                texture.repeat.y = this.data.repeat;
                                child.material.map = texture;
                            }.bind(this)
                        );
                    }else{
                        child.material.map.repeat.x = this.data.repeat;
                        child.material.map.repeat.y = this.data.repeat;
                    }
                }
            }
        }.bind(this));
    }
};