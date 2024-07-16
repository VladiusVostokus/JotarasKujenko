'use strict';

module.exports = (client, msg) => {
    const REPLY = 'Губка Боб Квадратні штани!';

    if(msg.author.bot) return;

    console.log(msg.author.globalName,
        msg.channel.name,
        msg.content); 

    if(msg.content === 'Хто проживає на дні океану?') 
        msg.reply(REPLY);

    if(msg.content === 'Шпаристий, жовтий, куди не зирни') 
        msg.reply(REPLY);
}