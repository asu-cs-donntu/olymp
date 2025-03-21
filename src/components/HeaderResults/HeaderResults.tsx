import React, { useState } from "react";
import LogoDonNTU from '/logo donntu.svg'
import Alert from '../Alert/Alert.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './HeaderResults.scss'

const HeaderResults: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");

    const handleContactsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setAlertText("Для связи с организаторами используйте e-mail cafedraasu@yandex.ru");
        setShowAlert(true);
    };

    const handleResultsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setAlertText("В данный момент просмотр результатов недоступен.");
        setShowAlert(true);
    };

    const handleRegistrationClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open('https://forms.yandex.ru/u/67c551ac068ff08c98a73abf/', '_blank');
    };

    return (
        <div className="main-container-r">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="https://donntu.ru/" target="_blank" rel="noreferrer">
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

            {showAlert && (
                <Alert
                    alertText={alertText}
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
    );
};

export default HeaderResults;