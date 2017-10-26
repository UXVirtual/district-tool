export default {

    makeId: function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },

    init: function() {

        var sceneEl = document.querySelector('a-scene');

        sceneEl.addEventListener('loaded',function(){
            var username = 'user-' + this.makeId(5).toLowerCase();
            username = prompt('Choose a username', username);
            var player = document.getElementById('player');
            var myNametag = player.querySelector('.nametag');
            myNametag.setAttribute('text', 'value', username);
            var myName = player.querySelector('.name');
            myName.setAttribute('text', 'value', username);
            if(!username){
                myNametag.setAttribute('visible', false);
            }

            sceneEl.components['networked-scene'].connect();
        }.bind(this));

        // Define custom schema for syncing avatar color, set by random-color
        window.NAF.schemas.add({
            template: '#head-template',
            components: [
                'position',
                'rotation',
                {
                    selector: '.head',
                    component: 'material',
                    property: 'color'
                },
                {
                    selector: '.nametag',
                    component: 'text',
                    property: 'value'
                },
                {
                    selector: '.nametag',
                    component: 'visible'
                }
            ]
        });

        window.NAF.schemas.add({
            template: '#three-towers-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.schemas.add({
            template: '#city-block-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.schemas.add({
            template: '#pole-block-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.schemas.add({
            template: '#regular-block-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.schemas.add({
            template: '#industrial-stack-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.schemas.add({
            template: '#orb-block-template',
            components: [
                'position',
                {component: 'colorize', property: 'color'}
            ]
        });

        window.NAF.options.compressSyncPackets = true;
        window.NAF.options.updateRate = 15;
    }
};