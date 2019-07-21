import * as React from 'react';

interface FilmProps {
    name?: string,
    avater?: any,
}

interface FilmState {
    name: string,
}
class Film extends React.Component<FilmProps, FilmState> {


    constructor(props: FilmProps) {
        super(props);
        this.state = {
            name: 'Long kaka',
        }
    }

    render() {
        return (
            "Hi"
        )
    }
}
