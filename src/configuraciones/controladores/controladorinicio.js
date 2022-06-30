
exports.EjemploPost = (req, res) => {
    
    // const { Usuario, Contrasena } = req.body;
    const Usuario2 = req.body.Usuario;
    const Contrasena2 = req.body.Contrasena;
     console.log(Usuario2);
     console.log(Contrasena2);
     const msj = {
         mensaje: "Ninguno"
 
     };
     if(!Usuario2 || !Contrasena2){
         msj.mensaje = 'Debe enviar los datos completos';
     }
     else {
         msj.mensaje = 'Peticion procesada correctamente';
     }
     res.json(msj); 
 };