const { REST, Routes, SlashCommandBuilder } = require("discord.js")

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