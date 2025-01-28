//este fichero solo sirve para crear palabra secreta

const crypto = require('crypto');

const secret = 'Full stack 16 Jesú';
const secret2 = 'Actualizo para que sea mas difisil';

const hash = crypto.createHmac('sha256', secret).update(secret2).digest("hex");


console.log(hash);

//5980f7324d51081972c07e4a510437887b2a177637cf449f40eb771bd6f72f71

//d1dee0aa63bb8bfa6db518ebc9599f050fbac03f9c6d56cb4ec1f8bcd645d24d