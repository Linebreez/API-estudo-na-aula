import React, { Component } from "react";
import axios from "axios";

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=674e056a0305570de7e7dea12691bb59"
});

class SiteFilmes extends Component {
  state = {
    listaFilmes: []
  };

  async componentDidMount() {
    const response = await apiFilmes.get();

    const filmes = response.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      listaFilmes: filmes
    });
    console.log("filmes:", filmes);
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listaFilmes.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <img src={item.poster_path} alt="" />
            </div>
          ))}
        </div>
        <div>))}</div>
      </div>
    );
  }
}

export default SiteFilmes;
