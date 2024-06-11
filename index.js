 // crear Componente 
function Navbar(){
    return (
    <>
      <nav className="bg-slate-950 shadow-md fixed w-full ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-12 w-auto" src="https://img.icons8.com/?size=100&id=2f8efjyRWNVz&format=png&color=000000" alt="Your Company"></img>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                
                  <a href="#Home" className="rounded-md bg-indigo-300 px-3 py-2 text-sm font-medium text-white" aria-current="page">Home</a>
                  <a href="#Function" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Function</a>
                  <a href="#Blog" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Blog</a>
                  <a href="#Characteristics" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Characteristics</a>
                  <a href="#Contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>)
}

function Contenido(){
    return ( //para mostrar varias líneas se agrega (<></>)
    <>
    <section classNameName = 'container ' id='Home'> 
      <main className='img1 text-center  '>
        <section className='flex items-center justify-center min-h-full flex-col '>
          <h1 className='text-5xl text-slate-50 m-1'>AI Art Generator</h1>
          <h5 className='text-slate-50 m-1'>Generate your own images using Artificial Intelligence</h5 >
          <input className='m-1 w-96 h-10 p-3 rounded-md' type="text" name="q" placeholder="Search..."></input>
          <button className=' mt-3 rounded-md bg-indigo-300 px-3 py-2 text-sm font-medium text-white' type="submit ">Generate</button>
          <section className='mt-6'>
            <button className='border-solid border-2 m-2 border-white rounded-md px-3 py-2 text-sm font-medium text-white' type="submit ">Creative</button>
            <button className='border-solid border-2 m-2 border-white rounded-md  px-3 py-2 text-sm font-medium text-white' type="submit ">Futuristic</button>
            <button className='border-solid border-2 m-2  border-white rounded-md px-3 py-2 text-sm font-medium text-white' type="submit ">Gothic</button>
            <button className='border-solid border-2 m-2  border-white rounded-md px-3 py-2 text-sm font-medium text-white' type="submit ">Abstract</button>
            <button className='border-solid border-2 m-2  border-white rounded-md px-3 py-2 text-sm font-medium text-white' type="submit ">Realism</button>
          </section>  
        </section>
      </main>
    </section>
    </>)
}

function Funcion(){
  return ( 
  <>
  <article id='Function'>
    <h1 className='text-5xl text-center mt-6'>How it works?</h1>
    <h2 className='text-center mt-6'>Creativity at your fingertips!</h2>
  </article>

  <section className='border-solid border-black m-6 flex flex-row space-x-32 justify-center' >
    <article className='w-80 text-center'>
      <img className='w-80 rounded-md' src='https://ideogram.ai/assets/image/lossless/response/MIokIFJHTyG2b00W1hEa3Q'>
      </img>
      <h2 className='text-2xl'>Provide brief information</h2>
      <h4>Transform your ideas, styles, colors, and themes to create unique and stunning artworks.</h4>
    </article>

    <article className='w-80 text-center'>
      <img className='w-80 rounded-md' src='https://ideogram.ai/assets/image/balanced/response/Ve6JUISTQLa6GzlRGCt1Ug'>
      </img>
      <h2 className='text-2xl'>Choose your concept</h2>
      <h4>AI-Powered Custom Wallpapers and Art</h4>
    </article>

    <article className='w-80 text-center'>
      <img className='w-80 rounded-md' src='https://ideogram.ai/assets/image/lossless/response/p1C9sgPJTtWmykXqY1G12w'>
      </img>
      <h2 className='text-2xl '>Quick image creation</h2>
      <h4>Express Image Creation.</h4>
    </article>
  </section>
   
  </>
)}

function Carrusel(){
  return ( 
  <>
    <section className='flex flex-row h-96 mt-9 items-center' id='Blog'>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/nMkB_ar-RfyvQJdesrpAhQ'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/533GecA2QKqSgc80pcke0Q'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/AT44CUWkQlqN9voVeNM72g'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/E3LAWIZ_S7y-WKNtV_vv1g'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/K12W2M4QQ36zu_PjBX7-zQ'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/v9Qw71ZDTyCLP-bJRhTh5w'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/balanced/response/7NblhkJBREumKc41ewxXOg'></img>
      </article>
      <article className=''>
        <img className='' src='https://ideogram.ai/assets/image/lossless/response/NTegzll1Q6CP4_vWNPc5bA'></img>
      </article>
    </section>
  </>
  )}

  function Enfoque(){
    return ( 
    <>
    <article className='mt-15 ' id='Characteristics'>
      <h2 className='mb-6'>Creative Approach</h2>
      <h1 className='text-5xl mb-6  '>AI powered-Design</h1>
    </article>
    <section className='w-72 m-1 mt-8 flex  space-x-3 '>
      <section className='border-solid border-2 border-black p-4 '>
        <article className='w-72 text-center'>
          <img className='w-23 inline-flex m-0 ' src='https://img.icons8.com/?size=100&id=114894&format=png&color=000000'>
          </img>
          <h2 className='text-2xl '>Intelligent</h2>
          <h4>Analyzes patterns, textures, and compositions to create an infinite variety of images ranging from the abstract to the hyperrealistic.</h4>
        </article>
      </section>
      <section className='border-solid border-2 border-black p-4 '>
        <article className='w-72 text-center'>
          <img className='w-23 inline-flex' src='https://img.icons8.com/?size=100&id=HWvGM2ovOHDt&format=png&color=000000'>
          </img>
          <h2 className='text-2xl '>Visionary</h2>
          <h4>As AI processes more information and receives feedback, its ability to generate visual content improves constantly, offering a window to a world of limitless aesthetic possibilities.</h4>
        </article>
      </section>
      <section className='border-solid border-2 border-black p-4'> 
        <article className='w-72 text-center'>
          <img className='w-23 inline-flex' src='https://img.icons8.com/?size=100&id=121694&format=png&color=000000'>
          </img>
          <h2 className='text-2xl '>Creative</h2>
          <h4>From inspiring wallpapers to digital art pieces, each creation is the result of a creative process that pushes the boundaries of imagination and redefines computer-generated art.</h4>
        </article>
      </section>
      <section className='border-solid border-2 border-black p-4'>
        <article className='w-72 text-center'>
          <img className='w-23 inline-flex' src='https://img.icons8.com/?size=100&id=117415&format=png&color=000000'>
          </img>
          <h2 className='text-2xl '>Adjustable</h2>
          <h4>You are offered complete control over every aspect of the creation, allowing you to customize every detail according to your creative vision.</h4>
        </article>
      </section>
    </section>
    </>
    )}

    function Footer(){
      return ( 
      <>
      <section className='flex flex-row h-96 bg-black mt-9 items-center justify-evenly' id='Contact'>
        <article className='flex  space-x-3 '>
          <img className='w-24 h-24'src='https://img.icons8.com/?size=100&id=bVGqATNwfhYq&format=png&color=000000'></img>
        </article>
        <article className='flex  space-x-3 '>
          <img className='w-24 h-24'src='https://img.icons8.com/?size=100&id=ij6f4GUUwLE8&format=png&color=000000'></img>
        </article>
        <article className='flex  space-x-3 '>
          <img className='w-24 h-24'src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'></img>
        </article>
        <article className='flex  space-x-3 '>
          <img className='w-24 h-24'src='https://img.icons8.com/?size=100&id=1IYrDBzxNHjL&format=png&color=000000'></img>
        </article>
        <article className='flex  space-x-3 '>
          <img className='w-24 h-24'src=' https://img.icons8.com/?size=100&id=118640&format=png&color=000000'></img>
        </article>
      </section>

      </>
      )}

const container = document.getElementById('root');  //capturar nodo 
        const root = ReactDOM.createRoot(container);
            root.render( 
                <>
                    <Navbar />
                    <Contenido/>
                    <Funcion/>
                    <Carrusel/>
                    <Enfoque/>
                    <Footer/>

                </>
            );
           

   