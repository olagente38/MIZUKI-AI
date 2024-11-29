import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let MessageType = (await import('@whiskeysockets/baileys')).default
let handler = async (m, { conn}) => {
try {   
if (!m.sender) return m.reply(`🚩 Etiqueta o menciona a alguien`)
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let name = conn.getName(m.sender)
let name2 = conn.getName(m.sender)
let { url } = json
let stiker = await sticker(null, url, `${name} le dio besos a ${name2}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.help = ['kiss']
handler.tags = ['fun']
handler.command = ['kiss', 'skiss', 'kis', 'besos', 'beso', 'besar', 'besando']
export default handler