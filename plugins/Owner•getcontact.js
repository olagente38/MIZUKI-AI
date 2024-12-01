let handler = async (m, { conn, args }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : null

    if (!who) {
        await m.reply('Por favor, menciona el número que quieres que guarde.')
        return
    }
                await conn.sendContact(m.chat, [[`${who.split`@`[0]}@s.whatsapp.net`, `${wm}`]], m)
      
}

handler.help = ['savecontact *@tag*']
handler.tags = ['tools']
handler.command = ['savecontact', 'save']
//handler.group = true 
export default handler