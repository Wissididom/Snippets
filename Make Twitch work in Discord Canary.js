for (element of document.getElementsByTagName('iframe')) {
  if (element.src.indexOf('twitch.tv') > -1)
    element.src = element.src + '&parent=canary.discord.com';
}
