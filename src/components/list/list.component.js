import React from "react";
import './list.css';
class List extends React.Component {

    render() {
        const { itemsList } = this.props
        console.log(itemsList[0])

        return (
            <div>
                <p>Brands<br /><br /></p>
                {
                    itemsList.map((item) => {
                        return (
                            <div className="itemresult">
                                <div key={item.id}>{item.brand}</div>
                            </div>
                        )
                    })
                }

                <p>Items<br /><br /></p>
                {
                    itemsList.map((item) => {
                        return (
                            <div className="itemresult">
                                <div key={item.id}>{item.item}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default List