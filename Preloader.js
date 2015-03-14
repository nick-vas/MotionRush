MotionRush.Preloader = function (game) {

};

MotionRush.Preloader.prototype = {

    preload: function () {

        this.load.image('menuBG', 'images/MotionRush_background.png');

    }, // preload

    update: function () {

            this.state.start('Menu'); // preloads menu
        } // update
}; // Preloader.prototype
