export default {

    schema: {
        src:            { type: 'asset', required: true}, //this should be the URL to the texture file you wish to load. If loading cross-domain do NOT load it via a-asset-item as this will not send the correct headers
        crossorigin:    { type: 'string', default: '' },//if the src and texture are loaded from a different domain, then set this to 'anonymous'
        repeat:         { type: 'float', default: 1.0 } //number of times to repeat the texture across the material
    },

    init: function() {

        this.el.object3D.traverse(function(child){



            if(child instanceof THREE.Mesh){

                if(child.geometry.type === "PlaneGeometry"){
                    //is the floor Mesh
                    console.log('Found floor: ', child);

                    //var material = new THREE.MeshLambertMaterial()

                    var loader = new THREE.TextureLoader();
                    if (this.data.crossorigin) texloader.setCrossOrigin(self.data.crossorigin);

                    console.log('Loading texture from: ',this.data.src.getAttribute('src'));

                    loader.load(
                        // resource URL
                        this.data.src.getAttribute('src'),
                        // Function when resource is loaded
                        function ( texture ) {
                            console.log('Loaded new texture: ',texture)

                            texture.repeat.x = this.data.repeat;
                            texture.repeat.y = this.data.repeat;
                            //texture.repeat = new THREE.Vector2(10.1,10.1);
                            texture.offset.set( 0, 0 );

                            child.material.map = texture;
                        }.bind(this)
                    );


                }

                //child.geometry.mergeVertices();
                //child.geometry.computeFaceNormals();
                //child.geometry.computeVertexNormals();


                //child.material.map = texture;
                //child.material.needsUpdate = true;



                //child.material = material;

            }
        }.bind(this));

    }
};