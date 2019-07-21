import * as React  from 'react';

interface PieceProps {
    color?: "red" | "black";
}
interface State {
    count?: any;
}

class App extends React.Component<PieceProps, State>{

    constructor(props: PieceProps) {
        super(props);
        this.state = {
                    count: 0
        };
    }

    private loginAction = (event: React.MouseEvent<HTMLElement>) => {
        console.log("llll");
    }

    render() {
        return (
            <button onClick={this.loginAction}>Login</button>
        )
    }

}
export default App;
