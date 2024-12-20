import axios from 'axios'
import fetch from 'node-fetch'
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
  const username = `${conn.getName(m.sender)}`
  const basePrompt = `Tu nombre es Mizuki AI y parece haber sido creado por SpectrumOfc. Tu versión actual es 2.0.7, Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertida, y te encanta aprender. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`

  if (isQuotedImage) {
    const q = m.quoted
    const img = await q.download?.()
    if (!img) {
      console.error('[🚨] 𝐄𝐫𝐫𝐨𝐫: 𝐍𝐨 𝐢𝐦𝐚𝐠𝐞 𝐛𝐮𝐟𝐟𝐞𝐫 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞.')
      return conn.reply(m.chat, '*[🚨] 𝐒𝐨𝐥𝐢𝐜𝐢𝐭𝐮𝐝 𝐢𝐧𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚. 𝐌𝐢𝐳𝐮𝐤𝐢 𝐀𝐈 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐚 𝐢𝐦á𝐠𝐞𝐧𝐞𝐬.*', m, fake)
    }

    try {
      const model = await mobilenet.load()
      const tensor = tf.node.decodeImage(img)
      const predictions = await model.classify(tensor)
      const description = predictions.map(p => `${p.className}: ${p.probability.toFixed(2)}`).join('\n')
      
      const responsePrompt = `${basePrompt}. La imagen que se analiza contiene: ${description}`
      const response = await luminsesi('[🚨] *Descríbeme la imagen y detalla por qué actúan así. También dime quién eres*', username, responsePrompt)

      await conn.reply(m.chat, response, m, fake)
    } catch (error) {
      console.error('Error:', error)
      await conn.reply(m.chat, '[🚨] Solicitud incompleta. Mizuki AI no pudo analizar la imagen.', m, fake)
    }
  } else {
    if (!text) {
      return conn.reply(m.chat, `[🚨] Solicitud incompleta. Intente nuevamente, esta vez proporcionando un mensaje de consulta.\n\n[✅] Ejemplo: */${command}* *¿Cómo estás hoy?*`, m)
    }

    await m.react(rwait)
    try {
      const { key } = await conn.sendMessage(m.chat, {text: `[🚨] Solicitud en proceso. Mizuki AI está procesando tu petición, espera unos segundos.`}, {quoted: m})
      const query = text
      const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
      const response = await luminsesi(query, username, prompt)
      await conn.sendMessage(m.chat, {text: response, edit: key})
      await m.react(done)
    } catch {
      await m.react(error)
      await conn.reply(m.chat, '[🚨] Mizuki AI no puede responder a esa pregunta.', m, fake)
    }
  }
}

handler.help = ['ai2', 'chatgpt2']
handler.tags = ['ia2']
handler.register = true
handler.command = ['ai2', 'ia2', 'chatgpt2']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

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
    throw error
  }
}
