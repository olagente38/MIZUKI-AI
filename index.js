import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';
import chalk from 'chalk';

// Imprime el mensaje de inicio
console.log('\n✰ Iniciando Mizuki-Ai ✰');

// Directorio actual del archivo
const __dirname = dirname(fileURLToPath(import.meta.url));

// Cargar 'require' y obtener el archivo 'package.json'
const require = createRequire(import.meta.url);
const { name, description, author, version } = require(join(__dirname, './package.json'));

// Configuración de la librería 'cfonts'
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

// Mostrar el logo de inicio con 'cfonts'
say('Mizuki\nAi', {
    font: 'block',
    align: 'center',
    colors: ['red']
});
say(`Multi Device`, {
    font: 'chrome',
    align: 'center',
    colors: ['red']
});
say(`Developed By • OfcKing`, {
    font: 'console',
    align: 'center',
    colors: ['yellow']
});

var isRunning = false;

// Función para arrancar el bot
function start(file) {
    if (isRunning) return;
    isRunning = true;

    let args = [join(__dirname, file), ...process.argv.slice(2)];

    say([process.argv[0], ...args].join(' '), {
        font: 'console',
        align: 'center',
        colors: ['green']
    });

    // Configuración del cluster
    setupMaster({
        exec: args[0],
        args: args.slice(1),
    });

    let p = fork();
    
    // Manejadores de mensajes
    p.on('message', data => {
        switch (data) {
            case 'reset':
                p.process.kill();
                isRunning = false;
                start.apply(this, arguments);
                break;
            case 'uptime':
                p.send(process.uptime());
                break;
        }
    });

    // Manejo del evento 'exit'
    p.on('exit', (_, code) => {
        isRunning = false;
        console.error('🚩 Error:\n', code);
        process.exit();
        if (code === 0) return;

        watchFile(args[0], () => {
            unwatchFile(args[0]);
            start(file);
        });
    });

    // Configuración de 'yargs' para la entrada de comandos
    let opts = yargs(process.argv.slice(2)).exitProcess(false).parse();

    // Si no hay test, se activa la interacción de la línea de comandos
    if (!opts['test'])
        if (!rl.listenerCount()) rl.on('line', line => {
            p.emit('message', line.trim());
        });
}

// Manejo de advertencias
process.on('warning', (warning) => {
    if (warning.name === 'MaxListenersExceededWarning') {
        console.warn('🚩 Se excedió el límite de Listeners en:');
        console.warn(warning.stack);
    }
});

// Arrancar el bot
start('start.js');
