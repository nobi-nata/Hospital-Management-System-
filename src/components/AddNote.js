import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    gender: "",
    age: "",
    phonenumber: "",
    address: "",
    appdate: "",
    department: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(
      note.gender,
      note.age,
      note.phonenumber,
      note.address,
      note.appdate,
      note.department
    );
    setNote({
      gender: "",
      age: "",
      phonenumber: "",
      address: "",
      appdate: "",
      department: "",
    });
    props.showAlert("Details Added Sucessfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Enter details of the Staff </h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            aria-describedby="emailHelp"
            value={note.gender}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            name="age"
            value={note.age}
            onChange={onChange}
            minLength={1}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="phonenumber"
            name="phonenumber"
            aria-describedby="emailHelp"
            value={note.phonenumber}
            onChange={onChange}
            minLength={10}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            aria-describedby="emailHelp"
            value={note.address}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Appointment Date
          </label>
          <input
            type="text"
            className="form-control"
            id="appdate"
            name="appdate"
            aria-describedby="emailHelp"
            value={note.appdate}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            name="department"
            value={note.department}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>

        <button
          disabled={note.age.length < 1}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit Details
        </button>
      </form>
    </div>
  );
};

export default AddNote;
