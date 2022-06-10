import React from "react";

const Header = () => {
    const headerStyle = {
        padding: "15px",
        lineHeigth: "1em",
    }

    return ( 
        <header style={headerStyle}>
            <h1 style={{
                fontSize: "3em",
                lineHeight: "1em",
                textTransform: "lowercase",
                fontWeight: "600",
                color: "#ececec",
                textAlign: "center"
            }}>
                Class Based Todo App 
            </h1>
        </header>
     );
}
 
export default Header;