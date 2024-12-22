import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */${command}* 𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐳𝐮𝐤𝐢`, m, rcanal, )

conn.reply(m.chat, wait, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `★¸.•☆•.¸★ 𝐘𝐓 | 𝐒𝐄𝐀𝐑𝐂𝐇 ★⡀.•☆•.★
[🍿] *𝐓Í𝐓𝐔𝐋𝐎:* 
» ${v.title}

[🔗] *𝐄𝐍𝐋𝐀𝐂𝐄:* 
» ${v.url}

[⌛] *𝐃𝐔𝐑𝐀𝐂𝐈Ó𝐍:* 
» ${v.timestamp}

[📆] *𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎:*
» ${v.ago}

👀 *Vistas:* 
» ${v.views}`}}).filter(v => v).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['buscador']
handler.command = ['playlist', 'ytbuscar', 'yts', 'ytsearch']

handler.register = true
handler.estrellas = 1

export default handler
