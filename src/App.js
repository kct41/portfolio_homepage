import './App.css';
import Nav from "./comp/Nav";
import Content from "./comp/Content";
import Main from './comp/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <Main/>
            </BrowserRouter>
        </div>
    );
}

export default App;
