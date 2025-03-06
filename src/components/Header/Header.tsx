import React, { useState } from "react";
import LogoDonNTU from '/logo donntu.svg'
import Alert from '../Alert/Alert.tsx';
import "bootstrap/dist/css/bootstrap.min.css";

const Header: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleContactsClick = () => {
    setAlertText("Для связи с организаторами используйте e-mail cafedraasu@yandex.ru\n\nСсылка на тесты будет выслана по почте на зарегистрированные адреса 05.04.2025 с 9:00 до 9:15. В случае не получения ссылки пишите организаторам по адресу cafedraasu@yandex.ru");
    setShowAlert(true);
  };

  const handleResultsClick = () => {
    setAlertText("В данный момент просмотр результатов недоступен.\n\nСсылка на тесты будет выслана по почте на зарегистрированные адреса 05.04.2025 с 9:00 до 9:15. В случае не получения ссылки пишите организаторам по адресу cafedraasu@yandex.ru");
    setShowAlert(true);
  };

  const handleRegistrationClick = () => {
    const now = new Date().getTime();
    const REG_START = new Date("2025-04-01T00:00:00+03:00").getTime();
    const REG_END = new Date("2025-04-03T23:59:59+03:00").getTime();

    let message = "В данный момент регистрация недоступна";

    if (now >= REG_START && now <= REG_END) {
      message = "Для регистрации перейдите по следующему адресу: https://forms.yandex.ru/u/67c551ac068ff08c98a73abf/";
    }

    setAlertText(`${message}\n\nСсылка на тесты будет выслана по почте на зарегистрированные адреса 05.04.2025 с 9:00 до 9:15. В случае не получения ссылки пишите организаторам по адресу cafedraasu@yandex.ru`);
    setShowAlert(true);
  };

  return (
      <div className="main-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="https://donntu.ru/" target="_blank">
              <div className="logo">
                <img src={LogoDonNTU} alt="Логотип ДонНТУ"/>
                <p>
                  Донецкий Национальный <br/>
                  Технический Университет
                </p>
              </div>
            </a>
          <button
              className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Переключатель навигации"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleContactsClick}>
                    Контакты
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleRegistrationClick}>
                    Регистрация
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleResultsClick}>
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
              <h3>В ДОНЕЦКОМ НАЦИОНАЛЬНОМ ТЕХНИЧЕСКОМ УНИВЕРСИТЕТЕ ПРОВОДИТСЯ</h3>
              <h2>
                ОЛИМПИАДА ПО НАПРАВЛЕНИЮ ИНФОРМАТИКА И КОМПЬЮТЕРНЫЕ ТЕХНОЛОГИИ
              </h2>
              <button className="btn btn-outline-secondary" onClick={handleRegistrationClick}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </header>

        {showAlert && (
            <Alert
                alertText={alertText}
                onClose={() => setShowAlert(false)}
            />
        )}
      </div>
  );
};

export default Header;