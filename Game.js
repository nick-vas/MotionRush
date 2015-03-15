MotionRush.Game = function (game) {
    // Game variable declaration
    this.hovers = 0; // times player hovers
    this.score = 0; // times player completes hoversRequired
    this.hoversRequired; // amount of hovers needed for image to change
    this.hoversCall;
    this.timer; // countDown value
    this.countdown; // countDown call
    this.overmessage;
    this.box; // game body
    this.left = true;
    this.right = false;
    this.hand1Visible = false;

    this.controller = new Leap.Controller();

};

MotionRush.Game.prototype = {

    create: function () {
        // controller setup
        this.controller.connect();
        this.controller.setBackground(true);
        // game setup
        this.timer = 2;
        this.countdown = this.time.create(false);
        this.countdown.loop(1000, this.updateTime, this);
        this.buildWorld();
    },

    buildWorld: function () {

        box = this.add.sprite(0, 0, 'box2_sheet', this.rnd.integerInRange(0, 3));
        this.hoversRequired = this.rnd.integerInRange(2, 5);
        this.hoversCall = this.add.bitmapText(10, 10, 'eightbitwonder', 'Hovers Required ' + this.hoversRequired, 20);
        this.countdown.start();
    },

    gameRules: function () {
        this.score++;
        box.frame = this.rnd.integerInRange(0, 3);
        this.hoversRequired = this.rnd.integerInRange(2, 5);
        this.hovers = 0;
        this.hoversCall.destroy();
        this.hoversCall = this.add.bitmapText(10, 10, 'eightbitwonder', 'Hovers Required ' + this.hoversRequired, 20);

    },

    updateTime: function () {
        this.timer--;
        if (this.timer <= 0) {
            this.timeUp();
        }
    },

    timeUp: function () {
        // stop functions +
        this.hoversCall.destroy();
        this.countdown.destroy();
        this.overmessage = this.add.bitmapText(this.world.centerX - 120, this.world.centerY - 55, 'eightbitwonder', 'TIME UP!\n\n' + this.score, 42);
        this.overmessage.align = "center";
        this.overmessage.inputEnabled = true;
        this.overmessage.events.onInputDown.addOnce(this.quitGame, this);
    },

    quitGame: function (pointer) {

        this.state.start('Menu');
    },

    update: function () {

        if (this.input.activePointer.x > 500 && (this.right == false)) {
            this.hovers++;
            this.left = false;
            this.right = true;
        }

        if (this.input.activePointer.x < 500 && (this.left == false)) {
            this.hovers++;
            this.left = true;
            this.right = false;
        }

        if (this.hovers == this.hoversRequired) {
            this.gameRules();
        }
    }

};
