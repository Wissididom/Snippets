Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/471cfd0005b112ff857705e894bf41a6/g, '0100c36e9032a9a528e5e65dc7ab7d4f');
    return this._play();
};
// Normal invited to speak sound: https://discord.com/assets/471cfd0005b112ff857705e894bf41a6.mp3
// Snowsgiving 2022 invited to speak sound: https://discord.com/assets/0100c36e9032a9a528e5e65dc7ab7d4f.mp3
