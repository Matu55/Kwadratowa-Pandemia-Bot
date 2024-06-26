const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Projekt uruchomiony!");
});

app.get("/", (req, res) => {
  res.send("Hello World! This is info bot made for Kwadratowa Pandemia");
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

client.on("ready", () => {
  console.log("Bot jest gotowy!");
})

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("/SendAnnounce") && message.channel.id === adminChannelID) {
    const announceChannel = client.channels.cache.get(announceChannelID); 

    if (announceChannel) {
      announceChannel.send(message.content.slice(13));
      message.delete();
    }
  }

  if (message.content.startsWith("/SendInfo") && message.channel.id === adminChannelID) {
    const infoChannel = client.channels.cache.get(infoChannelID); 

    if (infoChannel) {
      infoChannel.send(message.content.slice(9));
      message.delete();
    }
  }

  if (message.content.startsWith("/SendChangelog") && message.channel.id === adminChannelID) {
    const changelogChannel = client.channels.cache.get(changelogChannelID); 

    if (changelogChannel) {
      changelogChannel.send(message.content.slice(14));
      message.delete();
    }
  }

  if (message.content.startsWith("/SendBan") && message.channel.id === adminChannelID) {
    const banChannel = client.channels.cache.get(bansChannelID); 

    if (banChannel) {
      banChannel.send(message.content.slice(8));
      message.delete();
    }
  }

  if (message.content.startsWith("/SendUnban") && message.channel.id === adminChannelID) {
    const unbanChannel = client.channels.cache.get(unbansChannelID); 

    if (unbanChannel) {
      unbanChannel.send(message.content.slice(10));
      message.delete();
    }
  }

  if (message.content.startsWith("/SendEvent") && message.channel.id === adminChannelID) {
    const eventChannel = client.channels.cache.get(eventsChannelID); 

    if (eventChannel) {
      eventChannel.send(message.content.slice(10));
      message.delete();
    }
  }
});


client.login(process.env['token']);
