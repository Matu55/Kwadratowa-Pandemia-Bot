const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Projekt uruchomiony!");
});

app.get("/", (req, res) => {
  res.send("Hello World! I'm info bot made for Kwadratowa Pandemia");
});

const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const adminChannelID = process.env['adminChannelID'];
const announceChannelID = process.env['announceChannelID'];
const infoChannelID = process.env['infoChannelID'];
const changelogChannelID = process.env['changelogChannelID'];
const bansChannelID = process.env['bansChannelID'];
const unbansChannelID = process.env['unbansChannelID'];
const eventsChannelID = process.env['eventsChannelID'];
const whitelistChannelID = process.env['whitelistChannelID'];

client.on("ready", () => {
  console.log("Bot jest gotowy!");
})

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    if(message.channel.id === adminChannelID) {

      if(interaction.commandName === "SendAnnounce") {
        const textReceived = interaction.options.getString("AnnounceWiadomość")
        const announceChannel = client.channels.cache.get(announceChannelID); 

        if (announceChannel) {
          announceChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendInfo") {
        const textReceived = interaction.options.getString("InfoWiadomość")
        const infoChannel = client.channels.cache.get(infoChannelID); 

        if (infoChannel) {
          infoChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendChangelog") {
        const textReceived = interaction.options.getString("changelogWiadomość")
        const changelogChannel = client.channels.cache.get(changelogChannelID); 

        if (changelogChannel) {
          changelogChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendBan") {
        const textReceived = interaction.options.getString("BanWiadomość")
        const banChannel = client.channels.cache.get(bansChannelID); 

        if (banChannel) {
          banChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendUnban") {
        const textReceived = interaction.options.getString("InfoWiadomość")
        const unbanChannel = client.channels.cache.get(unbansChannelID); 

        if (unbanChannel) {
          unbanChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendEvent") {
        const textReceived = interaction.options.getString("changelogWiadomość")
        const eventChannel = client.channels.cache.get(eventsChannelID); 

        if (eventChannel) {
          eventChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendWhitelist") {
        const textReceived = interaction.options.getString("WhitelistWiadomość")
        const whitelistChannel = client.channels.cache.get(whitelistChannelID); 

        if (whitelistChannel) {
          whitelistChannel.send(textReceived);
        }
      }
    }
  }
})
client.login(process.env['token']);