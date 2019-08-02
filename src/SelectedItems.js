import React from 'react';

class SelectedItems extends React.Component {

    render () {
        const summary = Object.keys(this.props.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.state.selected[key].cost) }
            </div>
        </div>); 

        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
             </section>
        )
    }
}

export default SelectedItems;