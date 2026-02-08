import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, delay = 0, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [start, setStart] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStart(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (!start) return;

        let index = 0;
        // Reset text just in case
        setDisplayedText('');

        const interval = setInterval(() => {
            index++;
            setDisplayedText(text.slice(0, index));

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [start, text, speed]);

    return (
        <span className={`${className} typing-cursor`}>
            {displayedText}
        </span>
    );
};

export default TypingEffect;
