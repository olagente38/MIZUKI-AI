import fetch from "node-fetch";
import yts from "yt-search";

let handler = async (m, { conn, text }) => {
if (!text) {
return m.reply("*[🚨]* 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞.")
}

let ytres = await yts(text)
let video = ytres.videos[0]
  
if (!video) {
return m.reply("❀ Video no encontrado")
}

let { title, thumbnail, timestamp, views, ago, url } = video

let vistas = parseInt(views).toLocaleString("es-ES") + " vistas"

let HS = `*[✅]* 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐞𝐧 𝐩𝐫𝐨𝐜𝐞𝐬𝐨...`

let thumb = (await conn.getFile(thumbnail))?.data;

let JT = {
contextInfo: {
externalAdReply: {
title: title, body: "",
mediaType: 1, previewType: 0,
mediaUrl: url, sourceUrl: url,
thumbnail: thumb, renderLargerThumbnail: true,
}}}

await conn.reply(m.chat, HS, m, JT)

try {
let api = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${url}`);
let json = await api.json()
let { download } = json.result

await conn.sendMessage(m.chat, { audio: { url: download.url }, caption: ``, mimetype: "audio/mpeg", }, { quoted: m })
} catch (error) {
console.error(error)    
}}

handler.command = ['play'];

export default handler
