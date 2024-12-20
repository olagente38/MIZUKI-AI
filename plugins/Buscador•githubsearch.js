import fetch from 'node-fetch'
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) return conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐮𝐧 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐝𝐞 𝐆𝐢𝐭𝐡𝐮𝐛.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */${command}* 𝐌𝐢𝐳𝐮𝐤𝐢-𝐀𝐢`, m, rcanal)
try {
await m.react(rwait)
const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
q: text,
}))
const json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
🏁» *𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎:* ${1 + index}
🔗» *𝐄𝐍𝐋𝐀𝐂𝐄:* ${repo.html_url}
👨‍🎨» *𝐂𝐑𝐄𝐀𝐃𝐎𝐑:* ${repo.owner.login}
🏷️» *𝐍𝐎𝐌𝐁𝐑𝐄:* ${repo.name}
🛠️» *𝐂𝐑𝐄𝐀𝐃𝐎:* ${formatDate(repo.created_at)}
🔄» *𝐀𝐂𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐃𝐎:* ${formatDate(repo.updated_at)}
👀» *𝐕𝐈𝐒𝐈𝐓𝐀𝐒:* ${repo.watchers}
🌿» *𝐁𝐈𝐅𝐔𝐑𝐂𝐀𝐃𝐎:* ${repo.forks}
⭐» *𝐄𝐒𝐓𝐑𝐄𝐋𝐋𝐀𝐒:* ${repo.stargazers_count}
❗» *𝐈𝐒𝐒𝐔𝐄𝐒:* ${repo.open_issues}
📝» *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐂𝐈Ó𝐍:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
🧬» *𝐂𝐋𝐎𝐍𝐄:* ${repo.clone_url}
`.trim()}).join('\n\n─────────────────\n\n') 
// await m.react(done)
let img = await (await fetch(json.items[0].owner.avatar_url)).buffer()
await conn.sendMini(m.chat, '★¸.•☆•.¸★ 𝐆𝐈𝐓𝐇𝐔𝐁 | 𝐒𝐄𝐀𝐑𝐂𝐇 ★⡀.•☆•.★', dev, str, img, img, redes, estilo)
await m.react(done)
} catch {
await m.react(error)
conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐜𝐨𝐧 𝐞𝐬𝐞 𝐧𝐨𝐦𝐛𝐫𝐞.' + text, m, fake)}}
handler.help = ['githubsearch']
handler.tags = ['buscador']
handler.command = ['githubsearch']

handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
const d = new Date(n)
return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}
