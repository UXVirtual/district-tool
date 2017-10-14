import AFRAME from 'aframe';

/**
 * Spawn entity at the intersection point on click, given the properties passed.
 *
 * `<a-entity intersection-spawn="mixin: box; material.color: red">` will spawn
 * `<a-entity mixin="box" material="color: red">` at intersection point.
 */

export default {

    schema: {
        default: '',
        parse: AFRAME.utils.styleParser.parse
    },

    init: function () {
        const data = this.data;
        const el = this.el;

        el.addEventListener(data.event, function (evt) {

                console.log('Clicked',evt)

                // Create element.
                const spawnEl = document.createElement('a-entity');

                //TODO: adopt spawning approach from working networked minecraft demo

                // Snap intersection point to grid and offset from center.
                spawnEl.setAttribute('position', evt.detail.intersection.point);

                // Set components and properties.
                Object.keys(data).forEach(function (name) {
                        if (name === 'event') {
                            return;
                        }
                        AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
                    }
                );

                // Append to scene.
                el.sceneEl.appendChild(spawnEl);
            }
        );
    }
};