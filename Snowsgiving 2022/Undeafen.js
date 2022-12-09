Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/5a000a0d4dff083d12a1d4fc2c7cbf66/g, '87a494e4d66936f2b3b4d0655e7c5186');
    return this._play();
};
// Normal undeafen sound: https://discord.com/assets/5a000a0d4dff083d12a1d4fc2c7cbf66.mp3
// Snowsgiving 2022 undeafen sound: https://discord.com/assets/87a494e4d66936f2b3b4d0655e7c5186.mp3
