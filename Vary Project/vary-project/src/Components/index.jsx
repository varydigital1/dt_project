import React from "react";
import "./style.css";
import VA1 from "../assets/direct-hit.png";
import VA2 from "../assets/delete.png"
import VA3 from "../assets/done.png"
import VA4 from "../assets/sky.png"
const App = () => {
  return (
    <>
      <div className="main">
        <div className="menu">
          <div className="menu_input">
            <input
              type="text"
              className="input"
              placeholder="Enter Your Task"
            />
          </div>
          <div className="menu_txt">
            <ul>
              <li>
                <button type="button" placeholder="HTML">
                  HTML
                </button>
              </li>
              <li>
                <button type="button" placeholder="CSS">
                  CSS
                </button>
              </li>
              <li>
                <button type="button" placeholder="JavaScript">
                  JavaScript
                </button>
              </li>
              <li>
                <button type="button" placeholder="React Js">
                  React Js
                </button>
              </li>
              <li>
                <select name="To do" id="" required>
                  <option value="To do">To do</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
              </li>
              <li>
                <button
                  className="cmb_1"
                  type="button"
                  placeholder="+ Add Task"
                >
                  + Add Task
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="obj">
          <div className="txt">
            <img src={VA1} alt="VA1" className="style" />
            <h1>To do</h1>
            <div className="out_input">
              <h2>Chenge Delete icon</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_1">
                    HTML
                  </button>
                </li>
                <li>
                  <button type="button" placeholder="HTML" className="color_2">
                    CSS
                  </button>
                </li>
                <li>
                  <img src={VA2} alt="VA2" />
                </li>
              </ul>
            </div>
            <div className="out_input">
              <h2>Start Section 4 for React Js</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_3">
                    React Js
                  </button>
                </li>
                <li></li>
                <li>
                  <img src={VA2} alt="VA2" id="A022" />
                </li>
              </ul>
            </div>
            <div className="out_input">
              <h2>This is new Tasks</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_1">
                    HTML
                  </button>
                </li>
                <li>
                  <button type="button" placeholder="HTML" className="color_2">
                    CSS
                  </button>
                </li>
                <li>
                  <img src={VA2} alt="VA2" />
                </li>
              </ul>
            </div>
          </div>
          <div className="txt">
            <img src={VA4} alt="VA4" className="style" />
            <h1>Doing</h1>
            <div className="out_input">
              <h2>Complete Project 1</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_3">
                    React Js
                  </button>
                </li>
                <li></li>
                <li>
                  <img src={VA2} alt="VA2" id="A022" />
                </li>
              </ul>
            </div>
            <div className="out_input">
              <h2>This is another task</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_4">
                    JavaScript
                  </button>
                </li>
                <li>
                  <button type="button" placeholder="HTML" className="color_2">
                    CSS
                  </button>
                </li>
                <li>
                  <img src={VA2} alt="VA2" id="A023" />
                </li>
              </ul>
            </div>
          </div>
          <div className="txt">
            <img src={VA3} alt="VA3" className="style" />
            <h1>Done</h1>
            <div className="out_input">
              <h2>Working on HTML</h2>
              <ul>
                <li>
                  <button type="button" placeholder="HTML" className="color_1">
                    HTML
                  </button>
                </li>
                <li>
                  <img src={VA2} alt="VA2" id="A025" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
