import Ember from 'ember';
import extras from 'npm:aframe-extras';
//import Snap from '../components/aframe/raw/snap';
//import IntersectionSpawn from '../components/aframe/raw/intersection-spawn';
import Fillable from '../components/aframe/raw/fillable';

import AFRAME from 'aframe';

/*if (!AFRAME.components['snap']) {
    AFRAME.registerComponent('snap', Snap);
}

if (!AFRAME.components['intersection-spawn']) {
    AFRAME.registerComponent('intersection-spawn', IntersectionSpawn);
}*/

if (!AFRAME.components['fillable']) {
    AFRAME.registerComponent('fillable', Fillable);
}

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

window.NAF.options.updateRate = 15;

// Register a particular package, and its dependencies.
extras.controls.registerAll();

export default Ember.Route.extend({
});
