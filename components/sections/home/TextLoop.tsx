import React, {useEffect, useState} from "react";
import Typist from 'react-typist';

const TextLoop = () => {
    const messages = ["a software developer 🖥️", "a passionate cook 👨‍🍳", "excited to meet you! 😁"];

    const colors = ["#E4a657", "#A3E5FF", "#A3FFAA"];
    const [message, setMessage] = useState(messages[0]);
    const [color, setColor] = useState(colors[0]);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        setTyping(true);
    }, [typing]);

    const repeatText = () => {
        setTyping(false);
        let index = messages.indexOf(message);
        if (index >= messages.length - 1) {
        index = -1;
    }
    setMessage(messages[index + 1]);
    setColor(colors[index + 1]);
    };

    return (
        <div>
        {typing ? (
            <Typist
            cursor={{ show: false }}
            onTypingDone={() => {
                repeatText();
            }}
            stdTypingDelay={1}
            className="typist"
        >
            <h2 style={{ color: color }}>
                {message}
            </h2>
            <Typist.Backspace count={message.length} delay={1000} />
        </Typist>
        ) : (
            <h2 className={color}>{message}</h2>
        )}
        </div>
    );
    };

export default TextLoop;