MotionRush.Game = function (game) {
    // Game variable declaration
    this.hovers;
    this.hoversRequired;
    this.score;
    this.timeAvailable;
    this.timeEvent;
    this.gameover = false;
    this.secondsElapsed;
    this.box;
    this.cursor;
    this.left = true;
    this.right = false;
};

MotionRush.Game.prototype = {

    create: function () {

        this.secondsElapsed = 0;
        this.score = this.time.create(false);
        this.score.loop(1000, this.updateScore, this);

        timeAvailable = this.rnd.integerInRange(1, 4);
        this.buildWorld();
    },

    buildWorld: function () {

        box = this.add.sprite(0, 0, 'box2_sheet', this.rnd.integerInRange(0, 3));
        cursor = this.add.sprite(0, 0, 'pointer');
        cursor.anchor.setTo(0.5, 0.5);
        this.physics.enable(cursor, Phaser.Physics.ARCADE);
        cursor.body.allowRotation = false;
        hoversRequired = this.rnd.integerInRange(2, 5);
        timeEvent = this.time.events.loop(Phaser.Timer.SECOND, this.decreaseTime);
        this.score.start();

    },

    updateScore: function () {
        this.secondsElapsed++;
    },

    decreaseTime: function () {
        this.timeAvailable--;

        if (timeAvailable === 0) {
            this.quitGame();
        }
    },

    quitGame: function () {

        this.state.start('Menu');
    },

    update: function () {

        cursor.rotation = this.physics.arcade.moveToPointer(cursor, 1500, this.input.activePointer);

        if (cursor.x > 500 && (this.right == false)) {
            this.hovers++;
            this.left = false;
            this.right = true;
        } else if (cursor.x < 500 && (this.left == false)) {
            this.hovers++;
            this.left = true;
            this.right = false;
        }

    }

};
