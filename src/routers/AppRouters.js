import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from '../components/Navbar'
import estudiantes from "../components/Estudiantes";


export default class AppRouters extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route>
                        <Route exact path="Estudiantes" element={Estudiantes} />
                    </Route>
                </Router>
            </div>
        )
    }
}

