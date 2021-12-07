import React, { useContext, useState } from "react";
import noteContext1 from "../context/notes/noteContext1";

const AddNote1 = () => {
  const context = useContext(noteContext1);
  const { addNote1 } = context;

  const [note, setNote] = useState({
    gender: "",
    age: "",
    phonenumber: "",
    address: "",
    appdate: "",
    description: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote1(
      note.gender,
      note.age,
      note.phonenumber,
      note.address,
      note.appdate,
      note.description
    );
    setNote({
      gender: "",
      age: "",
      phonenumber: "",
      address: "",
      appdate: "",
      description: "",
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Enter details of the Patient</h2>
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
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={note.description}
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

export default AddNote1;
