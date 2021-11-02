// import logo from "../../assets/tilter.gif";
// import start from "../../assets/pressStart.gif";
// import som from './assets/tilter_ambiente.mp3';
import logo from '../../assets/logoJussiVectorGreen.svg';
import search from '../../assets/search.svg';
import cart from '../../assets/shopping-cart.svg';
import produto1 from '../../assets/produto1.png';
import produto2 from '../../assets/produto2.png';
import produto3 from '../../assets/produto3.png';
import seta from '../../assets/seta.png';
import brastemp from '../../assets/logo-brastemp.png';
import consul from '../../assets/logo-consul.png';
import consul2 from '../../assets/logo-consul2.png';
import thebar from '../../assets/logo-thebar.png';
import jussiimage from '../../assets/image-jussi.png';
import wpcompany from '../../assets/wppcompany.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

function Home() {

  

  return (
    <div>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
    <title>Jüssi</title>
    <link rel="stylesheet" href="Home.css" />
    <div className="navbar">
      <div className="col-md-6 logo">
        <img src={logo} />
        <p>Nossas soluções</p>
        <p>Conheça a Jüssi</p>
      </div>
      <div className="col-md-6 busca">
        <button>
          {/* <p>Busca</p> */}
          <input type="text" id="busca" name="busca" placeholder="busca" />
          <a target="_blank" href="https://api.themoviedb.org/3/search/movie?api_key=47ad4af62c886c8f3ceaef729b2a50bf&query='+document.getElementById('busca').value" onclick="window.open('https://api.themoviedb.org/3/search/movie?api_key=47ad4af62c886c8f3ceaef729b2a50bf&query='+document.getElementById('busca').value)"><img src={search} /></a>
        </button>
        <p className="login">Login</p>
        <img src={cart} />
      </div>
    </div>
    <div className="produtos">
      <div className="col-md-6">
        <h1>Criamos lojas que vendem mais.</h1>
        <p>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?
        </p>
        <button>
          <a href="#">Veja nossas soluções</a>
        </button>
      </div>
      <div className="col-md-6 encartes_produtos">
        <div className="col-md-4 card">
          <img src={produto1} />
          <button>
            <a href="#">Mais Detalhes</a>
          </button>
        </div>
        <div className="col-md-4 card meio">
          <img src={produto2} />
          <button>
            <a href="#">Mais Detalhes</a>
          </button>
        </div>
        <div className="col-md-4 card fim">
          <img src={produto3} />
          <button>
            <a href="#">Mais Detalhes</a>
          </button>
        </div>
      </div>
    </div>
    <div className="marcas">
      <div className="row">
        <div className="col-md-2">
          <p>Nossas principais lojas VTEX</p>
        </div>
        <div className="col-md-2">
          <img className="seta" src={seta} />
        </div>
        <div className="col-md-2">
          <img src={brastemp} />
        </div>
        <div className="col-md-2">
          <img src={consul} />
        </div>
        <div className="col-md-2">
          <img className="consul" src={consul2} />
        </div>
        <div className="col-md-2">
          <img src={thebar} />
        </div>
      </div>
    </div>
    <div className="solucoes">
      <h1><span>//</span> Nossas Soluções</h1>
      <div className="caixinha">
        <div className="col-md-3 encarte_solucoes">
          <div className="bullet">
            <p>P1</p>
          </div>
          <p className="titulo1">Nome do Produto #1</p>
          <p className="titulo2">Descrição do produto #1</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>
            <a href="#">Ver solução</a>
          </button>
        </div>
        <div className="col-md-3 encarte_solucoes">
          <div className="bullet">
            <p>P2</p>
          </div>
          <p className="titulo1">Nome do Produto #2</p>
          <p className="titulo2">Descrição do produto #2</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>
            <a href="#">Ver solução</a>
          </button>
        </div>
        <div className="col-md-3 encarte_solucoes">
          <div className="bullet">
            <p>P3</p>
          </div>
          <p className="titulo1">Nome do Produto #3</p>
          <p className="titulo2">Descrição do produto #3</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>
            <a href="#">Ver solução</a>
          </button>
        </div>
        <div className="col-md-3 encarte_solucoes">
          <div className="bullet">
            <p>P4</p>
          </div>
          <p className="titulo1">Nome do Produto #4</p>
          <p className="titulo2">Descrição do produto #4</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>
            <a href="#">Ver solução</a>
          </button>
        </div>
      </div>
    </div>
    <div className="somos">
      <div className="col-md-6 ladoA">
        <h1>Olá, somos a Jüssi</h1>
        <p>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </p>
        <button>
          <a href="https://jussi.com.br/" target="_blank">Conheça a Jüssi</a>
        </button>
      </div>
      <div className="col-md-6 ladoB">
        <img src={jussiimage} />
      </div>
    </div>
    <div className="pink">
      <h1>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h1>
      <p>Entre em contato</p>
      <p className="mail">
        <a href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a>
      </p>
    </div>
    <div className="black">
      <h1>receba novidades da nossa área de produtos digitais.</h1>
      <div className="fake_form">
        <p className="fake_input">Digite seu e-mail</p>
        <p className="fake_button">CADASTRAR</p>
      </div>
      <hr />
    </div>
    <div className="footer">
      <div className="col-md-6">
        <a href="#"><img src={wpcompany} className="logo_footer" /></a>
      </div>
      <div className="col-md-6 midias">
        <a href="https://web.facebook.com/agencia.jussi?_rdc=1&_rdr" target="_blank"><img src={facebook} /></a>
        <a href="https://www.instagram.com/jussi/" target="_blank"><img src={instagram} /></a>
        <a href="https://www.linkedin.com/company/agencia-jussi" target="_blank"><img src={linkedin} /></a>
      </div>
    </div>
  </div>
  );
}

export default Home;
