let handler = async (m, { conn, args }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : null

    if (!who) {
        await m.reply('Por favor, menciona el número que quieres que guarde.')
        return
    }
    await m.reply('Por favor, proporcione el nombre con el que desea guardar el contacto.')

    let username
    await conn.on('chat-update', async chatUpdate => {
        if (chatUpdate.messages && chatUpdate.count) {
            let message = chatUpdate.messages.all()[0]
            if (message.key.remoteJid === m.chat && !message.key.fromMe) {
                username = message.message.conversation
                await conn.sendContact(m.chat, [[`${who.split`@`[0]}@s.whatsapp.net`, `${username}`]], m)
            }
        }
    })
}

handler.help = ['savecontact *@tag*']
handler.tags = ['tools']
handler.command = ['savecontact', 'save']
//handler.group = true 
export default handler