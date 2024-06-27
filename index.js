const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Projekt uruchomiony!");
});

app.get("/", (req, res) => {
  res.send("Hello World! I'm info bot made for Kwadratowa Pandemia");
});

const Discord = require('discord.js');

const client = new Discord.Client({ intents: [ Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages ]})
const commands = require("./commands.js")

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

  if (commands) {
    console.log("Komendy wczytane")
  }
})

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    if(interaction.channel.id === adminChannelID) {

      if(interaction.commandName === "sendannounce") {
        const textReceived = interaction.options.getString("announcetext");
        const announceChannel = client.channels.cache.get(announceChannelID); 

        if (announceChannel) {
          announceChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "sendinfo") {
        const textReceived = interaction.options.getString("infotext");
        const infoChannel = client.channels.cache.get(infoChannelID); 

        if (infoChannel) {
          infoChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "sendchangelog") {
        const textReceived = interaction.options.getString("changelogtext");
        const changelogChannel = client.channels.cache.get(changelogChannelID); 

        if (changelogChannel) {
          changelogChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "sendban") {
        const textReceived = interaction.options.getString("bantext");
        const banChannel = client.channels.cache.get(bansChannelID); 

        if (banChannel) {
          banChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "sendunban") {
        const textReceived = interaction.options.getString("unbantext");
        const unbanChannel = client.channels.cache.get(unbansChannelID); 

        if (unbanChannel) {
          unbanChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "sendevent") {
        const textReceived = interaction.options.getString("eventtext");
        const eventChannel = client.channels.cache.get(eventsChannelID); 

        if (eventChannel) {
          eventChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "sendwhitelist") {
        const textReceived = interaction.options.getString("whitelisttext");
        const whitelistChannel = client.channels.cache.get(whitelistChannelID); 

        if (whitelistChannel) {
          whitelistChannel.send(textReceived);
        }
      }
    }
  }
})

client.login(process.env['token']);