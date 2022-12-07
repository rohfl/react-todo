import { useEffect, useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import { colors } from './constants/colors';
import AllNotesContainer from './containers/AllNotesContainer';

const App = () => {

    const [availableNotes, setAvailableNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');

    let styles = {
      mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
      },
      notesContainer: {
        padding: 16,
        borderRadius: 16,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
      },
      inputContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      input: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colors.grey,
      },
      addButton: {
        padding: 16,
        borderRadius: 8,
        borderWidth: 0.5,
        backgroundColor: colors.blue,
        marginLeft: 16,
        color: colors.white,
        fontWeight: "bold",
      },
      noNotesContainer: {
        padding: 24,
        textAlign:'center',
        marginTop: 16,
      }
    };

    useEffect(() => {
      const data = localStorage.getItem('availableNotes');
      if (data != null) {
        let notes = JSON.parse(data);
        setAvailableNotes(notes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('availableNotes', JSON.stringify(availableNotes));
    });

    const onChange = (event) => {
      setCurrentNote(event.target.value);
    }

    const saveNote = () => {
      if(currentNote.trim() === '') {
        alert('Please enter a note');
        return;
      } else {
        setAvailableNotes([...availableNotes, currentNote]);
        setCurrentNote('');
      }
    }

    const deleteNote = (idx) => {
      let filteredNotes = availableNotes.filter((value, i) => i !== idx);
      setAvailableNotes(filteredNotes);
    };

    return (
      <div className="App">
        <Nav/>
        <div style={styles.mainContainer}>
          <div style={styles.notesContainer}>
            <div style={styles.inputContainer}>
                <input style={styles.input} placeholder='Enter a note' value={currentNote} onChange={onChange} />
                <button style={styles.addButton} onClick={() => {saveNote()}}>
                  +
                </button>
            </div>
            {(availableNotes.length === 0)? <div style={styles.noNotesContainer}>
              No Notes Saved
            </div>:<AllNotesContainer notes={availableNotes} deleteCallback={deleteNote} />
            }
          </div>
        </div>
      </div>
    );
}

export default App;
