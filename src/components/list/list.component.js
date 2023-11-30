import React from "react";
import './list.css';
class List extends React.Component {

    render() {
        const { itemsList } = this.props
        

        return (
            <div>
                <p>Brands<br /><br /></p>
                {
                    itemsList.map((item) => {
                        return (
                            <div key={item.id} className="itemresult">
                                <div>{item.brand}</div>
                            </div>
                        )
                    })
                }

                <p>Items<br /><br /></p>
                {
                    itemsList.map((item) => {
                        return (
                            <div key={`items${item.id}`} className="itemresult">
                                <div>{item.item}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default List