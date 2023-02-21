import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from 'axios';
import {useEffect, useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";

const New = ({title}) => {

  let navigate = useNavigate();

 const [editarUser, seteditarUser] = useState({
  name:"",
    nombre:"",
    apellido:"",
    correo:"",
    password:"",
    matricula: "",
    Roles: "",
    
  
   });
   const params = useParams();

   const { nombre, apellido, correo, password, matricula, Roles } = editarUser;

   const onInputChange = (e) =>{
    seteditarUser({ ...editarUser, [e.target.name]: e.target.value});
   }

  
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:4000/api/users/${params.id}`)
  seteditarUser(res.data)
    })();
  }, [params.id]);

 
  const onSubmit =async (e) =>{
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/users/${params.id}`, editarUser)
    navigate("/users");
  }
  

return (
  <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
          src =""
          alt=""
          />
        </div>
        <div className="right">
            <div className="imagen">
              <label htmlFor="file">
                image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input type="file" id="file" style={{display: "none"}} />
< input type = " file " id = " file " style = { { display : " none " } } />
</div >
<form onSubmit={(e) => onSubmit(e)}>
<div className= "formInput">

<label>Nombre</label>
<input 
type={"text"} 
placerholder= "Coloca el nombre"
name="nombre"  
value={nombre}
onChange={(e) => onInputChange(e)}/>
</div>
<div className = "formInput">

<label>Rol</label>
<input 
type = {"text"}
placerholder= "Coloca el Rol"
name="Roles"  
value={Roles}
onChange={(e) => onInputChange(e)}/>
</div>
<div className = "formInput">

<label>Apellido</label>
<input 
type = {"text"}
placerholder= "Coloca el Apellido"
name="apellido"  
value={apellido}
onChange={(e) => onInputChange(e)}/>
</div>
<div className = " formInput " >

<label >Correo Electronico</label>
<input type = {"email"}  
placerholder= "Coloca el Correo electronico"
name="correo"  
value={correo}
onChange={(e) => onInputChange(e)}/>
</div >
<div className = " formInput " >

<label >Contraseña</label>
<input 
type = {"text"}  
placerholder= "Coloca la nueva contraseña"
name="password"  
value={password}
onChange={(e) => onInputChange(e)}
/>
</div>
<div className = " formInput " >
  <label>Matricula</label>
  < input 
  type={"int"}
  placerholder= "Coloca la nueva contraseña"
  name="matricula"  
  value={matricula}
  onChange={(e) => onInputChange(e)}/>
</div >
< button type="submit" >Submit</button>
</form >
          </div>
      </div>
    </div>
  </div>
);
};

export default New;
