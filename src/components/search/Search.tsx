import * as React from 'react';
import {Component} from "react";

interface SearchProps {
    name?: any
}

interface SearchState {
    name?: any;
}
class Search extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);
        this.state = {
            name: 'long ka'
        }
    }

    render() {
        return (
            <div>
                <span>search</span>
            </div>
        )
    }
}

export default Search;
