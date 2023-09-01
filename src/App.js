import React from "react";
import './App.css';
import {
  input,
  uppercase,
  lowercase,
  removespaces,
  removelines
} from "./funcapp.js";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark"  data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">About</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
      <div className="container">
      <h1 class="my-4 text-center"> Hello, This is a project on Text analyzer
    <br></br>
    Enter Your Text
   </h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Enter your text here"
            id="inptext"
            style={{height:"200px"}}
            onInput={input}
          ></textarea>
          <label htmlFor="inptext">Input Text</label>
        </div>

        <div className="buttons">
          <button type="button" className="btn btn-primary" onClick={uppercase}>Uppercase</button>
          <button type="button" className="btn btn-success" onClick={lowercase}>Lowercase</button>
          <button type="button" className="btn btn-info" onClick={removespaces}>Remove Extra Spaces</button>
          <button type="button" className="btn btn-danger" onClick={removelines}>Remove New Lines</button>
        </div>
        <br></br>
        <div className="info">
          <span id="wordct">0</span> Words and <span id="charct">0</span> Characters
        </div>
      </div>
    </div>
  );
}

export default App;

