import './modal.css';
import './Header.css';
import { RxCross2 } from "react-icons/rx";
import Searchbrands from './Searchbrands';
import React from 'react';
import './Test.css';
import List from '../components/list/list.component'
import Inputbox from './inputbox/inputbox.component';
import Searchpopular from './Searchpopular';


class Modal extends React.Component {
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
        const { handleClose, show, children } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        const filteredItems = this.state.items.filter((item) => {
            return item.brand.toLowerCase().includes(this.state.searcheditems)
        });

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {children}
                    <div className='modal-top'>
                        <div className='inputbox'>
                            <Inputbox handleChange={this.handleChange} />
                        </div>

                        <button type="button" onClick={handleClose} className='xbtn'>
                            <RxCross2 />
                        </button>
                    </div>

                    <div className='modal-mid'>
                        <div className='modal-sale'>
                            <p>Search Monster sale</p>
                            <ol>
                                <li>Brand Day</li>
                                <li>Special Offers</li>
                                <li>72H Flash Sale</li>
                                <li>Forward K-Brands</li>
                            </ol>
                        </div>
                        <div className='modal-searchresult'>
                            <List itemsList={filteredItems} />
                        </div>
                        <div className='modal-brands'>
                            <Searchbrands />
                        </div>

                        <div className='modal-popular'>
                            <Searchpopular />
                        </div>
                    </div>
                </section>
            </div>
        );
    };
}



export default Modal;