import AEntity from 'ember-aframe/components/a-entity';

const LANDComponent = AEntity.extend({

    attributeBindings: [
        'position'
    ],

    geometry:"primitive: box;",
    material:"color: #ffffff; wireframe: false; wireframeLinewidth: 4;",
    shadow:"",
    'static-body': ''
});

LANDComponent.reopenClass({

});

export default LANDComponent;
