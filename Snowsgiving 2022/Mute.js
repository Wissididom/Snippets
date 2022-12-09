Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/429d09ee3b86e81a75b5e06d3fb482be/g, '8d4672844c0b64927c30390de1d9ca8d');
    return this._play();
};
// Normal mute sound: https://discord.com/assets/429d09ee3b86e81a75b5e06d3fb482be.mp3
// Snowsgiving 2022 mute sound: https://discord.com/assets/8d4672844c0b64927c30390de1d9ca8d.mp3
