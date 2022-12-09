Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/4fcfeb2cba26459c4750e60f626cebdc/g, 'fc544d1057f7480494e1e961b8a23f19');
    return this._play();
};
// Normal user leave sound: https://discord.com/assets/4fcfeb2cba26459c4750e60f626cebdc.mp3
// Snowsgiving 2022 user leave sound: https://discord.com/assets/fc544d1057f7480494e1e961b8a23f19.mp3
