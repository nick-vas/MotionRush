MotionRush.Menu = function (game) {

    this.startBG;

}

MotionRush.Menu.prototype = {

    create: function () {

        startBG = this.add.image(0, 0, 'menuBG'); // add background image
        startBG.inputEnabled = true; // enable input
        startBG.events.onInputDown.addOnce(this.startGame, this);

    },

    startGame: function (pointer) {

        this.state.start('Game'); // start the game!
    }
}
