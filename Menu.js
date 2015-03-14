MotionRush.Menu = function (game) {

    this.startBG;

}

MotionRush.Menu.prototype = {

    create: function () {

        startBG = this.add.image(0, 0, 'menuBG'); // add background image

    },

    startGame: function (pointer) {

        this.state.start('Game'); // start the game!
    }
}
