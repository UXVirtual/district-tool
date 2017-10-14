import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import AFRAME from 'aframe';
import 'npm:super-hands';
import 'npm:aframe-environment-component';
import 'npm:aframe-star-system-component';
import 'npm:networked-aframe';
import 'npm:aframe-event-set-component';
import 'npm:aframe-gblock';

import './components/aframe/raw/snap';
import './components/aframe/raw/intersection-spawn';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
