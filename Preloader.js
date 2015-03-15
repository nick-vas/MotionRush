MotionRush.Preloader = function (game) {

};

MotionRush.Preloader.prototype = {

    preload: function () {

        // font
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        // images, character
        this.load.image('menuBG', 'images/MotionRush_background.png');
        this.load.image('pointer', 'images/pointer.png');
        // spritesheets
        this.load.spritesheet('box2_sheet', 'images/box2_sheet.png', 1002, 1002);
        this.load.spritesheet('box4_sheet', 'images/box4_sheet.png', 1005, 1005);


    }, // preload

    update: function () {

            this.state.start('Menu'); // preloads menu
        } // update
}; // Preloader.prototype
