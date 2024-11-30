// import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin }) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.autoRechazar) {
const prefixes = const arabicPrefixes = ['212', '6', '90', '963', '966', '967', '249', '92', '93', '94']
if (prefixes.some(prefix => m.sender.startsWith(prefix))) {
await conn.groupRequestParticipantsUpdate(m.chat, [m.sender], 'reject')
}}}

export default handler