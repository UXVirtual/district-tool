export default {
    init: function() {

        var scene = document.querySelector('a-scene');

        console.log('Scene: ',scene)

        scene.addEventListener('loaded',function(){
            console.log('loaded')
            /*var gltfTest = document.getElementById('test-gltf');

            gltfTest.addEventListener('model-loaded',function(e){
                console.log('Loaded gltf: ', e);
            });

            gltfTest.addEventListener('model-error',function(e){
                console.log('gltf errror: ', e);
            });

            console.log('gltfTest',gltfTest.object3D);*/
        });
    }
};