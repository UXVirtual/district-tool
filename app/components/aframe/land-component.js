import AEntity from 'ember-aframe/components/a-entity';

const LANDComponent = AEntity.extend({
    geometry:"primitive: box;",
    material:"color: #0000ff; wireframe: true; wireframeLineWidth: 4;"
});

LANDComponent.reopenClass({

});

export default LANDComponent;
