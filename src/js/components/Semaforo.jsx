import React, { useState } from "react";
import '/workspaces/JCM96-Semaforo/src/styles/index.css'; // Importamos nuestros nuevos estilos

const Semaforo = () => {
    // 1 estado para saber qué luz está activa.
    // 'red' por defecto.
    const [luzActiva, setLuzActiva] = useState('red');

    return (
        <div id="Semaforo">
            <div className="semaforo-container">
                {/* Luz Roja */}
                <div
                    //  clase dinámica
                    className={`luz roja ${luzActiva === 'red' ? 'glow' : ''}`}
                    // 3. Al hacer clic, cambia el estado a 'red'
                    onClick={() => setLuzActiva('red')}
                >
                </div>

                {/* Luz Amarilla */}
                <div
                    className={`luz amarilla ${luzActiva === 'yellow' ? 'glow' : ''}`}
                    onClick={() => setLuzActiva('yellow')}
                >
                </div>

                {/* Luz Verde */}
                <div
                    className={`luz verde ${luzActiva === 'green' ? 'glow' : ''}`}
                    onClick={() => setLuzActiva('green')}
                >
                </div>
            </div>
        </div>
    );
}

export default Semaforo;