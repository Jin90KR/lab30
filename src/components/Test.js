import React from 'react';
import './Test.css';
import List from '../components/list/list.component';
import Inputbox from '../components/inputbox/inputbox.component';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searcheditems: '',

    };
  }


  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(things => {
        console.log(things)
        this.setState(
          () => ({
            items: things
          })
        );
      })
  }

  handleChange = (event) => {
    const searcheditems = event.target.value.toLowerCase();


    this.setState(() => {
      return {
        searcheditems: searcheditems
      }
    })
  }

  render() {
    const filteredItems = this.state.items.filter((item) => {
      return item.brand.toLowerCase().includes(this.state.searcheditems)
    }
    )

    console.log(this.state.searcheditems)
    console.log(filteredItems)
    return (
      <div className='brand'>
        <Inputbox handleChange={this.handleChange} />
        <List show={this.state.show} itemsList={filteredItems} />
      </div>
    );
  }
}

export default Test;
