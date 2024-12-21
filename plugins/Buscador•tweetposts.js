// By Jtxs 🐢
// https://whatsapp.com/channel/0029Vanjyqb2f3ERifCpGT0W

import axios from 'axios';
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import('@whiskeysockets/baileys')).default;

let handler = async (m, { conn, text }) => {
if (!text) { return conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐓𝐰𝐢𝐭𝐭𝐞𝐫.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */tiktoksearch* 𝐌𝐢𝐳𝐮𝐤𝐢.', m, rcanal); }

async function createImage(url) {
const { imageMessage } = await generateWAMessageContent({image: { url }}, { upload: conn.waUploadToServer });
return imageMessage;
}
    
try {
let api = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/Twitter-Posts`, {params: {text: encodeURIComponent(text)},
headers: {'Content-Type': 'application/json'}});

let json = api.data.result;

let resultsToDisplay = json.slice(0, 7);

let mini = [];
for (let res of resultsToDisplay) {

let txt =  `👤 *𝐔𝐒𝐄𝐑:* ${res.user}\n`
    txt += `📝 *𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐂𝐈Ó𝐍:* ${res.post}\n`
    txt += `📇 *𝐏𝐄𝐑𝐅𝐈𝐋:* ${res.profile}\n`
    txt += `🔗 *𝐋𝐈𝐍𝐊:* ${res.user_link}\n`

mini.push({
body: proto.Message.InteractiveMessage.Body.create({text: null}),
footer: proto.Message.InteractiveMessage.Footer.create({text: null}),
header: proto.Message.InteractiveMessage.Header.create({title: `${txt}`,
hasMediaAttachment: true,
imageMessage: await createImage(res.profile)
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: []
})
});
}

const msg = generateWAMessageFromContent(m.chat, {viewOnceMessage: {
message: {
messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 4},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({text: `📝 𝐒𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐨𝐧 𝐫𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞 𝐓𝐰𝐢𝐭𝐭𝐞𝐫 𝐬𝐨𝐛𝐫𝐞: ${text}\n★¸.•☆•.¸★ 𝐓𝐖𝐄𝐄𝐓𝐏𝐎𝐒𝐓𝐒 ★⡀.•☆•.★`}),
footer: proto.Message.InteractiveMessage.Footer.create({text: null}),
header: proto.Message.InteractiveMessage.Header.create({hasMediaAttachment: false}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({cards: mini})
})
}
}
}, {});

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

} catch (error) {
console.error(error)
}}

handler.help = ['tweetposts']
handler.tags = ['buscador']
handler.command = ['tweetposts']
handler.register = true
handler.chocolates = 1

export default handler;
