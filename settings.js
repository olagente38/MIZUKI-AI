import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +51939249284
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['51939249284', '✅ 𝐒𝐎𝐏𝐎𝐑𝐓𝐄 𝐗 𝐕𝐄𝐍𝐓𝐀𝐒', true],
   ['51939249284'],
   ['51939249284'],
   ['51939249284'],
   ['51939249284']
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = 'Spectrum Ai'
global.namebot = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.sessions = 'MiniSession'
global.jadi = 'MiniJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.botname = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.wm = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.author = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.dev = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'
global.textbot = '·.★·.·´¯`·.·👑 𝐒𝐏𝐄𝐂𝐓𝐑𝐔𝐌 𝐀𝐈 👑·.·´¯`·.·★.·'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./src/img/Menu.jpg')
global.imagen2 = fs.readFileSync('./src/img/Menu2.jpg')
global.imagen3 = fs.readFileSync('./src/img/Menu3.jpg')
global.welcome = fs.readFileSync('./src/img/welcome.jpg')
global.adios = fs.readFileSync('./src/img/adios.jpg')
global.catalogo = fs.readFileSync('./src/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./src/img/miniurl.jpg')
global.avatar = fs.readFileSync('./src/img/avatar_contact.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.grupo2 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.grupo3 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.channel = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.channel2 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.channel3 = 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u'
global.md = 'https://github.com/SpectrumOfc' 
global.yt = 'https://www.youtube.com/'
global.tiktok = 'https://tiktok.com/'
global.correo = 'cuentaoficialspectrum@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '❀ sᥙ́⍴ᥱr ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍 ☄︎', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363316264159575@newsletter',
ch2: '120363316264159575@newsletter',
ch3: '120363316264159575@newsletter',
ch4: '120363316264159575@newsletter',
ch5: '120363316264159575@newsletter',
ch6: '120363316264159575@newsletter',
ch7: '120363316264159575@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
