const Discord = require('discord.js')

const botID = process.env['botID'];
const serverID = process.env['serverID'];
const botToken = process.env['token'];

const rest = new Discord.REST({ version: '10' }).setToken(botToken);
const slashRegister = async () => {
    try {
        console.log('Próbowanie utworzenia komend!');

        await rest.put(Discord.Routes.applicationGuildCommands(botID, serverID), {
            body: [
                new Discord.SlashCommandBuilder()
                .setName('SendAnnounce')
                .setDescription('Wyślij wiadomość na kanał z ogłoszeniami')
                .addStringOption((option) => option.setName('AnnounceText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z ogłoszeniami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('SendInfo')
                .setDescription('Wyślij wiadomość na kanał z informacjami')
                .addStringOption((option) => option.setName('InfoText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z informacjami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('SendChangelog')
                .setDescription('Wyślij wiadomość na kanał z changelogiem')
                .addStringOption((option) => option.setName('changelogText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z changelogiem').setRequired(true)),
                
                new Discord.SlashCommandBuilder()
                .setName('SendBan')
                .setDescription('Wyślij wiadomość na kanał z banami')
                .addStringOption((option) => option.setName('BanText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z banami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('SendUnban')
                .setDescription('Wyślij wiadomość na kanał z unbanami')
                .addStringOption((option) => option.setName('UnBanText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z unbanami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('SendEvent')
                .setDescription('Wyślij wiadomość na kanał z eventami')
                .addStringOption((option) => option.setName('EventText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z eventami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('SendWhitelist')
                .setDescription('Wyślij wiadomość na kanał whitelist')
                .addStringOption((option) => option.setName('WhitelistText').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z whitelist').setRequired(true)),
            ],
        });
        console.log('Komendy zostały utworzone!');
    } catch (error) {
        console.log('Wystąpił błąd podczas tworzenia komend!');
        console.error(error)
    }
}
slashRegister();