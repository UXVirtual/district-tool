import AEntity from 'ember-aframe/components/a-entity';

const LANDComponent = AEntity.extend({

    attributeBindings: [
        'position'
    ],

    geometry:"primitive: box;",
    material:"color: #ffffff; wireframe: true; wireframeLinewidth: 4;",
    shadow:""
});

LANDComponent.reopenClass({

});

export default LANDComponent;
