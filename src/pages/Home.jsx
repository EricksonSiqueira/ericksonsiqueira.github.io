import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import perfil from '../images/ps-3.png';
import '../styles/Home.css';
function Home() {
  return ( 
    <div>
      <Header />
      <main>
        <img
          src={perfil}
          alt="Erickson"
          className="profile-pic"
        />
        <p className="home-text">
          Olá, meu nome é <span>Erickson</span>, seja bem vindo ao meu site! Sou desenvolvedor front-end na rota para me tornar um desenvolvedor Full Stack.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
