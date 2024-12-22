export function before(m) {
const user = global.db.data.users[m.sender];
if (user.afk > -1) {
conn.reply(m.chat, `★¸.•☆•.¸★ 𝐀𝐅𝐊 ★⡀.•☆•.★\n\n[🚨] 𝐇𝐚𝐬 𝐯𝐮𝐞𝐥𝐭𝐨 𝐚 𝐞𝐬𝐭𝐚𝐫 𝐚𝐜𝐭𝐢𝐯𝐨.\n${user.afkReason ? '[❓] 𝐑𝐚𝐳ó𝐧 𝐝𝐞 𝐥𝐚 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝: ' + user.afkReason : ''}\n[⏳] 𝐓𝐢𝐞𝐦𝐩𝐨 𝐈𝐧𝐚𝐜𝐭𝐢𝐯𝐨: ${(new Date - user.afk).toTimeString()}`, m, rcanal)
user.afk = -1;
user.afkReason = '';
}
const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (const jid of jids) {
const user = global.db.data.users[jid];
if (!user) {
continue;
}
const afkTime = user.afk;
if (!afkTime || afkTime < 0) {
continue;
}
const reason = user.afkReason || '';
conn.reply(m.chat, `[🚨] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐞𝐬𝐭á 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨. 𝐍𝐨 𝐥𝐨 𝐦𝐞𝐧𝐜𝐢𝐨𝐧𝐞𝐬.`, m, rcanal)
}
return true;
}
