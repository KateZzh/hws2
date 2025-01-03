import React, { useState } from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { restoreState } from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        const timerId = setInterval(() => setDate(new Date()), 1000);
        setTimerId(Number(timerId));
    };

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    };

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const getDigitsString = (num: number) => (num < 10 ? '0' + num : num);

    const formatterForDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    const formatterForMonth = new Intl.DateTimeFormat('en-US', { month: 'long' });

    const stringTime = `${getDigitsString(date.getHours())}:${getDigitsString(date.getMinutes())}:${getDigitsString(
        date.getSeconds()
    )}` || <br />;
    const stringDate = `${getDigitsString(date.getDate())}.${getDigitsString(
        date.getMonth() + 1
    )}.${date.getFullYear()}` || <br />;

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = formatterForDay.format(date) || <br />;
    const stringMonth = formatterForMonth.format(date) || <br />;

    return (
        <div className={s.clock}>
            <div id={'hw9-watch'} className={s.watch} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>, <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton id={'hw9-button-start'} disabled={!!timerId} onClick={start}>
                    start
                </SuperButton>
                <SuperButton id={'hw9-button-stop'} disabled={!timerId} onClick={stop}>
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
