Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/8b63833c8d252fedba6b9c4f2517c705/g, 'd4de309e478528dde3b61936b6b2ef90');
    return this._play();
};
// Normal ptt activate sound: https://discord.com/assets/8b63833c8d252fedba6b9c4f2517c705.mp3
// Snowsgiving 2022 ptt activate sound: https://discord.com/assets/d4de309e478528dde3b61936b6b2ef90.mp3
