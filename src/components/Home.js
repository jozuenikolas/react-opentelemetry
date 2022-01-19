import React from 'react';
import { BaseOpenTelemetryComponent } from '@opentelemetry/plugin-react-load';
class Home  extends BaseOpenTelemetryComponent{

  constructor(props){
    super(props)
    this.state = {
      results: null,
      isLoading: false
    }
  }


  buttonHandler() {
    this.setState({isLoading: true})
    const randomDelay = Math.random() * 10000; 
    setTimeout(() => {
      this.setState({
        isLoading: false,
        results: randomDelay
      })
    }, 
    randomDelay);
  }

  renderResults(){
    if(this.state.isLoading){
      return <div> Cargando resultados...</div>;
    } 
    if (!this.state.results){
      return (
        <div>Sin resultados</div>
      )
    }
    return (
      <div>
        La solicitud se retrasó {this.state.results} ms
      </div>
    )
  }

  render() {
      return (
        <div>
          <h1>
            Home App
          </h1>
          <button onClick={() => this.buttonHandler()} style={{marginBottom: '20px'}}>
            Hacer Petición
          </button>
          <div id="results">
            {this.renderResults()}
          </div>
        </div>
      )
  }
}

export default Home;
