import React from "react";

class Inputbox extends React.Component {

    render() {
        const { handleChange } = this.props
        return (
            <div>
                <input className='brandsearch' placeholder='Search Brands' onChange={handleChange} />
            </div>
        )
    }
}

export default Inputbox