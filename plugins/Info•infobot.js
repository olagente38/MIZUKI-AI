import { generateWAMessageFromContent } from "@whiskeysockets/baileys"
import { cpus as _cpus, totalmem, freemem } from 'os'
// import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })

  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
  let infobt = `★¸.•☆•.¸★ 𝐈𝐍𝐅𝐎 | 𝐌𝐈𝐙𝐔𝐊𝐈 ★⡀.•☆•.★
  
[🪄] 𝐂𝐇𝐀𝐓𝐒 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎 » ${groupsIn.length}
[📬] 𝐆𝐑𝐔𝐏𝐎𝐒 𝐔𝐍𝐈𝐃𝐎𝐒 » ${groupsIn.length}
[🔖] 𝐆𝐑𝐔𝐏𝐎𝐒 𝐀𝐁𝐀𝐍𝐃𝐎𝐍𝐀𝐃𝐎𝐒 » ${groupsIn.length - groupsIn.length}
[🔐] 𝐂𝐇𝐀𝐓𝐒 𝐏𝐑𝐈𝐕𝐀𝐃𝐎𝐒 » ${chats.length - groupsIn.length}
[📝] 𝐓𝐎𝐓𝐀𝐋 𝐂𝐇𝐀𝐓𝐒 » ${chats.length}
[🧾] 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐒 » ${totalreg}
[⏰] 𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎 » ${uptime}
`
const prep = generateWAMessageFromContent(m.chat, { "orderMessage": { "orderId":"6288215463787", "itemCount": 2022, "message": infobt, "orderTitle": packname, "footerText": "Yaemori Bot - MD", "token": "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==", "thumbnail": imagen1, "surface": "CATALOG" } }, { quoted: fkontak })
await conn.relayMessage(m.chat, prep.message,  { messageId: prep.key.id })

}
handler.help = ['info']
handler.tags = ['info']
handler.command = ['info', 'infobot', 'botinfo']

export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
