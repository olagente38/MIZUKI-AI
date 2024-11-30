let handler = async (m, { conn, text, usedPrefix, command, args }) => {

let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'        
let template = (args[0] || '').toLowerCase() 
if (/comprar|prem1/i.test(command)) {
var tiempoPremium = 5 * text 
var tiempoDecretado = 5 * 1 
const gata = 15
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 300000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem2/i.test(command)) {
var tiempoPremium = 15 * text 
var tiempoDecretado = 15 * 1 
const gata = 35
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 900000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem3/i.test(command)) {
var tiempoPremium = 30 * text 
var tiempoDecretado = 30 * 1 
const gata = 25
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 1800000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem4/i.test(command)) {
var tiempoPremium = 1 * text 
var tiempoDecretado = 1 * 1 
const gata = 50
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 3600000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem5/i.test(command)) {
var tiempoPremium = 3 * text 
var tiempoDecretado = 3 * 1 
const gata = 40
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 10800000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem6/i.test(command)) {
var tiempoPremium = 7 * text 
var tiempoDecretado = 7 * 1 
const gata = 70
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 25200000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem7/i.test(command)) {
var tiempoPremium = 24 * text 
var tiempoDecretado = 24 * 1   
const gata = 65
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 86400000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (/prem8/i.test(command)) {
var tiempoPremium = 3 * text  
var tiempoDecretado = 3 * 1 
const gata = 80
let user = global.db.data.users[m.sender]

if (!text) return conn.reply(m.chat, `🍄 *Ingrese el tiempo de premium*\n\n🎟️ 1 = ${tiempoDecretado} Minutos\n${gata} Chocolates 🍫\n\n👏 Ejemplo: ${usedPrefix + command} 1`, m, rcanal)
if (isNaN(text)) return conn.reply(m.chat, `🌹 Solo se aceptan numeros.`, m, fake)
if (user.chocolates < gata) return conn.reply(m.chat, `🍄 No tienes suficiente chocolates para adquirir el premium.`, m, rcanal)
user.chocolates -= gata * text

var tiempo = 259200000 * text 
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true
const imgpre = [ 
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg', 
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'];

await conn.reply(m.chat, `╭┈︨︩︣︢─┉̱╍̄╼⪻⪼╾̄╍̱┅─︩︪︢︣┈╮\n┃ ⌍⛧⌎  ╌ 𝗨𝘀𝘂𝗮𝗿𝗶𝗼 ╌\n┃⋗ ${user.name}\n┃ ⌍⛧⌎  ╌ 𝗣𝗮𝗴𝗼 ╌\n┃⋗ ${gata * text} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲𝗻𝗶𝗮𝘀 ╌\n┃⋗ ${user.chocolates + gata} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗲 𝗾𝘂𝗲𝗱𝗮𝗻╌\n┃⋗ ${user.chocolates} Chocolates\n┃ ⌍⛧⌎  ╌ 𝗧𝗶𝗲𝗺𝗽𝗼 ╌\n┃⋗ ${tiempoPremium} min\n╰┈︨︩︣︢─┉̱╍̄╼⪻〄⪼╾̄╍̱┅─︩︪︢︣┈╯\n\n> ⌜★⌟  Nota:\n_Ahora tiene Premium por lo tanto no va tener límites._`, fkontak, { mentions: [aa,] })}

if (command) {
switch (template) {                
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
await m.reply('Hola')

break        

}}}
handler.help = ['serprem']
handler.tags = ['rpg']
handler.command = ['comprar', 'prem1', 'prem2', 'prem3', 'prem4', 'prem5', 'prem6', 'prem7', 'prem8', 'premium', 'vip', 'prem', 'pass', 'pase']

export default handler