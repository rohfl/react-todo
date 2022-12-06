import React from "react";

import { colors } from "../constants/colors";

const Nav = () => {

    let styles = {
        navContainer: {
            backgroundColor: colors.blue,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        title: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 16,
            padding: 24,
        }
    }

    return (
        <div style={styles.navContainer}>
            <span style={styles.title}>
                Local Notes
            </span>
        </div>
    );
};

export default Nav;
