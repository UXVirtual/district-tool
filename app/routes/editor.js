import Ember from 'ember';
import AFRAME from 'aframe';
import extras from 'npm:aframe-extras';

import Fillable from '../components/aframe/raw/fillable';
import SnapSurface from '../components/aframe/raw/snap-surface';

//import '../components/ui/instructions-modal'

if (!AFRAME.components['fillable']) {
    AFRAME.registerComponent('fillable', Fillable);
}

if (!AFRAME.components['snap-surface']) {
    AFRAME.registerComponent('snap-surface', SnapSurface);
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
