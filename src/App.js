import { observer } from "mobx-react";
import Routes from "./components/Routes";

import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default observer(App);
