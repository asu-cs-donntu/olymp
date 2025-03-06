import { useState, useEffect } from 'react';
import alertImage from '/alertWarning.svg';
import './Alert.scss';

interface AlertProps {
    alertText: string;
    onClose: () => void;
}

function Alert({ alertText, onClose }: AlertProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        requestAnimationFrame(() => {
            setIsVisible(true);
        });
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`alert ${isVisible ? 'alert--visible' : 'alert--hidden'}`}>
            <div className="alert-content">
                <section>
                    <div className="alertImage">
                        <img src={alertImage} alt="Warning" />
                    </div>
                    <div className="text">
                        <p>{alertText}</p>
                    </div>
                </section>
                <div className="button-close">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleClose}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Alert;