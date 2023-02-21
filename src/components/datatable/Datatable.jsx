/*import "./datatable.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Link } from "react-router-dom";

function Datatable() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    axios('http://localhost:4000/api/users')
      .then(res => setDataTable(res.data))
      .catch(err => console.log(err))
  }, []);

   async function deleteDocument(userId) {
    const res =  await axios.delete("http://localhost:4000/api/users/" + userId);
    if (res.status === 204)
        setDataTable([...dataTable.filter(() => item._id !== userId)]);
}


  const column = [
    { heading: 'ID', value: '_id' },
    { heading: 'Nombre', value: 'nombre' },
    { heading: 'Apellido', value: 'apellido' },
    { heading: 'Correo Electronico', value: 'correo' },
    { heading: 'Matricula', value: 'matricula' },
    { heading: 'Accion', value: 'vfc'},
    
  ]

const Table = ({ data, column}) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => <TableRow item={item} column={column}/>)}
      </tbody>
    </table>
  )
}


const TableHeadItem = ({ item }) => <th>{item.heading}</th>

const TableRow = ({ item, column}) => (
  
  <tr>
    
    {column.map((columnItem) => {
    
      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') 
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
             
      }

      if (columnItem.value === "vfc") return <td>{item[`${columnItem.value}`]}<Link to={"/users/test/" +item._id}><button>Actualizar</button></Link><button onClick={() => deleteDocument(item._id)}>Eliminar</button></td>
      else return <td>{item[`${columnItem.value}`]}</td>
    })}
  
  </tr>



)




  return (
  
    <div class="Table" style={{ height: 400, width: '100%' }}>
      <h1>Usuarios</h1>
       <Table data={dataTable} column={column}/>  
       <div className="text-center" >
        <Link to={"/users/new/" }><button >Agregar User</button></Link>
        </div> 
        
    </div>
  
 
  );
}




export default Datatable;

*/

import "./datatable.scss";
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Link } from "react-router-dom";

function Datatable() {


  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");


const peticionGet=async()=>{
  await axios.get("http://localhost:4000/api/users")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
console.log(response.data)
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento) =>{
    if(elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.matricula.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
     ) {
      return elemento;
    } 
    return false;  
  }
  );
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[]);

async function deleteDocument(userId) {
  const res =  await axios.delete("http://localhost:4000/api/users/" + userId);
  if (res.status === 204)
      setUsuarios([...usuarios.filter((usuario) => usuario._id !== userId)]);
}

  return (
    <div className="App">
    <div className="containerInput">
    <div className="addButton">
    <Link to={"/users/edit/" }><button class="buttonadd"><span>Añadir</span></button></Link>
    </div>
      <input
        className="form-control inputBuscar"
        value={busqueda}
        placeholder="Búsqueda por Nombre o Matricula"
        onChange={handleChange}
      />
      <button className="btn btn-success">
        <FontAwesomeIcon icon={faSearch}/>
      </button>
    </div>
     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th>ID</th>
             <th>Nombre</th>
             <th>Apellido</th>
             <th>Correo</th>
             <th>Contraseña</th>
             <th>Matrciula</th>
             <th>Actualizar</th>
             <th>Eliminar</th>

           </tr>
         </thead>
         <tbody>
         {usuarios && 
           usuarios.map((usuario)=>(
             <tr key={usuario._id}>
               <td>{usuario._id}</td>
               <td>{usuario.nombre}</td>
               <td>{usuario.apellido}</td>
               <td>{usuario.correo}</td>
               <td>{usuario.password}</td>
               <td>{usuario.matricula}</td>
               <td><Link to={"/users/test/" + usuario._id}><button class="button button1">Actualizar</button></Link></td>
               <td><button  onClick={() => deleteDocument(usuario._id)} class="button button2">Eliminar</button></td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     </div>
   
  );
           }

export default Datatable;






/*
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Eliminar
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Lista de usuarios
        <Link to="/users/new" className="link">
          Agregar administrador
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable; */


