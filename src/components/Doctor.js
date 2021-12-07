import React, { useState, useEffect } from "react";
// import "./Doctor.css";
// import "./Sidebars";

const Doctor = () => {
  const userDetails = [];
  const [users, setUsers] = useState(userDetails);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        // console.log(json);
        console.log(localStorage.setItem("token", json.user));
        setUsers(json);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  //   //save the auth token and redirect
  //   localStorage.setItem("token", json.user);
  //   // history.push("/");
  // }
  return (
    <div>
      <div id="main">
        <h1> {users.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          quaerat unde iste officiis, est, ipsum neque velit et inventore autem
          repellat ipsa atque in ad sequi molestias aliquam! Consequatur, quas!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          provident incidunt accusantium impedit consequatur ut maiores numquam
          corporis eos reiciendis officia voluptate voluptates nesciunt, quae
          voluptas deleniti illo vitae Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae, omnis voluptas. Amet nulla libero facere
          facilis provident expedita ex temporibus? Sint hic vitae praesentium
          nam quia id aliquam unde similique. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Illum quis enim magnam, similique nulla
          praesentium maiores laborum? Deleniti praesentium aliquid ab vel odio
          ut possimus repellendus a, porro doloribus
        </p>
      </div>
    </div>
  );
};

export default Doctor;
