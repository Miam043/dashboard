import "./edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";


const Edit = ({title}) => {

  let navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [correo, setcorreo] = useState("");
  const [password, setpassword] = useState("");
  const [matricula, setmatricula] = useState("");
  const [Roles, setRoles] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
axios.post("http://localhost:4000/api/users/",{
  nombre:nombre,
  apellido:apellido,
  correo:correo,
  password:password,
  matricula:matricula,
  Roles:Roles

})
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
         
            <div className="formInput">
              <label htmlFor="file">
                image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input type="file" id="file" style={{display: "none"}} />
< input type = " file " id = " file " style = { { display : " none " } } />
</div >
<form onSubmit={handleSubmit}>
<div className= "formInput">
<label>Nombre</label>
<input type=" email " placeholder = "Agrega el Nombre" nombre="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
</div>
<div className = "formInput">
<label>Apellido</label>
<input type = " text " placeholder = "Agrega el apellido" nombre="apellido" value={apellido} onChange={(e) => setapellido(e.target.value)}/>
</div>
<div className = " formInput " >
<label > Correo </label>
<input type = " text " placeholder = "Correo Electronico" nombre="correo" value={correo} onChange={(e) => setcorreo(e.target.value)}/>
</div >
<div className = " formInput " >
<label > Contraseña </label>
<input type = " text " placeholder = "La contraseña se genera al escribir la palabra automatica" nombre="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
</div>
<div className = " formInput " >
<label > Matricula </label>
<input type = " text " placeholder = "283177" nombre="matricula" value={matricula} onChange={(e) => setmatricula(e.target.value)}/>
</div>
<div className = " formInput " >
  <label>Roles</label>
  < input type="text" placeholder = "Admin/Alumno/Docente " nombre="Roles" value={Roles} onChange={(e) => setRoles(e.target.value)}/>
</div >
< button type="submit" >Send </button>
</form >
          </div>
      </div>
    </div>
  </div>
);
};

export default Edit;
