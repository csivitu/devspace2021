import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './styles.css';

export default function Timer(props) {
    const {timeInDateFormat} = props;
    const [time, setTime] = useState(timeInDateFormat - +new Date());

    useEffect(() => {
        if (time < 0) {
            return () => {};
        }

        if (time === 0) {
            return () => {};
        }

        const interval = setInterval(() => {
            setTime(time - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, setTime]);

    const convert = (t) => {
        const days = Math.floor(t / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (t - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000)
        );
        const minutes = Math.floor(
            (t - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) /
                (60 * 1000)
        );
        const seconds = Math.floor(
            (t -
                days * 24 * 60 * 60 * 1000 -
                hours * 60 * 60 * 1000 -
                minutes * 60 * 1000) /
                1000
        );
        const d = days.toString().padStart(2, '0');
        const h = hours.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');
        return (
            <Row className="text-center" style={{ zIndex: 10 }}>
                <h2 className="timeNumber">{d}</h2><h4 className="time">d</h4><h2 className="timeNumber">&nbsp;:&nbsp;</h2>
                <h2 className="timeNumber">{h}</h2><h4 className="time">h</h4><h2 className="timeNumber">&nbsp;:&nbsp;</h2>
                <h2 className="timeNumber">{m}</h2><h4 className="time">m</h4><h2 className="timeNumber">&nbsp;:&nbsp;</h2>
                <h2 className="timeNumber">{s}</h2><h4 className="time">s</h4>
            </Row>
        );
    };

    return (convert(time));
}
