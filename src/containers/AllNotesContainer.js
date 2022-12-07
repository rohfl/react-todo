import React from "react";

import { colors } from '../constants/colors';

const AllNotesContainer = ({notes, deleteCallback}) => {
    let styles = {
        note: {
            flex: 1,
            padding: 16,
            borderRadius: 8,
            borderWidth: 0.5,
            borderColor: colors.grey,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
            textAlign: 'left',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 16,
        },
        deleteButton: {
            padding: 16,
            borderRadius: 8,
            borderWidth: 0.5,
            backgroundColor: colors.red,
            marginLeft: 16,
            color: colors.white,
            fontWeight: "bold",
          },
    };

    return (
        notes.map((item, index) => {
            return (
                <div style={styles.inputContainer} key={index}>
                    <div style={styles.note}>
                        {item}
                    </div>
                    <button style={styles.deleteButton} onClick={() => {deleteCallback(index)}}>
                        --
                    </button>
                </div>
            );
        })
    );
}

export default AllNotesContainer;