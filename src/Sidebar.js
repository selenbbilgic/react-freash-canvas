import React, { useState } from 'react';
import leftArrow from './arrowImage1.png';
import rightArrow from './arrowImage2.png';

function Sidebar() {
    const [leftMenuActive, setLeftMenuActive] = useState(false);
    const [rightMenuActive, setRightMenuActive] = useState(false);
    const leftItems = ["Left Item 1", "Left Item 2", "Left Item 3", "Left Item 4"]; // list of draggable items for the left sidebar
    const rightItems = ["Right Item 1", "Right Item 2", "Right Item 3", "Right Item 4"]; // list of draggable items for the right sidebar

    const handleLeftButtonClick = () => {
        setLeftMenuActive(!leftMenuActive);
    };

    const handleRightButtonClick = () => {
        setRightMenuActive(!rightMenuActive);
    };

    const onDragStart = (event, text) => {
        event.dataTransfer.setData("text/plain", text);
    };

    return (
        <>
            {/* Left Sidebar */}
            <div className={`sidebar leftSidebar ${leftMenuActive ? 'open' : ''}`}>
                <button onClick={handleLeftButtonClick}>
                    <img src={leftArrow} alt='Arrow'/>
                </button>
                {leftMenuActive && (
                    <div className="content">
                        {leftItems.map((item, index) => (
                            <p key={index} draggable onDragStart={(event) => onDragStart(event, item)}>
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            {/* Right Sidebar */}
            <div className={`sidebar rightSidebar ${rightMenuActive ? 'open' : ''}`}>
                <button onClick={handleRightButtonClick}>
                    <img src={rightArrow} alt='Arrow'/>
                </button>
                {rightMenuActive && (
                    <div className="content">
                        {rightItems.map((item, index) => (
                            <p key={index}>
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default Sidebar;
