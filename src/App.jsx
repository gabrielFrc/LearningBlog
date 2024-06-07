import './App.css';
import React, { useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';

function App() {
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function (letra, i) {

      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 75 * i)

    });
  }
  useEffect(() => {
    const titulo = document.querySelector('#landpage-text');
    typeWrite(titulo);
  }, [])

  return (
    <div className="App">
      <Navigation />
      <main>
        <div id='landpage-container'>
          <h1 id='landpage-text'>Bem vindo ao meu blog de estudos!</h1>
        </div>
        <div id='answers'>
          <div>
            <div className='title-answers'>
              <h3>Planejamentos</h3>
            </div>
            <div className='text-answers'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a cumque vel quod non qui aperiam ad maiores laudantium animi soluta, ratione ducimus sapiente totam harum esse, voluptas est consequatur!</p>
            </div>
          </div>
          <div>
            <div className='title-answers'>
              <h3>Proposta</h3>
            </div>
            <div className='text-answers'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quia ut, ab repellat animi numquam deserunt dolor magni accusamus corporis quos temporibus! Aliquid tenetur ratione pariatur dolores dicta at quia.</p>
            </div>
          </div>
          <div>
            <div className='title-answers'>
              <h3>Por que um blog?</h3>
            </div>
            <div className='text-answers'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sed adipisci unde ea, deleniti voluptate maxime necessitatibus reiciendis praesentium nesciunt architecto voluptatum accusantium hic vel recusandae enim voluptas minus error?</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
