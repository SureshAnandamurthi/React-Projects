import react from "react";
import reactDom from "react-dom";
import Table from "./Table"
import { robots } from "./Robots"

reactDom.render(
    <Table robs = {robots}/>,
    document.getElementById("root")
)