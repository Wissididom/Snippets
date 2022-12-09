Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/c6e92752668dde4eee5923d70441579f/g, '84c9eeb905be64bd9f5dc8b19eec89ea');
    return this._play();
};
// Normal outgoing ringtone: https://discord.com/assets/c6e92752668dde4eee5923d70441579f.mp3
// Snowsgiving 2022 outgoing ringtone: https://discord.com/assets/84c9eeb905be64bd9f5dc8b19eec89ea.mp3
