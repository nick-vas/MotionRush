--.Menu = function (game) {
    this.startBG;
    this.ding;
}

--.Menu.prototype = {

    create: function () {

        startBG = this.add.image(0, 0, 'titlescreen'); // add background image

    },

    startGame: function (pointer) {
        this.state.start('Game'); // start the game!
    }
}
