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
                .setName('sendannounce')
                .setDescription('Wyślij wiadomość na kanał z ogłoszeniami')
                .addChannelOption(option => {
                    return option 
                    .setName('channel')
                    .setDescription('Wybierz kanał na który zostanie wysłana wiadomość')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option 
                    .setName('announcetext')
                    .setDescription('Wpisz wiadomość która zostanie wysłana na podany wcześniej kanał')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('ban')
                .setDescription('Wyślij wiadomość na kanał z banami')
                .addChannelOption(option => {
                    return option 
                    .setName('channel')
                    .setDescription('Wybierz kanał na który zostanie wysłana wiadomość')
                    .setRequired(true)
                })
                .addUserOption(option => {
                    return option
                    .setName('user')
                    .setDescription('Wybierz użytkownika który został zbanowany')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('nicktext')
                    .setDescription('Wpisz nick gracza')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('bantext')
                    .setDescription('Wpisz powód bana')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('unban')
                .setDescription('Wyślij wiadomość na kanał z unbanami')
                .addChannelOption(option => {
                    return option 
                    .setName('channel')
                    .setDescription('Wybierz kanał na który zostanie wysłana wiadomość')
                    .setRequired(true)
                })
                .addUserOption(option => {
                    return option
                    .setName('user')
                    .setDescription('Wybierz użytkownika który został zbanowany')
                    .setRequired(true)
                })
                .addStringOption(option => {
                    return option
                    .setName('nicktext')
                    .setDescription('Wpisz nick gracza')
                    .setRequired(true)
                }),

                //=================================================================================================//

                new Discord.SlashCommandBuilder()
                .setName('ankieta')
                .setDescription('Utwórz ankietę')
                .addChannelOption(option => {
                    return option 
                    .setName('channel')
                    .setDescription('Wybierz kanał na którym zostanie utworzona ankieta')
                    .setRequired(true)
                })
                .addStringOption(option => { 
                    return option
                    .setName('ankiettitletext')
                    .setDescription('Wpisz tytuł ankiety')
                    .setRequired(true)
                })
                .addStringOption(option => { 
                    return option
                    .setName('ankietsubtext')
                    .setDescription('Wpisz tekst ankiety')
                    .setRequired(true)
                }),
            ],
        });
        console.log('Komendy zostały utworzone!');
    } catch (error) {
        console.log('Wystąpił błąd podczas tworzenia komend!');
        console.error(error)
    }
}
slashRegister();
