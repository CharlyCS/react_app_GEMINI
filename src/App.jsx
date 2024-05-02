import { useState } from "react"

function App() {
  const [error, setError] = useState("")
  return (
    <>
      <div className="app">
        <section className='section1'>
          <p>Escribe aqui <button className="buscar">Enviar</button> </p>
          <div className="input">
            <input 
              value={""}
              placeholder="Escribe aqui"
              onChange={""}
            />
            {!error && <button>Ask me</button>}
            {error && <button>Clear</button>}
          </div>
          {error && <button>Clear</button>}
          <div className="busqueda">
            <div key="">
              <p className="respuesta"></p>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
