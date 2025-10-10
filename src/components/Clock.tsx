import { useEffect, useState } from 'react';
import Digit from './Digit';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = (time.getHours() % 12 || 12).toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return (
        <div>
            <div className="flex">
                <Digit value={parseInt(hours[0])}></Digit>
                <Digit value={parseInt(hours[1])}></Digit>
                <div className="w-4"></div>
                <Digit value={parseInt(minutes[0])}></Digit>
                <Digit value={parseInt(minutes[1])}></Digit>
                <div className="w-4"></div>
                <Digit value={parseInt(seconds[0])}></Digit>
                <Digit value={parseInt(seconds[1])}></Digit>
            </div>
        </div>
    );
};

export default Clock;
