--.Preloader = function (game) {

    this.titleText = null;
    this.ready = false;

};

--.Preloader.prototype = {


    update: function () {
        if (this.cache.isSoundDecoded('game_audio') && this.ready == false) {
            this.ready = true; // game is ready to run
            this.state.start('Menu'); // preloads menu
        }
    }
};
