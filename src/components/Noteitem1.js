import React, { useContext } from "react";
import noteContext1 from "../context/notes/noteContext1";

const Noteitem = (props) => {
  const context = useContext(noteContext1);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            {/* <i
              className="far fa-trash-alt mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i> */}
          </div>
          <div>
            <p className="card-title">Gender : {note.gender}</p>
            <p className="card-text">Age : {note.age}</p>
            <p className="card-text">Phone Number : {note.phonenumber}</p>
            <p className="card-text">Address : {note.address}</p>
            <p className="card-text">Appointment Date : {note.appdate}</p>
            <p className="card-text">Description : {note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
