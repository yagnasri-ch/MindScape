import React, { useState } from 'react';
import './FirstPage.css'; // Assuming the CSS file is in the same directory as this component
import IntroText from "./IntroText";
import Introduction from "./Introduction"; // Import Introduction component if it's meant to be used

const FirstPage = () => {
    return (
        <div>
            <IntroText />
            <Introduction/>
        </div>
    );
};

export default FirstPage;
