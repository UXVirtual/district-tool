import Ember from 'ember';
import AFRAME from 'aframe';
import extras from 'npm:aframe-extras';
import 'npm:super-hands';
import 'npm:aframe-environment-component';
import 'npm:aframe-star-system-component';
import 'npm:networked-aframe';
import 'npm:aframe-event-set-component';
import 'npm:aframe-layout-component';

import Fillable from '../components/aframe/raw/fillable';

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

//TODO: remove aframe body/html markup when component unmounts

export default Ember.Route.extend({
});
