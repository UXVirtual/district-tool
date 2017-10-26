import AFRAME from 'aframe';

/**
 * Spawn entity at the intersection point on click, given the properties passed.
 *
 * <a-entity intersection-spawn-multi="mixin: box; material.color: red"> will spawn
 * <a-entity mixin="box" material="color: red"> at intersection point.
 */
export default {
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
        event: {type: 'string', default: 'click'},
        offset: {type: 'vec3', default: {x: 0.5, y: 0.5, z: 0.5}},
        snap: {type: 'vec3', default: {x: 1, y: 1, z: 1}}
    },

    init: function () {

        var sceneEl = this.el.sceneEl;

        for(var i = 0; i < this.data.templates.length; i++){

            var templateSchema = {
                template: this.data.templates[i],
                components: [
                    'position'
                ]
            };
            window.NAF.schemas.add(templateSchema);
        }

        setTimeout(function(){
            this.el.setAttribute('raycaster','showLine',true);
            this.el.setAttribute('raycaster','far', 100);
            this.el.setAttribute('line','color','orange');
            this.el.setAttribute('line','opacity','0.5');
        }.bind(this),2000);


        this.el.addEventListener(this.data.event, function(evt){

            var head = document.querySelector('#player .head');

            var material = head.getAttribute('material');
            var color = material.color;
            var targetEl = evt.detail.intersectedEl;
            var targetElClass = targetEl.getAttribute('class');

            if(!targetElClass || targetElClass !== 'checkpoint'){
                var worldPos = evt.detail.intersection.point;
                const pos = AFRAME.utils.clone(worldPos);

                pos.x   = Math.floor(pos.x / this.data.snap.x) * this.data.snap.x + this.data.offset.x;
                //pos.y = Math.floor(pos.y / this.data.snap.y) * this.data.snap.y+ this.data.offset.y;
                pos.z = Math.floor(pos.z / this.data.snap.z) * this.data.snap.z + this.data.offset.z;

                var entity = document.createElement("a-entity");


                entity.setAttribute('position',pos.x+ ' 2.5 '+pos.z);
                entity.setAttribute('networked','template:'+this.data.currentTemplate+'; showLocalTemplate:true');
                sceneEl.appendChild(entity);

                //TODO: set colorize component inside the template then set its attribute here

                // Wait a tick for the DOM changes to take effect.
                setTimeout(function(){
                    //entity.setAttribute('colorize','color',color);
                    // Wait for the (local) template to be rendered.
                    /*entity.addEventListener('templaterendered', function (evt) {
                        console.log('Template rendered',evt);
                        // Set the color to colorize; schema specifies network sync.

                    });*/
                });

                //TODO: see why this isn't working - Glitch here: https://glitch.com/edit/#!/colorize-me

                //var spawnEl = window.NAF.entities.createNetworkEntity(this.data.currentTemplate, pos, '0 0 0');
                window.NAF.utils.whenEntityLoaded(entity, function() {

                    //entity.setAttribute('colorize','color',color);

                    entity.addEventListener('templaterendered', function (evt) {
                        console.log('Template rendered',evt);
                        // Set the color to colorize; schema specifies network sync.
                        // NOTE: this logs an update to the color, but then a subsequent update to default.
                        // But, now that colorize doesn't do anything by default, it's OK.
                        // UPDATE: left colorize out of the template to avoid redundant colorize
                        //evt.detail.target.setAttribute('colorize','color',color);
                        entity.setAttribute('colorize','color',color);

                    });

                    /*.addEventListener('child-attached',function(evt){
                        console.log('Set color: ',color,evt.detail.el);
                        evt.detail.el.setAttribute('colorize','color',color);
                    }.bind(this));*/

                    var spawnEvent = new CustomEvent('spawnEvent', {'detail': {
                        target: entity
                    }});
                    this.el.dispatchEvent(spawnEvent);
                }.bind(this));
            }
        }.bind(this));

        var cursorMenu = document.querySelector('#cursor-menu');

        var selectBar = cursorMenu.components['select-bar'];

        document.addEventListener("wheel", function(e){
            // cross-browser wheel delta
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

            if(delta > 0){
                selectBar.onOptionPrevious();
            }else{
                selectBar.onOptionNext();
            }

            this.el.setAttribute('intersection-spawn','currentTemplate',selectBar.selectedOptionValue);

        }.bind(this), false);
    }
};