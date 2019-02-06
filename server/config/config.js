// =============================
// Puerto de coneccion al Server
//=============================
process.env.PORT = process.env.PORT || 3000;


// =============================
// Entorno
//=============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =============================
// Base de Datos
//=============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe_user:cafe_user123456@ds125385.mlab.com:25385/cafe_udemy';
}

process.env.URLDB = urlDB;