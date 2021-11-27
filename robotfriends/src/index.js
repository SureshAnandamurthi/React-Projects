import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList"
import { robots } from "./Robots";
import tachyons from 'tachyons';


ReactDOM.render(
    <CardList robots={robots}/>, 
    document.getElementById("root")
    )