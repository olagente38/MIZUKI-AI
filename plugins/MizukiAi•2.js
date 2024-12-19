import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
const username = `${conn.getName(m.sender)}`
const basePrompt = `Tu nombre es Mizuki AI y parece haber sido creado por SpectrumOfc. Tu versión actual es 2.0.7, Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertida, y te encanta aprender. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`
if (isQuotedImage) {
const q = m.quoted
const img = await q.download?.()
if (!img) {
console.error('[🚨] 𝐄𝐫𝐫𝐨𝐫: 𝐍𝐨 𝐢𝐦𝐚𝐠𝐞 𝐛𝐮𝐟𝐟𝐞𝐫 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞.')
return conn.reply(m.chat, '*[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐌𝐢𝐳𝐮𝐤𝐢 𝐀𝐈 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐢𝐦á𝐠𝐞𝐧𝐞𝐬.*', m, fake)}
const content = '[🚨] ¿𝐐𝐮é 𝐬𝐞 𝐨𝐛𝐬𝐞𝐫𝐯𝐚 𝐞𝐧 𝐥𝐚 𝐢𝐦á𝐠𝐞𝐧?'
try {
const imageAnalysis = await fetchImageBuffer(content, img)
const query = '[🚨] *𝐃𝐞𝐬𝐜𝐫í𝐛𝐞𝐦𝐞 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐲 𝐝𝐞𝐭𝐚𝐥𝐥𝐚 𝐩𝐨𝐫 𝐪𝐮é 𝐚𝐜𝐭ú𝐚𝐧 𝐚𝐬í. 𝐓𝐚𝐦𝐛𝐢é𝐧 𝐝𝐢𝐦𝐞 𝐪𝐮𝐢é𝐧 𝐞𝐫𝐞𝐬*'
const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
const description = await luminsesi(query, username, prompt)
await conn.reply(m.chat, description, m, fake)
} catch {
await m.react(error)
await conn.reply(m.chat, '[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐌𝐢𝐳𝐮𝐤𝐢 𝐀𝐈 𝐧𝐨 𝐩𝐮𝐝𝐨 𝐚𝐧𝐚𝐥𝐢𝐳𝐚𝐫 𝐥𝐚 𝐢𝐦𝐚𝐠𝐞𝐧.', m, fake)}
} else {
if (!text) { return conn.reply(m.chat, `[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐈𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞, 𝐞𝐬𝐭𝐚 𝐯𝐞𝐳 𝐩𝐫𝐨𝐩𝐨𝐫𝐜𝐢𝐨𝐧𝐚𝐧𝐝𝐨 𝐮𝐧 𝐭í𝐭𝐮𝐥𝐨 𝐝𝐞 𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞.\n\n[✅] 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: */${command}* 𝐔𝐧 𝐚𝐦𝐨𝐫 𝐝𝐞𝐥 𝐚𝐲𝐞𝐫`, m)}
await m.react(rwait)
try {
const { key } = await conn.sendMessage(m.chat, {text: `❀ La AI de Benjamin está procesando tu petición, espera unos segundos.`}, {quoted: m})
const query = text
const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
const response = await luminsesi(query, username, prompt)
await conn.sendMessage(m.chat, {text: response, edit: key})
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, '✘ ChatGpT no puede responder a esa pregunta.', m, fake)}}}

handler.help = ['ai2', 'chatgpt2']
handler.tags = ['ia2']
handler.register = true
handler.command = ['ai2', 'ia2', 'chatgpt2']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
try {
const response = await axios.post('https://Luminai.my.id', {
content: content,
imageBuffer: imageBuffer 
}, {
headers: {
'Content-Type': 'application/json' 
}})
return response.data
} catch (error) {
console.error('Error:', error)
throw error }}
// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://Luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: false
})
return response.data.result
} catch (error) {
console.error('✘ Error al obtener:', error)
throw error }}
