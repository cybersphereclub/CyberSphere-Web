import { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const nextTime = calculateTimeLeft();
            setTimeLeft(nextTime);

            // Stop timer if expired
            if (Object.keys(nextTime).length === 0 ||
                (nextTime.days === 0 && nextTime.hours === 0 &&
                    nextTime.minutes === 0 && nextTime.seconds === 0)) {
                // Optional: clear interval if strictly 0, but safe to keep running for this simple usage
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div className="countdown-timer">
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="time-segment">
                    <div className="time-value glass-panel">
                        {addLeadingZero(timeLeft[interval])}
                    </div>
                    <span className="time-label">{interval.toUpperCase()}</span>
                </div>
            ))}
        </div>
    );
};

export default CountdownTimer;
