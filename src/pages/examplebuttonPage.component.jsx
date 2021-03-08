import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      showChart: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  
  onButtonClick(){
    this.setState({
        showChart: true
    });
  };

  render() {

    let chart = null;

    const options = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true, //Change to false
      animationDuration: 1200, //Change it to 2000		
      title:{
        text: "Basic Column Chart in React"
      },
      data: [
      {
        type: "column",
        dataPoints: [
          { label: "apple",  y: 10  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
        ]
      }
      ]
    };

    if ( this.state.showChart ) {
        chart = (
        <div>
          <CanvasJSChart
          options={options}
          onRef={ref => (chart = ref)} 
        />
        </div>
        )
    }

    return (
      <div>
        <button className="btn" onClick={this.onButtonClick}>Click to render chart</button>
        {chart}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

//export default App;
//It is possible this export breaks the code?
//It might also be our website which breaks the code, it it possible we could load it seperate from the CSS/HTML header stuff?

//this code is from https://stackblitz.com/edit/canvasjs-react-render-chart-on-button-click?file=index.js
//check out this code by copy and pasting it into dashboardPage.component.jsx