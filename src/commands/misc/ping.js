module.exports = {
    name: 'ping',
    description: 'Replies with the bot ping!',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const reply = await interaction.fetchReply();
  
      const ping = reply.createdTimestamp - interaction.createdTimestamp;
      
      let repl = [
        "Pong!",
        "Pang.",
        "What are you doing?",
        "Peng",
        "U-Uh... h-hi",
        "W-Was I fast enough?"
      ];
      let result = Math.floor(Math.random() * repl.length);
      if (ping > 500) p = "bot lag";
      if (ping < 500) p = "Nice! ambatukam";
      /*msg.channel.send(
        `:mega: *${repl[result]}* - My ping: **${ping}** ms (${p})`//oi ris ini boleh kuutak atik ga
        // boleh sih
      );*/

      interaction.editReply(
        `:mega: *${repl[result]}* - My ping: **${ping}** ms | WS: ${client.ws.ping}ms (${p})`
      );

      /*interaction.editReply(
        `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
      );*/
    },
  };