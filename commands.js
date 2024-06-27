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
                .setName('sendannounce')
                .setDescription('Wyślij wiadomość na kanał z ogłoszeniami')
                .addStringOption((option) => option.setName('announcetext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z ogłoszeniami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('sendinfo')
                .setDescription('Wyślij wiadomość na kanał z informacjami')
                .addStringOption((option) => option.setName('infotext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z informacjami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('sendchangelog')
                .setDescription('Wyślij wiadomość na kanał z changelogiem')
                .addStringOption((option) => option.setName('changelogtext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z changelogiem').setRequired(true)),
                
                new Discord.SlashCommandBuilder()
                .setName('sendban')
                .setDescription('Wyślij wiadomość na kanał z banami')
                .addStringOption((option) => option.setName('bantext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z banami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('sendunban')
                .setDescription('Wyślij wiadomość na kanał z unbanami')
                .addStringOption((option) => option.setName('unbantext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z unbanami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('sendevent')
                .setDescription('Wyślij wiadomość na kanał z eventami')
                .addStringOption((option) => option.setName('eventtext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z eventami').setRequired(true)),

                new Discord.SlashCommandBuilder()
                .setName('sendwhitelist')
                .setDescription('Wyślij wiadomość na kanał whitelist')
                .addStringOption((option) => option.setName('whitelisttext').setDescription('Wpisz wiadomość która zostanie wysłana na kanał z whitelist').setRequired(true)),
            ],
        });
        console.log('Komendy zostały utworzone!');
    } catch (error) {
        console.log('Wystąpił błąd podczas tworzenia komend!');
        console.error(error)
    }
}
slashRegister();