import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    active: null
  }

  setActive = (event) => {
    this.setState({
      active: event.target.id
    })
  }

  readActive = () => {
    return this.state.active
  }

  displayActive = () => {
    console.log(this.state)
    switch (this.state.active) {
      case 'profile':
        return <Profile />
        break;
      case 'photo':
        return <Photos />
        break;
      case 'cocktail':
        return <Cocktails />
        break;
      case 'pokemon':
        return <Pokemon />
        break;
      default:
        return null
        break;
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar
          setter={this.setActive}
          getter={this.readActive}
        />
        {this.displayActive()}
      </div>
    )
  }

}

export default MainBox
