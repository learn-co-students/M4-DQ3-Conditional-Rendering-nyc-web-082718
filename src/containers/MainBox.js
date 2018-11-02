import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: ''
    }
  }

  clicked = (event) => {
    this.setState({
      isClicked: event.target.id
    })
  }

  show = () => {
    console.log('hit show')
    if (this.state.isClicked === 'profile') {
      return <Profile />
    }
    if (this.state.isClicked === 'photo') {
      return <Photos />
    }
    if (this.state.isClicked === 'cocktail') {
      return <Cocktails />
    }
    if (this.state.isClicked === 'pokemon') {
      return <Pokemon />
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar setClicked={this.clicked}/>
        {this.show()}
      </div>
    )
  }

}

export default MainBox
