import Ember from 'ember';
import AFRAME from 'aframe';
import extras from 'npm:aframe-extras';
import 'npm:super-hands';
import 'npm:aframe-environment-component';
import 'npm:aframe-star-system-component';
import 'npm:networked-aframe';
import 'npm:aframe-event-set-component';
import 'npm:aframe-layout-component';

//import Fillable from '../components/aframe/raw/fillable';
import EnvironmentGroundTexture from '../components/aframe/raw/environment-ground-texture';
import IntersectionSpawn from '../components/aframe/raw/intersection-spawn';
import Snap from '../components/aframe/raw/snap';
//import LOD from '../components/aframe/raw/lod';
//import LODLevel from '../components/aframe/raw/lod-level';

/*if (!AFRAME.components['fillable']) {
    AFRAME.registerComponent('fillable', Fillable);
}*/

if (!AFRAME.components['environment-ground-texture']) {
    AFRAME.registerComponent('environment-ground-texture', EnvironmentGroundTexture);
}

if (!AFRAME.components['intersection-spawn']) {
    AFRAME.registerComponent('intersection-spawn', IntersectionSpawn);
}

if (!AFRAME.components['snap']) {
    AFRAME.registerComponent('snap', Snap);
}

/*if (!AFRAME.components['lod']) {
    AFRAME.registerComponent('lod', LOD);
}

if (!AFRAME.components['lod-level']) {
    AFRAME.registerComponent('lod-level', LODLevel);
}*/

// Define custom schema for syncing avatar color, set by random-color
window.NAF.schemas.add({
    template: '#head-template',
    components: [
        'position',
        'rotation',
        {
            selector: '.head',
            component: 'material'
        }
    ]
});

window.NAF.options.compressSyncPackets = true;
window.NAF.options.updateRate = 15;

// Register a particular package, and its dependencies.
extras.controls.registerAll();

//TODO: remove aframe body/html markup when component unmounts

export default Ember.Route.extend({
});
