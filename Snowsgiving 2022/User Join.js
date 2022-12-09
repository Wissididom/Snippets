Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/5dd43c946894005258d85770f0d10cff/g, '2421764d6b0516cf74ebed18009f5173');
    return this._play();
};
// Normal user join sound: https://discord.com/assets/5dd43c946894005258d85770f0d10cff.mp3
// Snowsgiving 2022 user join sound: https://discord.com/assets/2421764d6b0516cf74ebed18009f5173.mp3
