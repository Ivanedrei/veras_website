import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { createBrowserHistory } from "@remix-run/router"
import { Veras } from "./components/Veras"
import "./index.css"

const customHistory = createBrowserHistory();
// const router = createBrowserRouter()
const container = document.getElementById('root')
const root = createRoot(container);

root.render(
  <Router history={customHistory}>
    <Veras tab="home" />
  </Router>
);

// $4 - 5 15days 2 - 3 weeks.