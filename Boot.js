var -- - = {};

-- -.Boot = function (game) {};

-- -.Boot.prototype = {
    preload: function () {

    },

    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = --;
        this.scale.maxHeight = --;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);

        this.input.addPointer();
        this.stage.backgroundColor = '--';

        //preloader initiation
        this.state.start('Preloader');
    }
}
