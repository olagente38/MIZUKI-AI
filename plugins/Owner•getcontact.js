let handler = async (m, { conn, args }) => {

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)

if (!m.mentionedJid || m.mentionedJid.length === 0) {
await conn.reply(m.chat, '🍄 Mencione al usuario que quieres que aguarde en mis contactos.', m, rcanal)
return
}

const nameRequest = await conn.reply(m.chat, '✨️ Por favor, proporcione el nombre con el que desea guardar el contacto.', m, rcanal)

let username = await conn.getName(nameRequest)

await conn.sendContact(m.chat, [[`${who.split`@`[0]}@s.whatsapp.net`, `${username}`]], m)
}
handler.help = ['newcontact *@tag*']
handler.tags = ['owner']
handler.command = ['newcontact', 'savecontact']
handler.rowner = true 
export default handler