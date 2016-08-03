'use strict';

const Discord = require('discord.js');

const Auth = require('./auth.json');

const mybot = new Discord.Client();

mybot.on('ready', () => {
  console.log(`Ready to begin! Serving in ${mybot.channels.length} channels`);
});

mybot.on('disconnected', () => {
  console.log('Disconnected!');

  process.exit(1);
});

mybot.on('message', (message) => {
  if (message.content.toUpperCase().startsWith('PING')) {
    mybot.sendMessage(message, 'hi andy <@146094125261783040>');
  }

  if (message.content.toUpperCase().startsWith('TYLER')) {
    mybot.sendMessage(message, '<@146104003950936064> someone wants you!');
  }
});

mybot.loginWithToken(Auth.token);
