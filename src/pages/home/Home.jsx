


import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
//import Featured from "../../components/featured/Featured";
//import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


import React, { Component } from 'react';
//import { Outlet } from 'react-router-dom';

export default class Home extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/api/data/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  }
  render() {
    return (
      <main>
 <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
        </div>
        <div className="listContainer">
          <div className="listTitle">Solicitudes</div>
          <Table />
        </div>
      </div>
    </div>
      </main>
    )
  }
}






