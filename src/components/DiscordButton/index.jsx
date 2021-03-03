import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './styles.css';

import { IconContext } from 'react-icons';
import { FaDiscord } from 'react-icons/fa';

const DiscordButton = () => {
    return (
        <Button className="discord-button d-flex justify-content-center align-items-center" target="_blank" href="https://discord.gg/2NTWtknYeA">
            <IconContext.Provider
                value={{
                    color: '#00D5FF',
                    size: '1.8rem',
                }}
            >
                <div>
                    <FaDiscord />
                </div>
            </IconContext.Provider>
        </Button>
    );
};

export default DiscordButton;
