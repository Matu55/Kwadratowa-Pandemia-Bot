const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Projekt uruchomiony!");
});

app.get("/", (req, res) => {
  res.send("Hello World! I'm info bot made for Kwadratowa Pandemia");
});

const Discord = require("discord.js");
const { REST, Routes, SlashCommandBuilder } = require("discord.js")

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

const botID = process.env['botID'];
const serverID = process.env['serverID'];
const botToken = process.env['token'];

const rest = new REST().setToken(botToken);
const slashRegister = async () => {
    try {
        console.log("Próbowanie utworzenia komend!");

        await rest.put(Routes.applicationGuildCommands(botID, serverID), {
            body: [
                new SlashCommandBuilder()
                .setName("SendAnnounce")
                .setDescription("Wyślij wiadomość na kanał z ogłoszeniami")
                .addStringOption(option => {
                    return option
                    .setName("AnnounceWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z ogłoszeniami")
                    .setRequired(true)
                }),

                new SlashCommandBuilder()
                .setName("SendInfo")
                .setDescription("Wyślij wiadomość na kanał z informacjami")
                .addStringOption(option => {
                    return option
                    .setName("InfoWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z informacjami")
                    .setRequired(true)
                }),

                new SlashCommandBuilder()
                .setName("SendChangelog")
                .setDescription("Wyślij wiadomość na kanał z changelogiem")
                .addStringOption(option => {
                    return option
                    .setName("changelogWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z changelogiem")
                    .setRequired(true)
                }),
                
                new SlashCommandBuilder()
                .setName("SendBan")
                .setDescription("Wyślij wiadomość na kanał z banami")
                .addStringOption(option => {
                    return option
                    .setName("BanWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z banami")
                    .setRequired(true)
                }),

                new SlashCommandBuilder()
                .setName("SendUnban")
                .setDescription("Wyślij wiadomość na kanał z unbanami")
                .addStringOption(option => {
                    return option
                    .setName("UnBanWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z unbanami")
                    .setRequired(true)
                }),

                new SlashCommandBuilder()
                .setName("SendEvent")
                .setDescription("Wyślij wiadomość na kanał z eventami")
                .addStringOption(option => {
                    return option
                    .setName("EventWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z eventami")
                    .setRequired(true)
                }),

                new SlashCommandBuilder()
                .setName("SendWhitelist")
                .setDescription("Wyślij wiadomość na kanał whitelist")
                .addStringOption(option => {
                    return option
                    .setName("WhitelistWiadomość")
                    .setDescription("Wpisz wiadomość która zostanie wysłana na kanał z whitelist")
                    .setRequired(true)
                }),
            ],
        });
        console.log("Komendy zostały utworzone!");
    } catch (error) {
        console.log("Wystąpił błąd podczas tworzenia komend!");
        console.error(error)
    }
}
slashRegister();

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    if(interaction.channel.id === adminChannelID) {

      if(interaction.commandName === "SendAnnounce") {
        const textReceived = interaction.options.getString("AnnounceWiadomość");
        const announceChannel = client.channels.cache.get(announceChannelID); 

        if (announceChannel) {
          announceChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendInfo") {
        const textReceived = interaction.options.getString("InfoWiadomość");
        const infoChannel = client.channels.cache.get(infoChannelID); 

        if (infoChannel) {
          infoChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendChangelog") {
        const textReceived = interaction.options.getString("changelogWiadomość");
        const changelogChannel = client.channels.cache.get(changelogChannelID); 

        if (changelogChannel) {
          changelogChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendBan") {
        const textReceived = interaction.options.getString("BanWiadomość");
        const banChannel = client.channels.cache.get(bansChannelID); 

        if (banChannel) {
          banChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendUnban") {
        const textReceived = interaction.options.getString("InfoWiadomość");
        const unbanChannel = client.channels.cache.get(unbansChannelID); 

        if (unbanChannel) {
          unbanChannel.send(textReceived);
        }
      }

      if(interaction.commandName === "SendEvent") {
        const textReceived = interaction.options.getString("changelogWiadomość");
        const eventChannel = client.channels.cache.get(eventsChannelID); 

        if (eventChannel) {
          eventChannel.send(textReceived);
        }
      }


      if(interaction.commandName === "SendWhitelist") {
        const textReceived = interaction.options.getString("WhitelistWiadomość");
        const whitelistChannel = client.channels.cache.get(whitelistChannelID); 

        if (whitelistChannel) {
          whitelistChannel.send(textReceived);
        }
      }
    }
  }
})

client.handleComands(commandFolder, "/commands.js")
client.login(process.env['token']);