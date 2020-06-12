import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            term:null
        }
        this.getTerm = this.getTerm.bind(this);
    }

    componentDidMount() {
        axios.get('/events')
        .then((res) => {
            // console.log(res.data)
            this.setState({events: res.data});
        })
        .catch((err) => {
            console.log(err);
        })
    }

    getTerm(term) {
        console.log(term);
    }

    render() {
        return (
            <div>
                <Search search={this.getTerm}/>
            </div>
        )
    }
}

export default App;