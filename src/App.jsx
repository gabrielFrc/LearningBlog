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
              <h3>Proposta</h3>
            </div>
            <div className='text-answers'>
              <p>O objetivo deste website é armazenar e potencializar meus estudos WEB ou de outras áreas como por exemplo game developer. Existe certas maneiras de se aprender um conteúdo e o quanto tempo ele vai residir na sua memória, separando as em curta, média e longa duração. </p>
            </div>
          </div>
          <div>
            <div className='title-answers'>
              <h3>Por que um blog?</h3>
            </div>
            <div className='text-answers'>
              <p>O ato de ensinar é uma das ferramentas que ajudam na memória de longa duração, com isso planejo guardar aqui meus conhecimentos como se estivesse ensinando a algum público ou para mim mesmo caso o conteúdo seja esquecido.</p>
            </div>
          </div>
          <div>
            <div className='title-answers'>
              <h3>Benificios</h3>
            </div>
            <div className='text-answers'>
              <p>Com esse website posso tanto como aprender mais sobre um assunto, me motivar a pesquisar mais afundo por questões didáticas e possivelmente ajudar colegas, amigos e a comunidade em si.</p>
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
