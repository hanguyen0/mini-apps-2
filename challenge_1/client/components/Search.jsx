import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log(event.target)
        this.setState({term: event.target.value});
      }

      handleSubmit() {
        // alert('A name was submitted: ' + this.state.value);
        this.props.search(this.state.term);
        event.preventDefault();
      }

    render() {
        const {term} = this.state;
        // console.log(term);
        return(
            <div>
                <input type="text" value={term} onChange={this.handleChange} />
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default Search;