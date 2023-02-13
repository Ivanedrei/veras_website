import React from "react"
import { createRoot } from "react-dom/client"
import { Veras } from "./components/Veras"
import "./index.css"

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<Veras tab="home" />);

// ReactDOM.render(
//   <React.StrictMode>
//     <Veras />
//   </React.StrictMode>,
//   document.getElementById('root')
// );