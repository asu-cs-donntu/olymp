import { useEffect, useState } from 'react';
import './Timer.scss';

const targetStartDate = new Date("2025-04-01T00:00:00+03:00").getTime();
const targetEndDate = new Date("2025-04-04T23:59:59+03:00").getTime();
const finalDate = new Date("2025-04-05T00:00:00+03:00").getTime();

function getDeclension(num: number, singular: string, few: string, many: string) {
    if (num % 10 === 1 && num % 100 !== 11) return singular;
    if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) return few;
    return many;
}

function Timer() {
    const [timeLeft, setTimeLeft] = useState("");
    const [message, setMessage] = useState("до окончания регистрации осталось");
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();

            if (now >= finalDate) {
                setMessage("регистрация завершена");
                setIsHidden(true);
                return;
            }

            let target = now < targetStartDate ? targetStartDate : targetEndDate;
            let difference = target - now;

            if (now >= targetStartDate && now <= targetEndDate) {
                setMessage("до окончания регистрации осталось");
            } else if (now < targetStartDate) {
                setMessage("до начала регистрации осталось");
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            const daysText = getDeclension(days, "день", "дня", "дней");
            const hoursText = getDeclension(hours, "час", "часа", "часов");
            const minutesText = getDeclension(minutes, "минута", "минуты", "минут");

            setTimeLeft(`${days} ${daysText} ${hours} ${hoursText} ${minutes} ${minutesText}`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="timer">
            <p className="fw-bold"><b>{message}</b></p>
            {!isHidden && (
                <div className="fw-bold" id="time">
                    <p><b>{timeLeft}</b></p>
                </div>
            )}
            <div id="text">
                <p>Твой момент - покажи, на что способен!</p>
            </div>
        </div>
    );
}

export default Timer;
