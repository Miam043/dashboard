import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { correo, password } = this.state;
    console.log(correo, password);
    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Inicio de sesión exitoso");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./HomePageInstS";
        }
      });
  }

  render() {
    return (
      <section>
        <h1>INSTITUAQ</h1>
        <form className="formulario" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>INICIO DE SESIÓN</legend>

            <div className="campo">
              <label>Correo</label>
              <input
                type="email"
                className="form-control"
                placeholder="Introduce Correo"
                onChange={(e) => this.setState({ correo: e.target.value })}
              />
            </div>

            <div className="campo">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Introduce Contraseña"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <div className="alinear-derecha flex">
              <input className="boton w-sm-100" type="submit" value="Entrar" />
            </div>
            <nav className="navegacion">
              <a className="navegacion__registro navegacion__registro--activo" href="./user">Registrate</a>
            </nav>
            <a href="./">
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </fieldset>
        </form>
      </section>
    )
  }
}
