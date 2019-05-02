import React from 'react';

function ChatList({messages}) {
    const messageItems = messages.map((m, i) => (
    <li style={{ listStyleType: "none", marginLeft: -40 }} key={i}>{m}</li>
    ));
    return (
        <ul style={{ textAlign: "center" }}>
            {messageItems}
        </ul>
    );
}

export default ChatList;