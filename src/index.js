require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
tgl = new Date()

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);

client.once('ready', () => {
  client.user.setActivity('lomba ngocok', { type: ActivityType.Competing });
});

//-----------------------  pesan gaje ------------------------------------//
client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'hai' && !message.author.bot) {
    message.channel.send('hai juga');
  }

  if (message.content === 'sfi') {
    message.channel.send(`iyh <:turu:1325461431281258497>`)
    var hri = tgl.getDay()
    if (hri === 0) {
      message.channel.send('bsok senin <:mengsad:1325461472091836438>')
    }
  }

  if (message.content === 'bobok') {
    let list = ["Begadang ae nanggung cuk", "nanggung cuk begadang ae", "Begadang ae cuk, nanggung <a:lic:884363894519394304>", "cuk nanggung, begadang ae", "no", "bobok lh gw g pduli", "silahkan, gada yg larang", "sok a6"];
    let random = Math.floor(Math.random() * list.length)
    message.channel.send(`${list[random]}`);
  }
});

client.login(process.env.TOKEN);
