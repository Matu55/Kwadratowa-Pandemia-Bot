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

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('ban')
                .setDescription('Wyślij wiadomość na kanał z banami')
                .addChannelOption(option => {
                    return option 
                    .setName('kanal')
                    .setDescription('Wybierz kanał na który zostanie wysłana wiadomość')
                    .setRequired(true)
                })
                .addUserOption(option => {
                    return option
                    .setName('discord')
                    .setDescription('Wybierz użytkownika który został zbanowany lub jeżeli go nie ma na discordzie wybierz swój nick')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('nick')
                    .setDescription('Wpisz nick gracza')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('notatka')
                    .setDescription('Wpisz powód bana')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('unban')
                .setDescription('Wyślij wiadomość na kanał z unbanami')
                .addChannelOption(option => {
                    return option 
                    .setName('kanal')
                    .setDescription('Wybierz kanał na który zostanie wysłana wiadomość')
                    .setRequired(true)
                })
                .addUserOption(option => {
                    return option
                    .setName('discord')
                    .setDescription('Wybierz użytkownika który został zbanowany')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('nick')
                    .setDescription('Wpisz nick gracza')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('ankieta')
                .setDescription('Utwórz ankietę')
                .addChannelOption(option => {
                    return option 
                    .setName('kanal')
                    .setDescription('Wybierz kanał na którym zostanie utworzona ankieta')
                    .setRequired(true)
                })
                .addStringOption(option => { 
                    return option
                    .setName('tytul')
                    .setDescription('Wpisz tytuł ankiety')
                    .setRequired(true)
                })
                .addStringOption(option => { 
                    return option
                    .setName('tekst')
                    .setDescription('Wpisz tekst ankiety')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('help')
                .setDescription('Wyjaśnia komendy bota')
            ],
        });
        console.log('Komendy zostały utworzone!');
    } catch (error) {
        console.log('Wystąpił błąd podczas tworzenia komend!');
        console.error(error)
    }
}
slashRegister();