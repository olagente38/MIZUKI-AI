import fetch from 'node-fetch'
import qrcode from 'qrcode'

let subBotCodes = {} // Objeto para almacenar los códigos generados y su estado

// Generar un código de 8 dígitos
function generateSubBotCode() {
    return Math.floor(10000000 + Math.random() * 90000000).toString()
}

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let option = args[0]

    if (!option) {
        await m.reply(`Por favor, proporciona una opción válida: *${usedPrefix}${command} [codigo|qr]*`)
        return
    }

    if (option.toLowerCase() === 'codigo') {
        // Generar un código de 8 dígitos
        let code = generateSubBotCode()
        subBotCodes[code] = true // Marcar el código como válido y no utilizado

        await m.reply(`Tu código de vinculación es: ${code}`)
    } else if (option.toLowerCase() === 'qr') {
        // Generar un código QR
        let code = generateSubBotCode()
        subBotCodes[code] = true // Marcar el código como válido y no utilizado

        qrcode.toDataURL(code, (err, url) => {
            if (err) {
                console.error(err)
                m.reply('Hubo un problema al generar el código QR. Por favor, intenta nuevamente más tarde.')
                return
            }

            let caption = `Escanea este código QR para vincular:\nCódigo: ${code}`
            conn.sendMessage(m.chat, { url }, 'image', { caption, quoted: m })
        })
    } else {
        await m.reply(`Opción no válida. Usa *${usedPrefix}${command} [codigo|qr]*`)
    }
}

// Comando para validar el código y ser subbot
let validateHandler = async (m, { conn, args }) => {
    if (!args[0]) {
        await m.reply('Por favor, proporciona un código de 8 dígitos para ser subbot.')
        return
    }

    let code = args[0]

    if (code.length !== 8 || !/^\d+$/.test(code)) {
        await m.reply('El código debe ser un número de 8 dígitos.')
        return
    }

    if (!subBotCodes[code]) {
        await m.reply('Código inválido o ya utilizado.')
        return
    }

    // Marcar el código como utilizado
    subBotCodes[code] = false

    // Añadir el usuario como subbot
    let user = m.sender
    if (!global.subBots) global.subBots = []
    global.subBots.push(user)

    await m.reply(`¡Felicidades! Ahora eres un subbot. 🎉`)
}

handler.help = ['vincular [codigo|qr]']
handler.tags = ['tools']
handler.command = ['vincular']
handler.group = true
export default handler