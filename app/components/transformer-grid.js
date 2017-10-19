import Ember from 'ember';
import AEntity from 'ember-aframe/components/a-entity';

export default AEntity.extend({
    rows: 10,
    cols: 10,
    tiles: [],
    init: function(){

        this._super();

        let tiles = [];
        let currentCol = 0;
        let currentRow = 0;

        for(var i = 0; i < this.cols*this.rows; i++){
            tiles.push({
                type: (i % 2) ? 'transformer' : 'transformer-inv',
                position: currentCol+' 0 '+currentRow
            });

            currentCol++;
            if(currentCol > this.cols-1){
                currentCol = 0;
                currentRow++;
                if(currentRow > this.rows){
                    break;
                }
            }
        }

        this.set('tiles',tiles);
    }
});
