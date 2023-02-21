import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Single = () => {

 const [mostrarUser, setMostrar] = useState({
  _id:"",
  nombre:"",
  apellido:"",
  correo:"",
  password:"",
  matricula:"",
  Roles:"",
  
  

 });
 const params = useParams();

useEffect(() => {
  (async () => {
    const res = await axios.get(`http://localhost:4000/api/users/${params.id}`)
setMostrar(res.data)
  })();
}, [params.id]);

if(!mostrarUser) {
  return null;
}

  return (
    <div className="single" >
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Informacion</h1>
            <div className="item">
              <img
                src="/img/MARLON.jpg" 
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{mostrarUser.nombre + " "}{mostrarUser.apellido}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{mostrarUser.correo}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contraseña</span>
                  <span className="itemValue">{mostrarUser.password}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rol:</span>
                  <span className="itemValue">{mostrarUser.Roles}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Matricula:</span>
                  <span className="itemValue">{mostrarUser.matricula}</span>
                </div> 
                <div className="cellAction">
              <Link to={"/users/edit/" + params.id} >
              <div className="viewButton">Editar</div>
            </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Solicitudes</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};
 





export default Single;

