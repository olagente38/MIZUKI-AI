// Powered By >> OfcKing

import axios from "axios";

let frasesEnviadas = [];
cons idchannel = "573012482597@s.whatsapp.net"

async function obtenerFraseAleatoria() {
  try {
    const response = await axios.get('https://api.adviceslip.com/advice');
    const frase = response.data.slip.advice;
    return frase;
  } catch (error) {
    console.error('Error al obtener la frase:', error);
    return null;
  }
}

async function enviarFrase() {
  const fraseAleatoria = await obtenerFraseAleatoria();

  if (!fraseAleatoria) {
    conn.reply(idchannel, '👏 No se pudo obtener una frase. Inténtalo de nuevo más tarde.', null, fake);
    return;
  }

  if (frasesEnviadas.length === 0 || !frasesEnviadas.includes(fraseAleatoria)) {
    frasesEnviadas.push(fraseAleatoria);
    conn.reply(idchannel, `${fraseAleatoria}`, null, fake);
  } else {
    conn.reply(idchannel, '✨️ Todas las frases ya se agotaron, se reiniciará donde se almacenan las frases oara que envie nuevamente las antiguas.', null, fake);
      frasesEnviadas = []; 
     }

// Enviar frase cada 1 minuto
setInterval(enviarFrase, 60000);