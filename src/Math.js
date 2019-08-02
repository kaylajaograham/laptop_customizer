import React from 'react';

class Math extends React.Component {

    render () {
        const total = Object.keys(this.props.state.selected)
        .reduce((acc, curr) => acc + this.props.state.selected[curr].cost, 0); 

        return (
            <section className="total">
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }
             </div>
             </div>
             </section>
        )
    }
}

export default Math;