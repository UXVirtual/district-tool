import Ember from 'ember';
import AFRAME from 'aframe';
import extras from 'npm:aframe-extras';
import 'npm:super-hands';
import 'npm:aframe-environment-component';
import 'npm:aframe-star-system-component';
import 'npm:networked-aframe';
import 'npm:aframe-event-set-component';
import 'npm:aframe-layout-component';
import 'npm:aframe-select-bar-component';
import 'npm:aframe-randomizer-components';
import 'npm:aframe-gblock';

//import Fillable from '../components/aframe/raw/fillable';
import EnvironmentGroundTexture from '../components/aframe/raw/environment-ground-texture';
import IntersectionSpawn from '../components/aframe/raw/intersection-spawn';
import Snap from '../components/aframe/raw/snap';
import SpawnInCircle from '../components/aframe/raw/spawn-in-circle';
import Scene from '../components/aframe/raw/scene';

import Colorize from '../components/aframe/raw/colorize';
//import LOD from '../components/aframe/raw/lod';
//import LODLevel from '../components/aframe/raw/lod-level';

/*if (!AFRAME.components['fillable']) {
    AFRAME.registerComponent('fillable', Fillable);
}*/


if (!AFRAME.components['gltf-model-next']) {
    AFRAME.registerComponent('gltf-model-next', extras.loaders['gltf-model-next']);
}

if (!AFRAME.components['environment-ground-texture']) {
    AFRAME.registerComponent('environment-ground-texture', EnvironmentGroundTexture);
}

if (!AFRAME.components['intersection-spawn']) {
    AFRAME.registerComponent('intersection-spawn', IntersectionSpawn);
}

if (!AFRAME.components['snap']) {
    AFRAME.registerComponent('snap', Snap);
}

if (!AFRAME.components['spawn-in-circle']) {
    AFRAME.registerComponent('spawn-in-circle', SpawnInCircle);
}

if (!AFRAME.components['colorize']) {
    AFRAME.registerComponent('colorize', Colorize);
}

if (!AFRAME.systems['scene']) {
    AFRAME.registerSystem('scene', Scene);
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
            component: 'material',
            property: 'color'
        },
        {
            selector: '.nametag',
            component: 'text',
            property: 'value'
        },
        {
            selector: '.nametag',
            component: 'visible'
        }
    ]
});

window.NAF.schemas.add({
    template: '#three-towers-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.schemas.add({
    template: '#city-block-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.schemas.add({
    template: '#pole-block-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.schemas.add({
    template: '#regular-block-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.schemas.add({
    template: '#industrial-stack-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.schemas.add({
    template: '#orb-block-template',
    components: [
        'position',
        {
            selector: '.wrapper',
            component: 'colorize'
        }
    ]
});

window.NAF.options.compressSyncPackets = true;
window.NAF.options.updateRate = 15;

// Register a particular package, and its dependencies.
extras.controls.registerAll();

//TODO: remove aframe body/html markup when component unmounts



export default Ember.Route.extend({
    init: function(){
        document.body.addEventListener('clientConnected', function (evt) {
            console.log('clientConnected event. clientId =', evt.detail.clientId);
        });

        document.body.addEventListener('clientDisconnected', function (evt) {
            console.log('clientDisconnected event. clientId =', evt.detail.clientId);
        });

        document.body.addEventListener('entityCreated', function (evt) {
            console.log('entityCreated event. ', evt.detail);
        });

        document.body.addEventListener('entityDeleted', function (evt) {
            console.log('entityDeleted event. ', evt.detail);
        });




    }
});
