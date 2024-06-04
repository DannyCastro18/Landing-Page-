 // crear Componente 
function Navbar(){
    return (
    <>
    <nav className="navbar navbar-expand-lg bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}

function Contenido(){
    return ( //para mostrar varias líneas se agrega (<></>)
    <>
    <section className = 'container'> 
    <main className='img1'>
    <h1 >Crea arte con IA</h1>
    <h5>Genera tus propias imagenes utilizando Inteligencia Artificial</h5 >
    <input type="text" name="q" placeholder="Buscar..."></input>
    <button type="submit">Buscar</button>
    </main>
    </section>
    </>)
}

const container = document.getElementById('root');  //capturar nodo 
        const root = ReactDOM.createRoot(container);
            root.render( 
                <>
                    <Navbar />
                    <Contenido/>

                </>
            );
           

   