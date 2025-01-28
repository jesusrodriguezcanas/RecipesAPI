//este fichero solo sirve para crear palabra secreta

const crypto = require('crypto');

const secret = 'Full stack 16 Jesú';
const secret2 = 'Actualizo para que sea mas difisi';

const hash = crypto.createHmac('sha256', secret).update(secret2).digest("hex");


console.log(hash);
