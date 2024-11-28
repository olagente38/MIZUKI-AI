/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El codigo de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
*/

const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import('@whiskeysockets/baileys'));
import qrcode from "qrcode"
import NodeCache from "node-cache"
import fs from "fs"
import path from "path"
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'
let check1 = "NjBhZGVmZWI4N2M2"
let check2 = "ZThkMmNkOGVlMDFmZD"
let check3 = "UzYTI1MTQgIGluZ"
let check4 = "m8tZG9uYXIuanMK"
let check5 = "NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO"
let check6 = "DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz"
let check8 = "NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo"
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = ""
let drm2 = ""
let rtx = '‿︵ʚɞ『☁️𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿☁️』ʚɞ‿︵\n\n🌸 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗦𝗘𝗥 𝗦𝗨𝗕 𝗕𝗢𝗧 🌸\n\n*✨️ Con otro celular o en la PC escanea este QR para convertirte en un Sub Bot*\n\n`1` » Haga clic en los tres puntos en la esquina superior derecha\n\n`2` » Toca dispositivos vinculados\n\n`3` » Escanee este codigo QR para iniciar sesión\n\n🌻 *¡Este código QR expira en 45 segundos!*\n\n*👑 Jadibot, Hecho por @Aiden_NotLogic 🙌*'
let rtx2 = '‿︵ʚɞ『☁️𝙔𝙖𝙚𝙢𝙤𝙧𝙞𝘽𝙤𝙩-𝙈𝘿☁️』ʚɞ‿︵\n\n🌸 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗦𝗘𝗥 𝗦𝗨𝗕 𝗕𝗢𝗧 🌸\n\n*✨️ Usa este Código para convertirte en un Sub Bot*\n\n`1` » Haga clic en los tres puntos en la esquina superior derecha\n\n`2` » Toca dispositivos vinculados\n\n`3` » Selecciona Vincular con el número de teléfono\n\n`4` » Escriba el Código\n\n🌻 *¡Este código solo funciona en el número que lo solicitó!*\n\n*👑 Jadibot, Hecho por @Aiden_NotLogic 🙌*'

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd) return conn.reply(m.chat, ``, m, rcanal)
let parentw = conn
//if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `「💭」Solo puedes usar este comando en el bot principal.\n\n• Wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`, m, rcanal) 
const mcode = args[0] && /(--code|code)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false

//let id = m.sender
let txtCode, codeBot, txtQR
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let user = global.db.data.users[m.sender]
let id = `${who.split`@`[0]}`  //parentw.getName(who)
if (mcode) {
args[0] = args[0].replace(/^--code$|^code$/, "").trim()
if (args[1]) args[1] = args[1].replace(/^--code$|^code$/, "").trim()
if (args[0] == "") args[0] = undefined
}
if (!fs.existsSync(`./${jadi}/` + id)){
fs.mkdirSync(`./${jadi}/` + id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync(`./${jadi}/` + id + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

if (fs.existsSync(`./${jadi}/` + id + "/creds.json")) {
let creds = JSON.parse(fs.readFileSync(`./${jadi}/` + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync(`./${jadi}/` + id + "/creds.json")
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let user = global.db.data.users[m.sender]
let id = `${who.split`@`[0]}`  //parentw.getName(who)
if (!fs.existsSync(`./${jadi}/` + id)){
fs.mkdirSync(`./${jadi}/` + id, { recursive: true });
}
args[0] ? fs.writeFileSync(`./${jadi}/` + id + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, `\t`)) : ""

//console.info = () => {}
let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState(`./${jadi}/` + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version: [2, 3000, 1015901307],
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['YaemoriBot (Sub Bot)', 'Chrome','2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'YaemoriBot-MD',
}}} 

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) {
txtQR = await parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + '\n' + drmer.toString("utf-8")}, { quoted: m})} 
if (qr && mcode) {
txtCode = await parentw.sendMessage(m.chat, {text : rtx2 + '\n' + drmer.toString("utf-8")}, { quoted: m })
await sleep(3000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
codeBot = await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
await fs.unlinkSync(`./${jadi}/` + id + "/creds.json")
//thank you aiden_notLogic
return await m.reply(`🚩 Reenvia nuevamente el comando.`)
}

if (conn.user && dataconst[conn.user.id.split('@')] == 3) {
return m.reply('🚩 Se ha alcanzado el limite de reconexiones, intenta mas tarde.')
} if (reason === DisconnectReason.badSession) {
return await m.reply(`🚩 La conexión se ha cerrado, deberás conectarse manualmente.`)
} else if (reason === DisconnectReason.connectionClosed) {
if (conn.fstop) {
return m.reply('🌻 El bot se ha apagado.')
} if (!conn.fstop) {
return m.reply('🍄 La conexión se cerro, se intentará reconectar automaticamente...*\n' + dataconst[conn.user.id.split('@')] + '/3')
} if (!conn.fstop) {
await reloadHandler(true).catch(console.error)
}} else if (reason === DisconnectReason.connectionLost) {
return m.reply('🍄 La conexión se perdió, se intentará reconectar automaticamente*\n' + dataconst[conn.user.id.split('@')] + '/3')
await reloadHandler(true).catch(console.error)
// } else if (reason === DisconnectReason.connectionReplaced) {
// return m.reply('🚩 Su conexión se se reemplazó, deberás conectarse con: ' + usedPredix + command)
} else if (reason === DisconnectReason.loggedOut) {
return m.reply(`🚩 *La conexión se ha cerrado, tendras que volver a conectarse usando:*\n!deletesesion (Para borrar los datos y poder volver a solicitar el QR o el código de emparejamiento`)
} else if (reason === DisconnectReason.restartRequired) {
await reloadHandler(true).catch(console.error)
} else if (reason === DisconnectReason.timedOut) {
return m.reply('🍄 La conexión se agotó, se intentará reconectar automaticamente.\n' + dataconst[conn.user.id.split('@')] + '/3')
await reloadHandler(true).catch(console.error)
} else {
console.log( `\n⚠️❗ Razon de la desconexión desconocida: ${reason || ''} >> ${connection || ''}`)
}
let index = global.conns.indexOf(conn)
if (index < 0) return console.log("no se encontro")
delete global.conns[index]
global.conns.splice(index, 1)
}
if (global.db.data == null) loadDatabase()
if (connection == 'open') {
conn.isInit = true
global.conns.push(conn)
await joinChannels(conn)
await parentw.sendMessage(m.chat, { text: args[0] ? `🍄 Reconexión con exito
` : `🚩 Conectado con éxito!! Puede conectarse usando: ` + (usedPrefix + command) + '*' }, { quoted: m });
if (connection === "open") {
dataconst[conn.user.id.split('@')] = 1
parentw.sendMessage(m.chat, { text: `⚪ *Está conectado(a)!! Por favor espere se está cargando los mensajes...*\n\n♻️ *Opciones Disponibles:*\n*» .pausarai _(Detener la función Sub Bot)_*\n*» .deletesession _(Borrar todo rastro de Sub Bot)_*\n*» .serbot _(Nuevo código QR o Conectarse si ya es Sub Bot)_*` }, { quoted: m })
return console.log(await reloadHandler(false).catch(console.error))
}
/*let ppch = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let chtxt = `👤 *Dueño* » ${m.pushName || 'Anónimo'}
🗃️ *Registrado* » ${user.registered ? `Si\n✅ *Verificación* » ${user.name}`: 'No'}
🔑 *Método de conexión* » ${mcode ? 'Código de 8 dígitos' : 'Código QR'}
💻 *Browser* » ${mcode ? 'Ubuntu' : 'Chrome'}
⭐ *Versión del bot* » ${vs}
💫 *Versión sub bot* » ${vsJB}

> *¡Conviértete en sub-bot ahora!*
wa.me/${who.split`@`[0]}?text=.serbot%20code`.trim()
await parentw.sendMessage(global.channelid, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢́𝗡 🔔 】",
body: '🥳 ¡Nuevo Sub-Bot conectado!',
thumbnailUrl: ppch,
sourceUrl: redes,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })*/
//await parentw.sendMessage(m.chat, {text : `🚩 Cargando los mensajes, espere un momento...`}, { quoted: m })
if (!args[0]) parentw.sendMessage(m.sender, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync(`./${jadi}/` + id + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })    
//await sleep(5000)
//if (!args[0]) parentw.sendMessage(m.chat, {text: usedPrefix + command + " " + Buffer.from(fs.readFileSync(`./${jadi}/` + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
let index = global.conns.indexOf(conn)
if (index < 0) returna
delete global.conns[index]
global.conns.splice(index, 1)
}
}, 60000)

let handler = global.handler;
let reloadHandler = async function (restatConn) {
try {
const newHandler = await import('../handler.js?update=' + Date.now()).catch(console.error);
if (Object.keys(newHandler || {}).length) handler = newHandler;
} catch (err) {
console.error(err)
}
if (restatConn) {
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}
if (conn.user && conn.user.id && !dataconst[conn.user.id.split('@')]) {
dataconst[conn.user.id.split('@')] = 0
}
if (conn.user && conn.user.id && dataconst[conn.user.id.split('@')] && restatConn) {
dataconst[conn.user.id.split('@')]++
}
if (!isInit) {
conn.ev.off("messages.upsert", conn.handler)
conn.ev.off("connection.update", conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensajes entrantes:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `🚩 Omitiendo mensajes en espera.`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.handler = handler.handler.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)
conn.ev.on("messages.upsert", conn.handler)
conn.ev.on("connection.update", conn.connectionUpdate)
conn.ev.on("creds.update", conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})
} 
handler.help = [`serbot`, `serbot code`]
handler.tags = [`serbot`]
handler.command = ['jadibot', 'serbot']
//handler.private = true
//handler.register = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}

async function joinChannels(conn) {
for (const channelId of Object.values(global.ch)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}