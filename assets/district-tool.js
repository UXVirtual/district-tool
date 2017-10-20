"use strict";



define('district-tool/app', ['exports', 'district-tool/resolver', 'ember-load-initializers', 'district-tool/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('district-tool/components/a-box', ['exports', 'ember-aframe/components/a-box'], function (exports, _aBox) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aBox.default;
                }
        });
});
define('district-tool/components/a-camera', ['exports', 'ember-aframe/components/a-camera'], function (exports, _aCamera) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCamera.default;
                }
        });
});
define('district-tool/components/a-circle', ['exports', 'ember-aframe/components/a-circle'], function (exports, _aCircle) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCircle.default;
                }
        });
});
define('district-tool/components/a-collada-model', ['exports', 'ember-aframe/components/a-collada-model'], function (exports, _aColladaModel) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aColladaModel.default;
                }
        });
});
define('district-tool/components/a-cone', ['exports', 'ember-aframe/components/a-cone'], function (exports, _aCone) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCone.default;
                }
        });
});
define('district-tool/components/a-cursor', ['exports', 'ember-aframe/components/a-cursor'], function (exports, _aCursor) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCursor.default;
                }
        });
});
define('district-tool/components/a-curvedimage', ['exports', 'ember-aframe/components/a-curvedimage'], function (exports, _aCurvedimage) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCurvedimage.default;
                }
        });
});
define('district-tool/components/a-cylinder', ['exports', 'ember-aframe/components/a-cylinder'], function (exports, _aCylinder) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aCylinder.default;
                }
        });
});
define('district-tool/components/a-dodecahedron', ['exports', 'ember-aframe/components/a-dodecahedron'], function (exports, _aDodecahedron) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aDodecahedron.default;
                }
        });
});
define('district-tool/components/a-entity', ['exports', 'ember-aframe/components/a-entity'], function (exports, _aEntity) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _aEntity.default;
    }
  });
});
define('district-tool/components/a-gltf-model', ['exports', 'ember-aframe/components/a-gltf-model'], function (exports, _aGltfModel) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aGltfModel.default;
                }
        });
});
define('district-tool/components/a-icosahedron', ['exports', 'ember-aframe/components/a-icosahedron'], function (exports, _aIcosahedron) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aIcosahedron.default;
                }
        });
});
define('district-tool/components/a-image', ['exports', 'ember-aframe/components/a-image'], function (exports, _aImage) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aImage.default;
                }
        });
});
define('district-tool/components/a-light', ['exports', 'ember-aframe/components/a-light'], function (exports, _aLight) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aLight.default;
                }
        });
});
define('district-tool/components/a-link', ['exports', 'ember-aframe/components/a-link'], function (exports, _aLink) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aLink.default;
                }
        });
});
define('district-tool/components/a-obj-model', ['exports', 'ember-aframe/components/a-obj-model'], function (exports, _aObjModel) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aObjModel.default;
                }
        });
});
define('district-tool/components/a-octahedron', ['exports', 'ember-aframe/components/a-octahedron'], function (exports, _aOctahedron) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aOctahedron.default;
                }
        });
});
define('district-tool/components/a-plane', ['exports', 'ember-aframe/components/a-plane'], function (exports, _aPlane) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aPlane.default;
                }
        });
});
define('district-tool/components/a-ring', ['exports', 'ember-aframe/components/a-ring'], function (exports, _aRing) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aRing.default;
                }
        });
});
define('district-tool/components/a-scene', ['exports', 'ember-aframe/components/a-scene'], function (exports, _aScene) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _aScene.default;
    }
  });
});
define('district-tool/components/a-sky', ['exports', 'ember-aframe/components/a-sky'], function (exports, _aSky) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aSky.default;
                }
        });
});
define('district-tool/components/a-sound', ['exports', 'ember-aframe/components/a-sound'], function (exports, _aSound) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aSound.default;
                }
        });
});
define('district-tool/components/a-sphere', ['exports', 'ember-aframe/components/a-sphere'], function (exports, _aSphere) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aSphere.default;
                }
        });
});
define('district-tool/components/a-tetrahedron', ['exports', 'ember-aframe/components/a-tetrahedron'], function (exports, _aTetrahedron) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aTetrahedron.default;
                }
        });
});
define('district-tool/components/a-text', ['exports', 'ember-aframe/components/a-text'], function (exports, _aText) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aText.default;
                }
        });
});
define('district-tool/components/a-torus-knot', ['exports', 'ember-aframe/components/a-torus-knot'], function (exports, _aTorusKnot) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aTorusKnot.default;
                }
        });
});
define('district-tool/components/a-torus', ['exports', 'ember-aframe/components/a-torus'], function (exports, _aTorus) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aTorus.default;
                }
        });
});
define('district-tool/components/a-triangle', ['exports', 'ember-aframe/components/a-triangle'], function (exports, _aTriangle) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aTriangle.default;
                }
        });
});
define('district-tool/components/a-video', ['exports', 'ember-aframe/components/a-video'], function (exports, _aVideo) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aVideo.default;
                }
        });
});
define('district-tool/components/a-videosphere', ['exports', 'ember-aframe/components/a-videosphere'], function (exports, _aVideosphere) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
                value: true
        });
        Object.defineProperty(exports, 'default', {
                enumerable: true,
                get: function () {
                        return _aVideosphere.default;
                }
        });
});
define('district-tool/components/aframe/land-component', ['exports', 'ember-aframe/components/a-entity'], function (exports, _aEntity) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var LANDComponent = _aEntity.default.extend({

        attributeBindings: ['position'],

        geometry: "primitive: box;",
        material: "color: #ffffff; wireframe: false; wireframeLinewidth: 4;",
        shadow: "",
        'static-body': ''
    });

    LANDComponent.reopenClass({});

    exports.default = LANDComponent;
});
define('district-tool/components/aframe/raw/environment-ground-texture', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {

        schema: {
            src: { type: 'asset' }, //this should be the URL to the texture file you wish to load. If loading cross-domain do NOT load it via a-asset-item as this will not send the correct headers
            crossorigin: { type: 'string', default: '' }, //if the src and texture are loaded from a different domain, then set this to 'anonymous'
            repeat: { type: 'float', default: 1.0 //number of times to repeat the texture across the material. Affects new texture if src is set, otherwise the existing texture
            } },

        init: function init() {

            this.el.object3D.traverse(function (child) {

                if (child.type === "Mesh") {

                    //console.log('Child el: ',child.el);

                    if (child.geometry.type === "PlaneGeometry") {

                        if (this.data.src) {
                            var loader = new THREE.TextureLoader();
                            if (this.data.crossorigin) loader.setCrossOrigin(self.data.crossorigin);
                            loader.load(this.data.src.getAttribute('src'), function (texture) {
                                texture.repeat.x = this.data.repeat;
                                texture.repeat.y = this.data.repeat;
                                child.material.map = texture;
                            }.bind(this));
                        } else {
                            child.material.map.repeat.x = this.data.repeat;
                            child.material.map.repeat.y = this.data.repeat;
                        }

                        child.el.classList.add('collidable');
                    }
                }
            }.bind(this));

            //child.el.addClass('clickable');

            /*for(var i = 0; i < this.el.children.length; i++){
                 console.log('Clickable: ',this.el.children[i].object3D);
                 if(this.el.children[i].object3D.geometry.type === "PlaneGeometry"){
                 }
            }*/
        }
    };
});
define('district-tool/components/aframe/raw/fillable', ['exports', 'aframe'], function (exports, _aframe) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        init: function init() {
            //console.log('inited');

            //console.log('El: ',this.el);

            /*this.el.addEventListener('dragover-end',function(evt){
                console.log('Drag over end',evt);
                console.log('Carried: ',evt.detail.carried);
                 if(evt.detail.carried){
                     //console.log('Has class: ',evt.relatedTarget.parentNode.classList.contains('cube'));
                    //console.log('Has template: ',evt.relatedTarget.parentNode.getAttribute('template'));
                     if(evt.detail.carried.parentEl.classList.contains('cube') && evt.detail.carried.parentEl.getAttribute('template')){
                        console.log('Setting new template');
                          //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));
                         //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                        this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                        this.el.setAttribute('template',evt.detail.carried.parentEl.getAttribute('template'));
                        this.el.removeAttribute('fillable');
                        this.el.removeAttribute('drag-droppable');
                         //TODO move dropped back to pool
                    }else if(evt.detail.carried.parentEl.parentNode.classList.contains('cube') && evt.detail.carried.parentEl.parentNode.getAttribute('template')){
                        console.log('Setting new template');
                          //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));
                         //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                        this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                        this.el.setAttribute('template',evt.detail.carried.parentEl.getAttribute('template'));
                        this.el.removeAttribute('fillable');
                        this.el.removeAttribute('drag-droppable');
                    }
                 }
            }.bind(this));*/

            /*this.el.addEventListener('drop', function(evt){
                console.log('Dropped: ',evt);
              }.bind(this));*/

            /*this.el.addEventListener('dragover-start', function(evt) {
                console.log('Dragged over: ',evt);
            });*/

            this.el.addEventListener('drag-drop', function (evt) {

                //console.log('Transformer el: ',this.el);


                if (evt.detail.dropped) {

                    console.log('Dropped', evt.detail.dropped.parentNode);

                    //console.log('Has class: ',evt.relatedTarget.parentNode.classList.contains('cube'));
                    //console.log('Has template: ',evt.relatedTarget.parentNode.getAttribute('template'));

                    if (evt.detail.dropped.parentNode.classList.contains('cube') && evt.detail.dropped.parentNode.getAttribute('template')) {
                        console.log('Setting new template');

                        //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                        //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                        //this.el.setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                        this.el.children[0].setAttribute('template', evt.detail.dropped.parentNode.getAttribute('template'));
                        //this.el.removeAttribute('fillable');
                        //this.el.removeAttribute('drag-droppable');
                        this.el.children[0].setAttribute('rotation', '90 0 0');
                        //TODO move dropped back to pool
                    } else if (evt.detail.dropped.parentNode.parentNode.parentNode.classList.contains('cube') && evt.detail.dropped.parentNode.parentNode.parentNode.getAttribute('template')) {
                        console.log('Setting new template');

                        console.log('Dropped', evt.detail.dropped.parentNode.parentNode.parentNode);

                        //console.log('Dropped template: ',evt.detail.dropped.parentNode.getAttribute('template'));

                        //this.el.setAttribute('material',evt.detail.dropped.parentNode.getAttribute('material'));
                        //this.el.children[0].setAttribute('material','wireframe:false; transparent: true; opacity: 0');
                        this.el.children[0].setAttribute('template', evt.detail.dropped.parentNode.parentNode.parentNode.getAttribute('template'));
                        this.el.children[0].setAttribute('rotation', '90 0 0');
                        //this.el.children[0].removeAttribute('fillable');
                        //this.el.children[0].removeAttribute('drag-droppable');
                    }
                }
            }.bind(this));
        }
    };
});
define('district-tool/components/aframe/raw/intersection-spawn', ['exports', 'aframe'], function (exports, _aframe) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        dependencies: ['position'],
        schema: {
            templates: {
                type: 'array',
                required: true
            },
            currentTemplate: {
                type: 'string',
                required: true
            },
            event: { type: 'string', default: 'click' },
            offset: { type: 'vec3', default: { x: 0.5, y: 0.5, z: 0.5 } },
            snap: { type: 'vec3', default: { x: 1, y: 1, z: 1 } }
        },

        init: function init() {

            var sceneEl = this.el.sceneEl;

            for (var i = 0; i < this.data.templates.length; i++) {

                var templateSchema = {
                    template: this.data.templates[i],
                    components: ['position']
                };
                window.NAF.schemas.add(templateSchema);
            }

            setTimeout(function () {
                this.el.setAttribute('raycaster', 'showLine', true);
                this.el.setAttribute('raycaster', 'far', 100);
                this.el.setAttribute('line', 'color', 'orange');
                this.el.setAttribute('line', 'opacity', '0.5');
            }.bind(this), 2000);

            this.el.addEventListener(this.data.event, function (evt) {

                var targetEl = evt.detail.intersectedEl;
                var targetElClass = targetEl.getAttribute('class');

                if (!targetElClass || targetElClass !== 'checkpoint') {
                    var worldPos = evt.detail.intersection.point;
                    var pos = _aframe.default.utils.clone(worldPos);

                    pos.x = Math.floor(pos.x / this.data.snap.x) * this.data.snap.x + this.data.offset.x;
                    //pos.y = Math.floor(pos.y / this.data.snap.y) * this.data.snap.y+ this.data.offset.y;
                    pos.z = Math.floor(pos.z / this.data.snap.z) * this.data.snap.z + this.data.offset.z;

                    var entity = document.createElement("a-entity");

                    entity.setAttribute('position', pos.x + ' 2.5 ' + pos.z);
                    entity.setAttribute('networked', 'template:' + this.data.currentTemplate + '; showLocalTemplate:true');

                    sceneEl.appendChild(entity);

                    /*var spawnEl = window.NAF.entities.createNetworkEntity(this.data.currentTemplate, pos, '0 0 0');
                    window.NAF.utils.whenEntityLoaded(spawnEl, function() {
                        var spawnEvent = new CustomEvent('spawnEvent', {'detail': {
                            target: spawnEl
                        }});
                        el.dispatchEvent(spawnEvent);
                    });*/
                }
            }.bind(this));

            var cursorMenu = document.querySelector('#cursor-menu');

            var selectBar = cursorMenu.components['select-bar'];

            document.addEventListener("wheel", function (e) {
                // cross-browser wheel delta
                var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

                if (delta > 0) {
                    selectBar.onOptionPrevious();
                } else {
                    selectBar.onOptionNext();
                }

                this.el.setAttribute('intersection-spawn', 'currentTemplate', selectBar.selectedOptionValue);
            }.bind(this), false);
        }
    };
});
define('district-tool/components/aframe/raw/lod-level', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        schema: {
            type: 'number'
        }
    };
});
define('district-tool/components/aframe/raw/lod', ['exports', 'aframe'], function (exports, _aframe) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        init: function init() {
            var lod = this.lod = new THREE.LOD();
            Array.from(this.el.children).forEach(function (childElement) {
                childElement.addEventListener('loaded', function () {
                    var lodLevelComponent = childElement.components['lod-level'];
                    if (lodLevelComponent !== undefined) {
                        lod.addLevel(childElement.object3D, lodLevelComponent.data);
                    }
                });
            });
            this.el.setObject3D('lod', lod);
        },
        tick: function tick() {
            if (this.el.sceneEl.camera) {
                this.lod.update(this.el.sceneEl.camera);
            }
        }
    };
});
define('district-tool/components/aframe/raw/snap', ['exports', 'aframe'], function (exports, _aframe) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        dependencies: ['position'],

        schema: {
            offset: { type: 'vec3' },
            snap: { type: 'vec3' }
        },

        init: function init() {
            this.originalPos = this.el.getAttribute('position');
        },

        update: function update() {
            var data = this.data;

            var pos = _aframe.default.utils.clone(this.originalPos);
            pos.x = Math.floor(pos.x / data.snap.x) * data.snap.x + data.offset.x;
            pos.y = Math.floor(pos.y / data.snap.y) * data.snap.y + data.offset.y;
            pos.z = Math.floor(pos.z / data.snap.z) * data.snap.z + data.offset.z;

            this.el.setAttribute('position', pos);
        }
    };
});
define('district-tool/components/transformer-grid', ['exports', 'ember-aframe/components/a-entity'], function (exports, _aEntity) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _aEntity.default.extend({
        rows: 10,
        cols: 10,
        tiles: [],
        init: function init() {

            this._super();

            var tiles = [];
            var currentCol = 0;
            var currentRow = 0;

            for (var i = 0; i < this.cols * this.rows; i++) {
                tiles.push({
                    type: i % 2 ? 'transformer' : 'transformer-inv',
                    position: currentCol + ' 0 ' + currentRow
                });

                currentCol++;
                if (currentCol > this.cols - 1) {
                    currentCol = 0;
                    currentRow++;
                    if (currentRow > this.rows) {
                        break;
                    }
                }
            }

            this.set('tiles', tiles);
        }
    });
});
define('district-tool/components/ui-accordion', ['exports', 'semantic-ui-ember/components/ui-accordion'], function (exports, _uiAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAccordion.default;
    }
  });
});
define('district-tool/components/ui-checkbox', ['exports', 'semantic-ui-ember/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
define('district-tool/components/ui-dimmer', ['exports', 'semantic-ui-ember/components/ui-dimmer'], function (exports, _uiDimmer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDimmer.default;
    }
  });
});
define('district-tool/components/ui-dropdown', ['exports', 'semantic-ui-ember/components/ui-dropdown'], function (exports, _uiDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdown.default;
    }
  });
});
define('district-tool/components/ui-embed', ['exports', 'semantic-ui-ember/components/ui-embed'], function (exports, _uiEmbed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiEmbed.default;
    }
  });
});
define('district-tool/components/ui-modal', ['exports', 'semantic-ui-ember/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
define('district-tool/components/ui-nag', ['exports', 'semantic-ui-ember/components/ui-nag'], function (exports, _uiNag) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiNag.default;
    }
  });
});
define('district-tool/components/ui-popup', ['exports', 'semantic-ui-ember/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
define('district-tool/components/ui-progress', ['exports', 'semantic-ui-ember/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
define('district-tool/components/ui-radio', ['exports', 'semantic-ui-ember/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
define('district-tool/components/ui-rating', ['exports', 'semantic-ui-ember/components/ui-rating'], function (exports, _uiRating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRating.default;
    }
  });
});
define('district-tool/components/ui-search', ['exports', 'semantic-ui-ember/components/ui-search'], function (exports, _uiSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSearch.default;
    }
  });
});
define('district-tool/components/ui-shape', ['exports', 'semantic-ui-ember/components/ui-shape'], function (exports, _uiShape) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiShape.default;
    }
  });
});
define('district-tool/components/ui-sidebar', ['exports', 'semantic-ui-ember/components/ui-sidebar'], function (exports, _uiSidebar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSidebar.default;
    }
  });
});
define('district-tool/components/ui-sticky', ['exports', 'semantic-ui-ember/components/ui-sticky'], function (exports, _uiSticky) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSticky.default;
    }
  });
});
define('district-tool/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('district-tool/helpers/app-version', ['exports', 'district-tool/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('district-tool/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('district-tool/helpers/even', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.even = even;
  function even(params /*, hash*/) {
    var value = params[0];
    return value % 2 == 0;
  }

  exports.default = Ember.Helper.helper(even);
});
define('district-tool/helpers/map-value', ['exports', 'semantic-ui-ember/helpers/map-value'], function (exports, _mapValue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapValue.default;
    }
  });
  Object.defineProperty(exports, 'mapValue', {
    enumerable: true,
    get: function () {
      return _mapValue.mapValue;
    }
  });
});
define('district-tool/helpers/parse-coordinates', ['exports', 'ember-aframe/helpers/parse-coordinates'], function (exports, _parseCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _parseCoordinates.default;
    }
  });
  Object.defineProperty(exports, 'parseCoordinates', {
    enumerable: true,
    get: function () {
      return _parseCoordinates.parseCoordinates;
    }
  });
});
define('district-tool/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('district-tool/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('district-tool/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('district-tool/helpers/stringify-component', ['exports', 'ember-aframe/helpers/stringify-component'], function (exports, _stringifyComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyComponent.default;
    }
  });
  Object.defineProperty(exports, 'stringifyComponent', {
    enumerable: true,
    get: function () {
      return _stringifyComponent.stringifyComponent;
    }
  });
});
define('district-tool/helpers/stringify-coordinates', ['exports', 'ember-aframe/helpers/stringify-coordinates'], function (exports, _stringifyCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyCoordinates.default;
    }
  });
  Object.defineProperty(exports, 'stringifyCoordinates', {
    enumerable: true,
    get: function () {
      return _stringifyCoordinates.stringifyCoordinates;
    }
  });
});
define('district-tool/helpers/stringify', ['exports', 'ember-aframe/helpers/stringify'], function (exports, _stringify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringify.default;
    }
  });
  Object.defineProperty(exports, 'stringify', {
    enumerable: true,
    get: function () {
      return _stringify.stringify;
    }
  });
});
define('district-tool/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('district-tool/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'district-tool/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('district-tool/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('district-tool/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('district-tool/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('district-tool/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('district-tool/initializers/export-application-global', ['exports', 'district-tool/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('district-tool/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('district-tool/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('district-tool/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("district-tool/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('district-tool/macros/parse-coordinates', ['exports', 'ember-aframe/macros/parse-coordinates'], function (exports, _parseCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _parseCoordinates.default;
    }
  });
});
define('district-tool/macros/stringify-component', ['exports', 'ember-aframe/macros/stringify-component'], function (exports, _stringifyComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyComponent.default;
    }
  });
});
define('district-tool/macros/stringify-coordinates', ['exports', 'ember-aframe/macros/stringify-coordinates'], function (exports, _stringifyCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyCoordinates.default;
    }
  });
});
define('district-tool/macros/stringify', ['exports', 'ember-aframe/macros/stringify'], function (exports, _stringify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringify.default;
    }
  });
});
define('district-tool/mixins/base', ['exports', 'semantic-ui-ember/mixins/base'], function (exports, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _base.default;
    }
  });
});
define('district-tool/mixins/promise-resolver', ['exports', 'ember-promise-tools/mixins/promise-resolver'], function (exports, _promiseResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseResolver.default;
    }
  });
});
define('district-tool/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('district-tool/router', ['exports', 'district-tool/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('editor');
    this.route('preview');
  });

  exports.default = Router;
});
define('district-tool/routes/editor', ['exports', 'aframe', 'npm:aframe-extras', 'district-tool/components/aframe/raw/environment-ground-texture', 'district-tool/components/aframe/raw/intersection-spawn', 'district-tool/components/aframe/raw/snap', 'npm:super-hands', 'npm:aframe-environment-component', 'npm:aframe-star-system-component', 'npm:networked-aframe', 'npm:aframe-event-set-component', 'npm:aframe-layout-component', 'npm:aframe-select-bar-component'], function (exports, _aframe, _npmAframeExtras, _environmentGroundTexture, _intersectionSpawn, _snap) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    //import LOD from '../components/aframe/raw/lod';
    //import LODLevel from '../components/aframe/raw/lod-level';

    /*if (!AFRAME.components['fillable']) {
        AFRAME.registerComponent('fillable', Fillable);
    }*/

    if (!_aframe.default.components['environment-ground-texture']) {
        _aframe.default.registerComponent('environment-ground-texture', _environmentGroundTexture.default);
    }

    //import Fillable from '../components/aframe/raw/fillable';


    if (!_aframe.default.components['intersection-spawn']) {
        _aframe.default.registerComponent('intersection-spawn', _intersectionSpawn.default);
    }

    if (!_aframe.default.components['snap']) {
        _aframe.default.registerComponent('snap', _snap.default);
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
        components: ['position', 'rotation', {
            selector: '.head',
            component: 'material'
        }]
    });

    window.NAF.options.compressSyncPackets = true;
    window.NAF.options.updateRate = 15;

    // Register a particular package, and its dependencies.
    _npmAframeExtras.default.controls.registerAll();

    //TODO: remove aframe body/html markup when component unmounts

    exports.default = Ember.Route.extend({});
});
define('district-tool/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('district-tool/routes/preview', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('district-tool/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("district-tool/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aiV0dbJG", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/application.hbs" } });
});
define("district-tool/templates/components/transformer-grid", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jlYRbRnQ", "block": "{\"symbols\":[\"tile\",\"&default\"],\"statements\":[[4,\"each\",[[19,0,[\"tiles\"]]],null,{\"statements\":[[0,\"    \"],[5,\"a-entity\",[[10,\"class\",[26,[[19,1,[\"type\"]]]]],[10,\"mixin\",[26,[[19,1,[\"type\"]]]]],[9,\"template\",\"src: #transformerTemplate\"],[10,\"position\",[26,[[19,1,[\"position\"]]]]]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[11,2]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/transformer-grid.hbs" } });
});
define("district-tool/templates/components/ui-accordion", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4BWqutzD", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-accordion.hbs" } });
});
define("district-tool/templates/components/ui-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FRP4hZAj", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[19,0,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[19,0,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-checkbox.hbs" } });
});
define("district-tool/templates/components/ui-dimmer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PKCNFFgY", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-dimmer.hbs" } });
});
define("district-tool/templates/components/ui-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ExXNrprW", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null],[25,\"action\",[[19,0,[]],\"mapping\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-dropdown.hbs" } });
});
define("district-tool/templates/components/ui-embed", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RoLKh+/A", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-embed.hbs" } });
});
define("district-tool/templates/components/ui-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IBaklv+V", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-modal.hbs" } });
});
define("district-tool/templates/components/ui-nag", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rUMjkAKw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-nag.hbs" } });
});
define("district-tool/templates/components/ui-popup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YQ1k07gg", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-popup.hbs" } });
});
define("district-tool/templates/components/ui-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bmTiDH36", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-progress.hbs" } });
});
define("district-tool/templates/components/ui-radio", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q2bxF4hc", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"input\"],[10,\"type\",[18,\"type\"],null],[10,\"name\",[18,\"name\"],null],[10,\"tabindex\",[18,\"tabindex\"],null],[10,\"checked\",[25,\"unbound\",[[19,0,[\"checked\"]]],null],null],[10,\"disabled\",[25,\"unbound\",[[19,0,[\"disabled\"]]],null],null],[7],[8],[0,\"\\n\"],[6,\"label\"],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"],[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-radio.hbs" } });
});
define("district-tool/templates/components/ui-rating", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AEh537QO", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-rating.hbs" } });
});
define("district-tool/templates/components/ui-search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2dAbxYj/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-search.hbs" } });
});
define("district-tool/templates/components/ui-shape", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R+h67ism", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-shape.hbs" } });
});
define("district-tool/templates/components/ui-sidebar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PVivYTjo", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-sidebar.hbs" } });
});
define("district-tool/templates/components/ui-sticky", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7i1eq4h/", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[25,\"action\",[[19,0,[]],\"execute\"],null]]]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/components/ui-sticky.hbs" } });
});
define("district-tool/templates/editor", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7Qj7kjTu", "block": "{\"symbols\":[],\"statements\":[[4,\"ui-nag\",null,[[\"class\"],[\"inline\"]],{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"title\"],[7],[0,\"\\n    Use the WSAD keys to move and the mouse to look. Click and grab objects in the scene.\\n  \"],[8],[0,\"\\n    \"],[6,\"i\"],[9,\"class\",\"close icon\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[5,\"a-scene\",[[9,\"stats\",\"\"],[9,\"physics\",\"\"],[9,\"vr-mode-ui\",\"enabled: true\"],[9,\"networked-scene\",\"\\n  serverURL: https://haydenlee.io;\\n  app: district-tool;\\n  room: Aetheria;\\n  connectOnLoad: true;\\n  adapter: easyrtc;\\n  audio: false;\\n  debug: false;\\n\"]],[[],[]],{\"statements\":[[0,\"\\n    \"],[5,\"a-assets\",[],[[],[]],{\"statements\":[[0,\"\\n\\n        \"],[2,\" Mixins \"],[0,\"\\n\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"cube\"],[9,\"hoverable\",\"\"],[9,\"shadow\",\"\"],[9,\"grabbable\",\"\"],[9,\"drag-droppable\",\"\"],[9,\"dynamic-body\",\"\"],[9,\"geometry\",\"primitive: box; width: 1.1; height: 1.1; depth: 1.1\"],[9,\"material\",\"transparent: true; opacity: 0\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"cube-hovered\"],[9,\"material\",\"opacity: 0.7; color: purple\"]],[[],[]],{\"statements\":[[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"cube-dragover\"],[9,\"material\",\"opacity: 0.7; color: green\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"cube-dragover-stop\"],[9,\"material\",\"opacity: 0.7; color: purple\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\\n        \"],[2,\"<a-mixin id=\\\"transformer\\\" drag-droppable\\n                 fillable\\n                  material=\\\"shader:flat; wireframe: false; transparent: true; opacity: 0.2; color: pink; side: double\\\"\\n                  geometry=\\\"primitive: plane; width: 1; height: 1; depth: 1\\\" rotation=\\\"-90 0 0\\\"></a-mixin>\\n\\n        <a-mixin id=\\\"transformer-inv\\\" drag-droppable\\n                 fillable\\n                 material=\\\"shader:flat; wireframe: false; transparent: true; opacity: 0.2; color: purple; side: double\\\"\\n                 geometry=\\\"primitive: plane; width: 1; height: 1; depth: 1\\\" rotation=\\\"-90 0 0\\\"></a-mixin>\\n\\n        <a-mixin id=\\\"transformer-opaque\\\" drag-droppable\\n                 fillable\\n                 material=\\\"shader:flat; wireframe: false; transparent: false; opacity: 1; color: pink; side: double\\\"\\n                 geometry=\\\"primitive: plane; width: 1; height: 1; depth: 1\\\" rotation=\\\"-90 0 0\\\"></a-mixin>\\n\\n        <a-mixin id=\\\"transformer-inv-opaque\\\" drag-droppable\\n                 fillable\\n                 material=\\\"shader:flat; wireframe: false;  transparent: false; opacity: 1; color: purple; side: double\\\"\\n                 geometry=\\\"primitive: plane; width: 1; height: 1; depth: 1\\\" rotation=\\\"-90 0 0\\\"></a-mixin>\"],[0,\"\\n\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"transformer-inv-dragover\"],[9,\"material\",\"opacity: 0.1\"],[9,\"material\",\"color: #00ff00\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"transformer-inv-dragover-stop\"],[9,\"material\",\"opacity: 0.2\"],[9,\"material\",\"color: purple\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"transformer-dragover\"],[9,\"material\",\"opacity: 0.1\"],[9,\"material\",\"color: #00ff00\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[5,\"a-mixin\",[[9,\"id\",\"transformer-dragover-stop\"],[9,\"material\",\"opacity: 0.2\"],[9,\"material\",\"color: pink\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\\n        \"],[2,\" Templates \"],[0,\"\\n\\n        \"],[2,\" Player \"],[0,\"\\n        \"],[6,\"script\"],[9,\"id\",\"player-template\"],[9,\"type\",\"text/html\"],[7],[0,\"\\n            \"],[5,\"a-entity\",[],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[2,\" Head \"],[0,\"\\n        \"],[6,\"script\"],[9,\"id\",\"head-template\"],[9,\"type\",\"text/html\"],[7],[0,\"\\n            \"],[5,\"a-entity\",[[9,\"class\",\"avatar\"]],[[],[]],{\"statements\":[[0,\"\\n                \"],[5,\"a-sphere\",[[9,\"class\",\"head\"],[9,\"color\",\"#5985ff\"],[9,\"scale\",\"0.3 0.35 0.25\"],[9,\"random-color\",\"\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n                \"],[5,\"a-entity\",[[9,\"class\",\"face\"],[9,\"position\",\"0 0.05 0\"]],[[],[]],{\"statements\":[[0,\"\\n                    \"],[5,\"a-sphere\",[[9,\"class\",\"eye\"],[9,\"color\",\"#efefef\"],[9,\"position\",\"0.1 0.1 -0.2\"],[9,\"scale\",\"0.12 0.12 0.12\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[5,\"a-sphere\",[[9,\"class\",\"pupil\"],[9,\"color\",\"#000\"],[9,\"position\",\"0 0 -1\"],[9,\"scale\",\"0.2 0.2 0.2\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                    \"],[5,\"a-sphere\",[[9,\"class\",\"eye\"],[9,\"color\",\"#efefef\"],[9,\"position\",\"-0.1 0.1 -0.2\"],[9,\"scale\",\"0.12 0.12 0.12\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[5,\"a-sphere\",[[9,\"class\",\"pupil\"],[9,\"color\",\"#000\"],[9,\"position\",\"0 0 -1\"],[9,\"scale\",\"0.2 0.2 0.2\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n                    \"]],\"parameters\":[]}],[0,\"\\n                \"]],\"parameters\":[]}],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[2,\" Hand \"],[0,\"\\n        \"],[6,\"script\"],[9,\"id\",\"hand-template\"],[9,\"type\",\"text/html\"],[7],[0,\"\\n            \"],[5,\"a-box\",[[9,\"scale\",\"0.1 0.1 0.1\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[2,\" Box \"],[0,\"\\n        \"],[6,\"script\"],[9,\"id\",\"box-template\"],[9,\"type\",\"text/html\"],[7],[0,\"\\n            \"],[5,\"a-box\",[[9,\"mixin\",\"cube\"],[9,\"class\",\"cube\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[2,\" /Templates \"],[0,\"\\n\\n        \"],[6,\"img\"],[9,\"id\",\"grid1x1-texture\"],[9,\"src\",\"assets/img/textures/grid.png\"],[7],[8],[0,\"\\n\\n        \"],[5,\"a-asset-item\",[[9,\"id\",\"env_arrow\"],[9,\"src\",\"assets/obj/env_arrow.obj\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\\n    \"]],\"parameters\":[]}],[0,\"\\n        \"],[2,\" progressive controls must have all objects the raycaster can interact with set or they will not fire events \"],[0,\"\\n\\n\\n            \"],[5,\"a-entity\",[[9,\"position\",\"0 3 0\"],[9,\"progressive-controls\",\"objects: .cube, .collidable, .transformer; maxLevel: point\"]],[[],[]],{\"statements\":[[0,\"\\n                \"],[5,\"a-camera\",[[9,\"super-hands\",\"\"],[9,\"universal-controls\",\"\"]],[[],[]],{\"statements\":[[0,\"\\n                        \"],[5,\"a-cursor\",[[9,\"id\",\"cursor\"],[9,\"raycaster\",\"showLine: true; far: 100\"],[9,\"line\",\"color: orange; opacity: 0.5\"],[9,\"intersection-spawn\",\"event: click; currentTemplate: #box1Template; templates: #box1Template, #box2Template, #box3Template, #box4Template, #box5Template\"],[9,\"position\",\"0 0 -0.5\"],[9,\"geometry\",\"primitive: ring; radiusOuter: 0.008; radiusInner: 0.005; segmentsTheta: 32\"],[9,\"material\",\"color: white; shader: flat\"]],[[],[]],{\"statements\":[[0,\"\\n                            \"],[5,\"a-entity\",[[9,\"id\",\"cursor-menu\"],[9,\"select-bar\",\"controllerID: cursor\"],[9,\"scale\",\"0.7 0.7 0.7\"],[9,\"position\",\"0 -0.2 0.2\"],[9,\"rotation\",\"0 0 0\"]],[[],[]],{\"statements\":[[0,\"\\n                                \"],[6,\"optgroup\"],[9,\"class\",\"cursor-options\"],[9,\"label\",\"Blocks\"],[9,\"value\",\"blocks\"],[7],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box1Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box1\"],[8],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box2Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box2\"],[8],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box3Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box3\"],[8],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box4Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box4\"],[8],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box5Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box5\"],[8],[0,\"\\n                                    \"],[6,\"option\"],[9,\"value\",\"#box6Template\"],[9,\"src\",\"#grid1x1-texture\"],[9,\"selected\",\"\"],[7],[0,\"Box6\"],[8],[0,\"\\n                                \"],[8],[0,\"\\n                            \"]],\"parameters\":[]}],[0,\"\\n                        \"]],\"parameters\":[]}],[0,\"\\n\\n                \"]],\"parameters\":[]}],[0,\"\\n                \"],[5,\"a-entity\",[[9,\"id\",\"rhand\"],[9,\"class\",\"right-controller\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n                \"],[5,\"a-entity\",[[9,\"id\",\"lhand\"],[9,\"class\",\"left-controller\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n            \"]],\"parameters\":[]}],[0,\"\\n\\n    \"],[2,\" ground collider keeps objets from falling \"],[0,\"\\n    \"],[5,\"a-box\",[[9,\"position\",\"0 -3 0\"],[9,\"snap-surface\",\"\"],[9,\"static-body\",\"\"],[9,\"class\",\"collidable\"],[9,\"color\",\"#000000\"],[9,\"width\",\"100\"],[9,\"height\",\"10\"],[9,\"depth\",\"100\"],[9,\"visible\",\"false\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\\n    \"],[5,\"a-entity\",[[9,\"position\",\"0 2 0\"],[9,\"environment\",\"playArea: 1; preset: tron; shadow: false; shadowSize: 256; flatShading: false; skyType: gradient; horizonColor: #00ccf4; lightPosition: 0 0.5 -0.2; fog: 0.6; ground: noise; groundTexture: checkerboard; groundColor: #030f22; groundColor2: #04142e; grid: 1x1; seed: 1; gridColor: #ee75eb; dressingColor: #ee75eb\"],[9,\"environment-ground-texture\",\"repeat: 10.1\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n    \"],[5,\"a-entity\",[[9,\"position\",\"0 0 0\"],[9,\"star-system\",\"radius: 100; color: #ee75eb; size: 2; count: 1000; texture: assets/img/textures/plus.svg\"]],[[],[]],{\"statements\":[],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/editor.hbs" } });
});
define("district-tool/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jq2ZZE8s", "block": "{\"symbols\":[],\"statements\":[[2,\" Page Contents \"],[0,\"\\n\"],[6,\"section\"],[9,\"id\",\"home\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"ui inverted vertical masthead center aligned segment\"],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"ui container\"],[7],[0,\"\\n            \"],[6,\"nav\"],[9,\"class\",\"ui large secondary inverted stackable pointing menu\"],[7],[0,\"\\n\\n                \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"editor\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"Editor\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"preview\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"Preview\"]],\"parameters\":[]},null],[0,\"\\n\\n                \"],[6,\"a\"],[9,\"class\",\"right item\"],[9,\"href\",\"https://www.decentraland.org/\"],[9,\"title\",\"Decentraland\"],[7],[0,\"\\n                    \"],[6,\"img\"],[9,\"src\",\"assets/img/decentraland-logo-bw.svg\"],[9,\"width\",\"32\"],[9,\"height\",\"32\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"header\"],[9,\"class\",\"ui text container\"],[7],[0,\"\\n            \"],[6,\"h1\"],[9,\"class\",\"ui inverted header\"],[7],[0,\"\\n                District Tool\\n            \"],[8],[0,\"\\n            \"],[6,\"h2\"],[7],[0,\"Plan Decentraland districts with your team today\"],[8],[0,\"\\n\\n            \"],[6,\"button\"],[9,\"class\",\"ui huge inverted animated blue button\"],[9,\"tabindex\",\"0\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"visible content\"],[7],[0,\"Get Started\"],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"hidden content\"],[7],[0,\"\\n                    \"],[6,\"i\"],[9,\"class\",\"right arrow icon\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"ui vertical stripe segment\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"ui middle aligned stackable grid container\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"eight wide column\"],[7],[0,\"\\n                    \"],[6,\"h3\"],[9,\"class\",\"ui header\"],[7],[0,\"Morbi vehicula hendrerit cursus\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"\\n                        Duis rhoncus metus eget dolor consequat posuere. Sed volutpat urna sit amet consequat sodales.\\n                        Aenean ornare magna metus, mattis mollis sapien ullamcorper ac.\\n                    \"],[8],[0,\"\\n                    \"],[6,\"h3\"],[9,\"class\",\"ui header\"],[7],[0,\"Praesent neque tortor, sagittis sed\"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[0,\"\\n                        Praesent sagittis nibh fringilla nunc malesuada, ultrices blandit mi sollicitudin. Phasellus\\n                        tempor ante quis tincidunt rutrum. Pellentesque aliquet sem eget lorem cursus, sit amet pharetra\\n                        ipsum luctus. Suspendisse potenti.\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"six wide right floated column\"],[7],[0,\"\\n                    \"],[6,\"img\"],[9,\"src\",\"assets/img/decentraland-logo.svg\"],[9,\"width\",\"254\"],[9,\"height\",\"254\"],[9,\"class\",\"ui large bordered rounded image\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"center aligned column\"],[7],[0,\"\\n\\n                    \"],[6,\"button\"],[9,\"class\",\"ui huge animated primary button\"],[9,\"tabindex\",\"0\"],[7],[0,\"\\n                        \"],[6,\"span\"],[9,\"class\",\"visible content\"],[7],[0,\"Read more\"],[8],[0,\"\\n                        \"],[6,\"span\"],[9,\"class\",\"hidden content\"],[7],[0,\"\\n                            \"],[6,\"i\"],[9,\"class\",\"right arrow icon\"],[7],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/index.hbs" } });
});
define("district-tool/templates/preview", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vPJJhoRm", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "district-tool/templates/preview.hbs" } });
});
define('district-tool/utils/components', ['exports', 'ember-aframe/utils/components'], function (exports, _components) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _components.default;
    }
  });
});
define('district-tool/utils/get-promise-content', ['exports', 'ember-promise-tools/utils/get-promise-content'], function (exports, _getPromiseContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getPromiseContent.default;
    }
  });
});
define('district-tool/utils/is-fulfilled', ['exports', 'ember-promise-tools/utils/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
});
define('district-tool/utils/is-promise', ['exports', 'ember-promise-tools/utils/is-promise'], function (exports, _isPromise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPromise.default;
    }
  });
});
define('district-tool/utils/parse-coordinates', ['exports', 'ember-aframe/utils/parse-coordinates'], function (exports, _parseCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _parseCoordinates.default;
    }
  });
});
define('district-tool/utils/smart-resolve', ['exports', 'ember-promise-tools/utils/smart-resolve'], function (exports, _smartResolve) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _smartResolve.default;
    }
  });
});
define('district-tool/utils/stringify-component', ['exports', 'ember-aframe/utils/stringify-component'], function (exports, _stringifyComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyComponent.default;
    }
  });
});
define('district-tool/utils/stringify-coordinates', ['exports', 'ember-aframe/utils/stringify-coordinates'], function (exports, _stringifyCoordinates) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringifyCoordinates.default;
    }
  });
});
define('district-tool/utils/stringify', ['exports', 'ember-aframe/utils/stringify'], function (exports, _stringify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _stringify.default;
    }
  });
});


define('district-tool/config/environment', ['ember'], function(Ember) {
  var prefix = 'district-tool';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("district-tool/app")["default"].create({"name":"district-tool","version":"0.0.0+07469fc4"});
}
//# sourceMappingURL=district-tool.map
