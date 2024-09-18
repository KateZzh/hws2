import React from 'react';
import s from './FriendMessage.module.css';
import { MessageType } from '../HW1';

export type MessageProps = {
    message: MessageType;
};

const FriendMessage = (props: MessageProps) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img src={props.message.user.avatar} alt='avatar of friend' id={'hw1-friend-avatar-' + props.message.id} />
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                {props.message.message.time}
            </div>
        </div>
    );
};

export default FriendMessage;
