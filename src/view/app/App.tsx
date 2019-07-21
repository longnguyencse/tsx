import * as React from 'react';
import {Button, Card, Col, Icon, Input, Menu, message, Row, Upload} from 'antd';
import King from '../../assets/images/kingOfDom.jpg';

const { Meta } = Card;
const { Search } = Input;
const {SubMenu} = Menu;

interface PieceProps {
    color?: "red" | "black";
}

interface State {
    count: any;
    current: 'mail',
}

class App extends React.Component<PieceProps, State> {

    constructor(props: PieceProps) {
        super(props);
        this.state = {
            count: 0,
            current: 'mail',
        };
    }

    private loginAction = (event: React.MouseEvent<HTMLElement>) => {
        console.log("llll");
        this.setState(({count}) => ({
            count: count + 1
        }));
    };

    private handleClick = (e: any) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    private localProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    render() {
        return (
            <div>
                <section>
                    <Row>
                        <Col span={4}/>
                        <Col span={16}>
                            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="mail">
                                    <Icon type="mail"/>
                                    Thể Loại
                                </Menu.Item>
                                <SubMenu title={
                                    <span className="submenu-title-wrapper"><Icon type="setting"/>
                                    Quốc Gia
                                    </span>}
                                >
                                    <Menu.ItemGroup title="Mỹ">
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup title="Châu Á">
                                        <Menu.Item key="asia:1">Trung Quốc</Menu.Item>
                                        <Menu.Item key="asia:2">Nhật Bản</Menu.Item>
                                    </Menu.ItemGroup>
                                </SubMenu>
                            </Menu>
                            <Search  placeholder="input search text" style={{ width: 200, position: "absolute", right: "0px", top: "10px" }} onSearch={value => console.log(value)} enterButton />
                        </Col>
                        <Col span={4}/>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div style={{ margin: "20px 20px"}}>
                                <span> Upload Phim </span>
                                <div>
                                    <Upload {...this.localProps}>
                                        <Button>
                                            <Icon type="upload" /> Click to Upload
                                        </Button>
                                    </Upload>
                                </div>
                            </div>

                            <div style={{ margin: "20px 20px"}}>
                                <span> Phim Hiện Có </span>
                            </div>
                            <section title={'Phim Hiện có'}>
                                <Row>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src={King} />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Col>

                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src={King} />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card>
                                    </Col>

                                </Row>
                            </section>
                        </Col>

                        <Col span={4}></Col>
                    </Row>
                </section>
                <footer style={{backgroundColor: "black"}}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={4}/>
                                <Col span={16}>
                                    <ul>
                                        <li>Phim Mới</li>
                                        <li>Top Phim 2019</li>
                                    </ul>
                                </Col>
                                <Col span={4}/>
                            </Row>
                        </Col>
                    </Row>
                </footer>
            </div>
        )
    }

}

export default App;
