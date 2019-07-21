import * as React  from 'react';
import Button from 'antd/es/button';
import Search from '../../components/search/Search';

interface PieceProps {
    color?: "red" | "black";
}
interface State {
    count: any;
}

class App extends React.Component<PieceProps, State>{

    constructor(props: PieceProps) {
        super(props);
        this.state = {
                    count: 0
        };
    }

    private loginAction = (event: React.MouseEvent<HTMLElement>) =>{
        console.log("llll");
        this.setState(({count}) => ({
          count: count + 1
        }));
    };

    render() {
        return (
            <section>
                <Search>Primary</Search>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </section>
        )
    }

}
export default App;
