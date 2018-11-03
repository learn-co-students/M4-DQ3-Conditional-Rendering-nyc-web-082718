import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state={
    boxToDisplay: "profile"
  }

  renderDisplay = ()=>{
    if (this.state.boxToDisplay === "profile") {
      return <Profile />
    } else if (this.state.boxToDisplay === "photo") {
      return <Photos />
    } else if (this.state.boxToDisplay === "cocktail") {
      return <Cocktails />
    } else if (this.state.boxToDisplay === "pokemon"){
      return <Pokemon />
    }
  }

  handleClick = (event) =>{
    this.setState({
      boxToDisplay: event
    });
  }

  render() {
    console.log(this.state.boxToDisplay)
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.renderDisplay()}
      </div>
    )
  }

}

export default MainBox
