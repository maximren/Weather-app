import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends PureComponent {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.state = {
            city: ''
        }

        this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault();

		const city = {
			task: this.state.city
		}
		this.props.onAdd(city);
    }
    
  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <label>
                Search city:
            </label>
            <input placeholder="Berlin, Paris, Madrid..." name="city" type="text" 
            onChange={this.onChange} value={this.state.city}></input>
            <button type="submit">Check weather</button>
        </form>
    )
  }
}

export default SearchForm;
