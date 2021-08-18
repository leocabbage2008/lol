import "./index.css";
import React from "react";

import Champion from "../../components/Champion";
import Popup from "../../components/Popup";

import championServices from "../../services/champions";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: {},
      popup: false,
      popupText: "",
      popupImg: "",
    };
  }
  componentDidMount = async () => {
    const champions = await championServices.fetchAllChampions();
    const state = this.state;
    state.champions = champions;
    this.setState(state);
  };
  champClickHandler = (name, img) => {
    const state = this.state;
    state.popup = true;
    state.popupText = name;
    state.popupImg = img;
    this.setState(state);
  };
  closeHandler = () => {
    const state = this.state;
    state.popup = false;
    this.setState(state);
  };
  render() {
    console.log(this.state.champions);
    return (
      <div className="App">
        <h1>League of Legends</h1>
        <div className="cardCont">
          {this.state.champions && Object.entries(this.state.champions).map((v, i) => {
            return (
              <Champion
                data={v}
                key={i}
                clickHandler={this.champClickHandler}
              />
            );
          })}
        </div>
        <Popup
          display={this.state.popup}
          header={this.state.popupText}
          img={this.state.popupImg}
          closeHandler={this.closeHandler}
        />
      </div>
    );
  }
}

export default LandingPage;
