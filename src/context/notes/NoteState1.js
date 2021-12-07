import React, { useState } from "react";
import NoteContext from "./noteContext1";

const NoteState1 = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all the notes
  const getNotes1 = async () => {
    const response = await fetch(`${host}/api/notes1/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setNotes(json);
  };
  //add a note
  const addNote1 = async (
    gender,
    age,
    phonenumber,
    address,
    appdate,
    description
  ) => {
    const response = await fetch(`${host}/api/notes1/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        gender,
        age,
        phonenumber,
        address,
        appdate,
        description,
      }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote1 = async (id) => {
    const response = await fetch(`${host}/api/notes1/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote1 = async (
    id,
    gender,
    age,
    phonenumber,
    address,
    appdate,
    description
  ) => {
    const response = await fetch(`${host}/api/notes1/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        gender,
        age,
        phonenumber,
        address,
        appdate,
        description,
      }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].gender = gender;
        newNotes[index].age = age;
        newNotes[index].phonenumber = phonenumber;
        newNotes[index].address = address;
        newNotes[index].appdate = appdate;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote1, deleteNote1, editNote1, getNotes1 }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState1;
