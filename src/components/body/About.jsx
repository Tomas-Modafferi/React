import imagenContacto from '../../assets/img/mapa.jpg'

import React from 'react'

const About = () => {
  return (
        <div>
            <p className="parrafito">Somos un emprendimiento de Juegos de Play 4 ubicado en Zona Norte, Vicente Lopez.
            </p>
            <p className="parrafo">
            Tenemos los mejores precios del mercado y hacemos envios en el dia!
            </p>
            <div className='mapa'>
            <img src={imagenContacto} alt="Contacto" className='mapa'/>
            </div>
            
       </div>
    )
}
  

export default About