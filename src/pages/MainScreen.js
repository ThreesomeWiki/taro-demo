import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Base from '../components/Base';
import Container from '../components/Container';
import Home from './home/Home';
import Picture from './picture/Picture';
import Story from './story/Story';

export default class MainScreen extends Base {
    state = { activeIndex: 2 };
    componentDidMount() {
        Taro.getSystemInfo().then(res => {
            console.log(res);
        });
    }

    onNavChange = index => {
        this.setState({ activeIndex: index });
    };

    render() {
        const { activeIndex } = this.state;
        const navs = ['视频', '图片', '小说'];
        let page = null;
        if (activeIndex === 0) {
            page = <Home />;
        } else if (activeIndex === 1) {
            page = <Picture />;
        } else if (activeIndex === 2) {
            page = <Story />;
        }
        return (
            <Container>
                <View className="MainSceen">
                    {page}
                    <View className="nav flex-row-between-center">
                        {navs.map((nav, key) => (
                            <View
                                key={nav}
                                className="item flex-column-center-center"
                                onClick={() => {
                                    this.onNavChange(key);
                                }}
                            >
                                <Text className={`text ${activeIndex === key ? 'text-active' : ''}`}>{nav}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </Container>
        );
    }
}
