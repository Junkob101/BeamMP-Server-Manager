'use strict';


const Discord = require('discord.js');
const shell = require('child_process');

const client = new Discord.Client();

const fs = require('fs');


var botDeleted = 0;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

  if (message.content === 'ping') {
  }

  if (!message.author.bot){
    console.log(message.content)

    var datetime = new Date();
    var authorName = usernameCorrection("".concat(message.author.username))

    
    if (message.content.includes("!restart") && message.channel.id == [insert channel id] && message.member.roles.cache.has('[if you want role whitelist]')) {
      fs.appendFile("chat.txt", '-------------------------------------------------------' + '\r\n', function(err) {
      if(err) {
          return console.log(err);
        }
      })
      fs.appendFile("chat.txt", datetime + ' | ' + authorName + ' restarted the BeamMP server.' + '\r\n', function(err)  {

        if(err) {
          return console.log(err);
        }
      })
      fs.appendFile("chat.txt", '-------------------------------------------------------' + '\r\n', function(err) {
      if(err) {
          return console.log(err);
        }
      })
      console.log('restarting server')
      message.channel.send(authorName + ' has requested a server restart...')
      shell.exec('pkill BeamMP-Server')
      shell.exec('tmux new-session -d [enter full beammp path here]');
      console.log('done')
      
      sleep(1000);
      message.channel.send('Server has been restarted.')

    }

    else {
      if (message.content.includes("!restart")){


        message.channel.send('Sorry. You appear not to have the permissions to use this command!')

      fs.appendFile("chat.txt", '-------------------------------------------------------' + '\r\n', function(err) {
      if(err) {
          return console.log(err);
        }
      })
      fs.appendFile("chat.txt", datetime + ' | ' + authorName + ' attempted to restart the server.' + '\r\n', function(err)  {

        if(err) {
          return console.log(err);
        }
      })
      fs.appendFile("chat.txt", datetime + ' | ' + authorName + ' may not have the appropriate permissions to use this command!.' + '\r\n', function(err)  {

        if(err) {
          return console.log(err);
        }
      })
      fs.appendFile("chat.txt", '-------------------------------------------------------' + '\r\n', function(err) {
      if(err) {
          return console.log(err);
        }
      })
      }
    }
  }  
});

 
client.login('');


function usernameCorrection(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

