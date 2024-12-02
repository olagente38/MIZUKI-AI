import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path';

let proposals = {}; // Objeto para almacenar las propuestas de matrimonio
let marriages = {}; // Objeto para almacenar los matrimonios

let handler = async (m, { conn, command, usedPrefix, args }) => {
    const proposeCmd = /^(proponermatrimonio)$/i.test(command);
    const acceptCmd = /^(aceptarmatrimonio)$/i.test(command);
    const rejectCmd = /^(rechazarmatrimonio)$/i.test(command);
    const divorceCmd = /^(divorciarse)$/i.test(command);

    async function reportError(e) {
        await m.reply(`🌻 Ocurrió un error.`);
        console.log(e);
    }

    switch (true) {
        case proposeCmd:
            if (!m.mentionedJid || m.mentionedJid.length === 0) {
                await m.reply('Por favor, menciona a la persona a la que deseas proponer matrimonio.');
                return;
            }

            let proposer = m.sender;
            let proposee = m.mentionedJid[0];

            if (proposer === proposee) {
                await m.reply('¡No puedes proponerte matrimonio a ti mismo!');
                return;
            }

            if (proposals[proposer]) {
                await m.reply('Ya has propuesto matrimonio. Espera a que respondan.');
                return;
            }

            proposals[proposer] = proposee;

            await conn.reply(proposee, `¡${conn.getName(proposer)} te ha propuesto matrimonio! Usa el comando *${usedPrefix}aceptarmatrimonio* para aceptar o *${usedPrefix}rechazarmatrimonio* para rechazar.`, m);
            await m.reply('Tu propuesta de matrimonio ha sido enviada. Espera a que respondan.');
            break;

        case acceptCmd:
            let acceptProposee = m.sender;
            let proposerKey = Object.keys(proposals).find(key => proposals[key] === acceptProposee);

            if (!proposerKey) {
                await m.reply('No tienes ninguna propuesta de matrimonio pendiente.');
                return;
            }

            delete proposals[proposerKey];

            let proposerName = conn.getName(proposerKey);
            let proposeeName = conn.getName(acceptProposee);

            // Añadir el matrimonio a la lista de matrimonios
            marriages[proposerKey] = acceptProposee;
            marriages[acceptProposee] = proposerKey;

            await conn.reply(m.chat, `🎉 ¡Felicidades a ${proposerName} y ${proposeeName}! ¡Ahora están casados! 🎉`, m);
            break;

        case rejectCmd:
            let rejectProposee = m.sender;
            let rejectProposerKey = Object.keys(proposals).find(key => proposals[key] === rejectProposee);

            if (!rejectProposerKey) {
                await m.reply('No tienes ninguna propuesta de matrimonio pendiente.');
                return;
            }

            delete proposals[rejectProposerKey];

            let rejectProposerName = conn.getName(rejectProposerKey);
            let rejectProposeeName = conn.getName(rejectProposee);

            await conn.reply(rejectProposerKey, `${rejectProposeeName} ha rechazado tu propuesta de matrimonio.`, m);
            await m.reply(`Has rechazado la propuesta de matrimonio de ${rejectProposerName}.`);
            break;

        case divorceCmd:
            if (!m.mentionedJid || m.mentionedJid.length === 0) {
                await m.reply('Por favor, menciona a la persona de la que deseas divorciarte.');
                return;
            }

            let divorcingUser = m.sender;
            let partner = m.mentionedJid[0];

            if (marriages[divorcingUser] !== partner) {
                await m.reply('No estás casado con esta persona.');
                return;
            }

            delete marriages[divorcingUser];
            delete marriages[partner];

            let divorcingUserName = conn.getName(divorcingUser);
            let partnerName = conn.getName(partner);

            await conn.reply(m.chat, `💔 ${divorcingUserName} y ${partnerName} se han divorciado. 💔`, m);
            break;
    }
}

handler.tags = ['fun']
handler.help = ['proponermatrimonio *@usuario*', 'aceptarmatrimonio', 'rechazarmatrimonio', 'divorciarse *@usuario*']
handler.command = ['proponermatrimonio', 'aceptarmatrimonio', 'rechazarmatrimonio', 'divorciarse']
handler.group = true
export default handler