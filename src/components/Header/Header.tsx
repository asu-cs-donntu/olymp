import React from 'react';
// import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header: React.FC = () => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo">
            <img src="./icons/logo donntu.svg" alt="" />
            <p>
              Донецкий Национальный <br />Технический Университет
            </p>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Контакты
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Регистрация
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Результаты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="overlay"></div>
        <div className="container">
          <div className="description">
            <h3>
              В ДОНЕЦКОМ НАЦИОНАЛЬНОМ ТЕХНИЧЕСКОМ УНИВЕРСИТЕТЕ ПРОВОДИТСЯ
            </h3>
            <h2>
              ОЛИМПИАДА ПО НАПРАВЛЕНИЮ ИНФОРМАТИКА И КОМПЬЮТЕРНЫЕ ТЕХНОЛОГИИ
            </h2>
            <button className="btn btn-outline-secondary">
              Зарегистрироваться
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
