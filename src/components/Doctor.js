import React, { Component } from "react";
// import "./Doctor.css";

export default class Doctor extends Component {
  render() {
    return (
      <div>
        {/* <a
          class="btn btn-primary"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Link with href
        </a> */}
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Menu
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Quickheal
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            {/* <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <img src="harsha.jpg" alt="..." /> */}
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quaerat unde iste officiis, est, ipsum neque velit et inventore
            autem repellat ipsa atque in ad sequi molestias aliquam!
            Consequatur, quas! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Similique provident incidunt accusantium impedit
            consequatur ut maiores numquam corporis eos reiciendis officia
            voluptate voluptates nesciunt, quae voluptas deleniti illo vitae
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            omnis voluptas. Amet nulla libero facere facilis provident expedita
            ex temporibus? Sint hic vitae praesentium nam quia id aliquam unde
            similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Illum quis enim magnam, similique nulla praesentium maiores laborum?
            Deleniti praesentium aliquid ab vel odio ut possimus repellendus a,
            porro doloribus
          </p>
        </div>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
