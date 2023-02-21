import React, { Component } from 'react'
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default class UserF extends Component {
    render() {
        return (
         <div className="new">
            <Sidebar />
            <div className="newContainer">
              <Navbar />
            <section>
                <div className="card">
                    
                    <div className="p-profile">
                        <img src="/img/MARLON.jpg" alt="perfil" />
                    </div>

                    <div className="name">
                        <h2>Administrador</h2>
                        <p>Marlon Peréz Martínez</p>
                        <h3>Marlon10@gmail.com</h3>
                    </div>

                    <div className="more">
                    <Link to={"/users/edit/"}>  <button>Editar Perfil</button></Link>
                    </div>

         
                </div>
            </section>
            </div>
            </div>
        )
        
    }
}
