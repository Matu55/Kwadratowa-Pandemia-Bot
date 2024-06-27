const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Projekt uruchomiony!");
});

app.get("/", (req, res) => {
  res.send("Hello World! I'm info bot made for Kwadratowa Pandemia");
});

const Discord = require('discord.js');

const bot = new Discord.Client({ intents: [ Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages ], partials: [Discord.Partials.Message, Discord.Partials.Channel, Discord.Partials.Reaction] })

const commands = require("./commands.js")

bot.on("ready", () => {
  console.log("Bot jest gotowy!");

  if (commands) {
    console.log("Plik z komendami wczytany // sprawdź czy nie ma żadnych błędą wyżej w konsoli")
  }
})

bot.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return false;

  //=================================================================================================//
  
  if(interaction.commandName === "sendannounce") {
    const textReceived = interaction.options.getString("tekst");
    const Channel = bot.channels.cache.get(interaction.options.getChannel("kanal").id); 

    if (Channel) {
      Channel.send(textReceived);
    }
  }

  //=================================================================================================//

  if(interaction.commandName === "ban") {
    const Channel = bot.channels.cache.get(interaction.options.getChannel("kanal").id); 

    if (Channel) {
      const admin = interaction.user.tag;
      const banneddc = interaction.options.getUser("discord");
      const bannednick = interaction.options.getString("nick");
      const note = interaction.options.getString("notatka");

      const Embed = new Discord.EmbedBuilder()
      .setColor('#FF0000')
      .setTitle('Osoba Zbanowana!')

      .setAuthor({ name: 'Kwadratowa Pandemia', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' })
      .setDescription('Przykro nam, że zakończyło się to banem.')
      .setThumbnail('https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&')
      .addFields(
        { name: 'Administraotr Banujący', value: admin, inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Osoba Zbanowana', value: banneddc.tag, inline: true },
        { name: 'Nick osoby zbanowanej', value: bannednick, inline: true },
        { name: 'Notatka administratora', value: note, inline: true },
      )
      .setTimestamp()
      .setFooter({ text: 'Kwadratowa Pandemia Bot', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' });

      Channel.send({ embeds: [Embed] });
      
      const member = interaction.guild.members.cache.get(banneddc.id)
      member.roles.add(process.env['bannedRoleID']);
    }
  }

  //=================================================================================================//

  if(interaction.commandName === "unban") {
    const Channel = bot.channels.cache.get(interaction.options.getChannel("kanal").id); 

    if (Channel) {
      const unbanneddc = interaction.options.getUser("discord");
      const unbannednick = interaction.options.getString("nick");

      const Embed = new Discord.EmbedBuilder()
      .setColor('#36FF00')
      .setTitle('Osoba odbanowana!')

      .setAuthor({ name: 'Kwadratowa Pandemia', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' })
      .setDescription('Cieszymy się z twojego powrotu.')
      .setThumbnail('https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&')
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Osoba odbanowana', value: unbanneddc.tag, inline: true },
        { name: 'Nick osoby odbanowanej', value: unbannednick, inline: true },
      )
      .setTimestamp()
      .setFooter({ text: 'Kwadratowa Pandemia Bot', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' });

      Channel.send({ embeds: [Embed] });

      const member = interaction.guild.members.cache.get(unbanneddc.id)
      member.roles.remove(process.env['bannedRoleID']);
    }
  }

  //=================================================================================================//

  if(interaction.commandName === "ankieta") {
    const Channel = bot.channels.cache.get(interaction.options.getChannel("kanal").id); 

    if (Channel) {
      const title = interaction.options.getString("tytul");
      const subtext = interaction.options.getString("tekst");

      const Embed = new Discord.EmbedBuilder()
      .setColor('#FFB200')
      .setTitle(title)

      .setAuthor({ name: 'Kwadratowa Pandemia', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' })
      .setDescription(subtext)
      .setThumbnail('https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&')

      .setTimestamp()
      .setFooter({ text: 'Kwadratowa Pandemia Bot', iconURL: 'https://cdn.discordapp.com/attachments/1218542014367400006/1255964374636560434/server-icon.png?ex=667f0b79&is=667db9f9&hm=ab89e9c825063966abfd4ca531652e2a91d23359d9e1104759c21036fa5e04bf&' });

      Channel.send({ embeds: [Embed] }).then(messageReaction => {
        messageReaction.react("✅");
        messageReaction.react("❌");
      });
    }
  }
})

bot.login(process.env['token']);