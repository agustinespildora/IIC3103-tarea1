import React, { useState } from "react";
import "./styles/styles.css";
import Page from "./models/Page.js";
import Menu from "./components/Menu";



export default function App() {

  const [page, setPage] = useState(new Page());

  return (
    <div>
      <div className="App">
        <Menu page={page} setPage={setPage}/>
      </div>
    </div>
  );
}
