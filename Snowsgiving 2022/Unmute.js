Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/43805b9dd757ac4f6b9b58c1a8ee5f0d/g, '87e93acdc240cffbf402318ee698e8c4');
    return this._play();
};
// Normal unmute sound: https://discord.com/assets/43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3
// Snowsgiving 2022 unmute sound: https://discord.com/assets/87e93acdc240cffbf402318ee698e8c4.mp3
