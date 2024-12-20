import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, command, text }) => {

if (!text) return conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐚𝐥𝐠ú𝐧 𝐚𝐧𝐢𝐦𝐞.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */${command}* 𝐌𝐢𝐳𝐮𝐤𝐢`, m, rcanal)
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) return conn.reply(m.chat, `[🚨] 𝐎𝐜𝐮𝐫𝐫𝐢ó 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫.`, m, rcanal)

let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `🎬» 𝐓Í𝐓𝐔𝐋𝐎: ${title_japanese}
📖» 𝐂𝐀𝐏Í𝐓𝐔𝐋𝐎 ${chapters}
📡» 𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐒𝐈Ó𝐍: ${type}
📊» 𝐄𝐒𝐓𝐀𝐃𝐎: ${status}
📚» 𝐕𝐎𝐋𝐔𝐌𝐄𝐒: ${volumes}
⭐» 𝐅𝐀𝐕𝐎𝐑𝐈𝐓𝐎: ${favorites}
🏅» 𝐏𝐔𝐍𝐓𝐀𝐉𝐄: ${score}
👥» 𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒: ${members}
🔗» 𝐔𝐑𝐋: ${url}
✍️» 𝐀𝐔𝐓𝐎𝐑: ${author}
🖼️» 𝐅𝐎𝐍𝐃𝐎: ${background}
📝» 𝐒𝐈𝐍𝐎𝐏𝐒𝐈𝐒: ${synopsis}
 ` 
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', '★¸.•☆•.¸★ 𝐈𝐍𝐅𝐎 | 𝐀𝐍𝐈𝐌𝐄 ★⡀.•☆•.★\n\n' + animeingfo, fkontak, m)

} 
handler.help = ['infoanime'] 
handler.tags = ['anime'] 
handler.command = ['infoanime', 'animeinfo'] 

export default handler
