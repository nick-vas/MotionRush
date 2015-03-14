MotionRush.Boot = function (game) {};

MotionRush.Boot.prototype = {
    preload: function () {

    },

    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = 900;
        this.scale.maxHeight = 450;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);

        this.input.addPointer();

        //preloader initiation
        this.state.start('Preloader');
    }
}
