import Phaser, { MapData, Tilemap } from "phaser";

class MyGame extends Phaser.Scene {
	constructor() {
		super();
	}

	preload() {
		this.load.image("tiles", "../assets/tilesets/tileset.png");
		this.load.tilemapTiledJSON("metaverse", "../assets/tilemaps/map.json");
		this.load.image("cat", "../assets/sprites/cat.png", {frameWidth: 16, frameHeight: 16});
		this.load.image("pot", "../assets/sprites/pot.png", {frameWidth: 16, frameHeight: 16});
		this.load.image("soup", "../assets/sprites/soup.png", {frameWidth: 16, frameHeight: 16});
	}

	create() {
		var map = this.make.tilemap({ key: "metaverse" });
		var tileset = map.addTilesetImage("Tiles", "tiles");
		this.groundLayer = map.createLayer("Ground", tileset, 0, 0);
		this.plotsLayer = map.createLayer("Plots", tileset, 0, 0);

		sprite = this.physics.add.sprite(580, 170, "cat");
		sprite.scaleX = 0.2;
		sprite.scaleY= sprite.scaleX;

		sprite = this.physics.add.sprite(170, 170, "pot");
		sprite.scaleX = 0.2;
		sprite.scaleY= sprite.scaleX;

		sprite = this.physics.add.sprite(485, 180, "soup");
		sprite.scaleX = 0.2;
		sprite.scaleY= sprite.scaleX;

		this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

		var cursors = this.input.keyboard.createCursorKeys();
		var controlConfig = {
			camera: this.cameras.main,
			left: cursors.left,
			right: cursors.right,
			up: cursors.up,
			down: cursors.down,
			speed: 0.5,
		};
		controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
	}

	update(time, delta) {
		controls.update(delta);
	}
}

var controls;
var sprite;

const config = {
	type: Phaser.WEBGL,
	parent: "phaser-example",
	width: 1000,
	height: 600,
	autoCenter: true,
	physics: {
		default: "arcade",
	},
	scene: MyGame,
};

const game = new Phaser.Game(config);
