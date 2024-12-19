import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) { return conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐦𝐞𝐧𝐬𝐚𝐣𝐞 𝐝𝐞 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐚.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */${command}* *¿𝐂ó𝐦𝐨 𝐞𝐬𝐭á𝐬 𝐡𝐨𝐲?*`, m)}
try {
await m.react(rwait)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await conn.reply(m.chat, res.result, m)
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐌𝐢𝐳𝐮𝐤𝐢 𝐀𝐈 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐞𝐬𝐚 𝐜𝐨𝐧𝐬𝐮𝐥𝐭𝐚.`, m, rcanal)
}}
handler.command = ['ai']
handler.help = ['ia']
handler.tags = ['ai']

export default handler
