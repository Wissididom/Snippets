Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/5827bbf9a67c61cbb0e02ffbf434b654/g, '2362295d01606d5b2fa72db71ef6b121');
    return this._play();
};
// Normal viewer join sound: https://discord.com/assets/5827bbf9a67c61cbb0e02ffbf434b654.mp3
// Snowsgiving 2022 viewer join sound: https://discord.com/assets/2362295d01606d5b2fa72db71ef6b121.mp3
