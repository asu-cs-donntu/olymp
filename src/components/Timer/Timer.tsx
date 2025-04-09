import { useEffect, useState } from 'react';
import './Timer.scss';

const PHASES = {
    REG_END: new Date("2025-04-03T23:59:59+03:00").getTime(),
    STAGE1_START: new Date("2025-04-05T09:00:00+03:00").getTime(),
    STAGE1_END: new Date("2025-04-05T12:00:00+03:00").getTime(),
    STAGE2_START: new Date("2025-04-26T10:00:00+03:00").getTime(),
    STAGE2_END: new Date("2025-04-26T11:59:59+03:00").getTime(),
    FINAL_DATE: new Date("2025-04-26T12:00:00+03:00").getTime()
};

function getDeclension(num: number, singular: string, few: string, many: string) {
    if (num % 10 === 1 && num % 100 !== 11) return singular;
    if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) return few;
    return many;
}

function Timer() {
    const [timeLeft, setTimeLeft] = useState("");
    const [message, setMessage] = useState("");
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();

            if (now >= PHASES.FINAL_DATE) {
                setMessage("соревнование завершено");
                setIsHidden(true);
                return;
            }

            let target: number;
            let newMessage: string;

            if (now <= PHASES.REG_END) {
                target = PHASES.REG_END;
                newMessage = "до окончания регистрации осталось";
            } else if (now < PHASES.STAGE1_START) {
                target = PHASES.STAGE1_START;
                newMessage = "до начала первого этапа осталось";
            } else if (now <= PHASES.STAGE1_END) {
                target = PHASES.STAGE1_END;
                newMessage = "до окончания первого этапа осталось";
            } else if (now < PHASES.STAGE2_START) {
                target = PHASES.STAGE2_START;
                newMessage = "До начала второго тура осталось";
            } else if (now <= PHASES.STAGE2_END) {
                target = PHASES.STAGE2_END;
                newMessage = "До завершения второго тура осталось";
            } else {
                return;
            }

            setMessage(newMessage);
            const difference = target - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            const daysText = getDeclension(days, "день", "дня", "дней");
            const hoursText = getDeclension(hours, "час", "часа", "часов");
            const minutesText = getDeclension(minutes, "минута", "минуты", "минут");

            setTimeLeft(`${days} ${daysText} ${hours} ${hoursText} ${minutes} ${minutesText}`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="timer">
            <p className="fw-bold"><b>{message}</b></p>
            {!isHidden && message && (
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