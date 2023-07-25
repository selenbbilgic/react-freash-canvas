import React, { useState } from 'react';
import leftArrow from './arrowImage1.png';
import rightArrow from './arrowImage2.png';

function Sidebar() {
    const [leftMenuActive, setLeftMenuActive] = useState(false);
    const [rightMenuActive, setRightMenuActive] = useState(false);

    const handleLeftButtonClick = () => {
        setLeftMenuActive(!leftMenuActive);
    };

    const handleRightButtonClick = () => {
        setRightMenuActive(!rightMenuActive);
    };

    return (
        <>
            {/* Left Sidebar */}
            <div className={`sidebar leftSidebar ${leftMenuActive ? 'open' : ''}`}>
                {leftMenuActive && (
                    <div className="content">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className={`sidebar rightSidebar ${rightMenuActive ? 'open' : ''}`}>
                {rightMenuActive && (
                    <div className="content">
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                    </div>
                )}
            </div>

            {/* Left Toggle Button */}
            <button className={`toggleButton leftButton ${leftMenuActive ? 'open' : ''}`} onClick={handleLeftButtonClick}>
                <img src={leftArrow} alt="left arrow"/>
            </button>

            {/* Right Toggle Button */}
            <button className={`toggleButton rightButton ${rightMenuActive ? 'open' : ''}`} onClick={handleRightButtonClick}>
                <img src={rightArrow} alt="right arrow"/>
            </button>
        </>
    );
}

export default Sidebar;
