Audio.prototype._play = Audio.prototype.play;
Audio.prototype.play = function() {
    this.src = this.src.replace(/74ab980d6890a0fa6aa0336182f9f620/g, 'edbd1eb44fea4a0b47314ddf0c1a2620');
    return this._play();
};
// Normal ptt deactivate sound: https://discord.com/assets/74ab980d6890a0fa6aa0336182f9f620.mp3
// Snowsgiving 2022 ptt deactivate sound: https://discord.com/assets/edbd1eb44fea4a0b47314ddf0c1a2620.mp3
