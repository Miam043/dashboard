import "./widget.scss";
//import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
//import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { AddModeratorOutlined, PersonOutlineRounded } from "@mui/icons-material";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";




const Widget = ({ type }) => {

  let data1;

  const [dataUsers,setDataUsers] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:4000/api/users')
  .then(res =>  setDataUsers(res.data.length) 
  )
  .catch(err => console.log(err))},[])

  //temporary
 const amount = dataUsers;
  
  switch (type) {
    case "user":
 
    data1 = {

      title: "Alumnos",
       link: "Ver todos los alumnos", 
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),

      }; 
      break;
    case "order":
      data1 = {
        title: "Docentes",
        isMoney: false,
        link: "Ver todas los docentes",
        icon: (
          <PersonOutlineRounded
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data1 = {
        title: "Administradores",
        link: "Ver todos los administradores",
        icon: (
          <AddModeratorOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data1.title}</span>
        <span className="counter">
          {data1.isMoney && "$"} {amount}
        </span>
        <Link to="/users" relative="path">
        <span className="link">{data1.link}</span>
        </Link>
      </div>
      <div className="right">
        </div>
        {data1.icon}
      </div>

  );
};


export default Widget;