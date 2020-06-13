import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Base from '../../components/Base';
import Container from '../../components/Container';
import VideoCard from './components/VideoCard';

@connect(
    ({}) => ({}),
    dispatch => ({})
)
class Home extends Base {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    image: 'https://www.22091.xyz//72vod/4b767573/vod.jpg',
                    title: '极品黑丝女王调教贱男舔阴吃粑粑',
                },
                {
                    id: 2,
                    image: 'https://www.22091.xyz//72vod/11f9b17a/vod.jpg',
                    title: '极品美女主播女王气质被小鲜肉后入',
                },
                {
                    id: 3,
                    image: 'https://www.22091.xyz//72vod/2be902c2/vod.jpg',
                    title: '酒店约操美容院巨乳小美女',
                },
            ],
        };
    }

    render() {
        const { data } = this.state;
        return (
            <Container tab>
                <View className="Home">
                    {data.map(item => (
                        <VideoCard
                            data={item}
                            key={item.id}
                            onClick={() => {
                                Taro.navigateTo({ url: './home/VideoDetail' });
                            }}
                        />
                    ))}
                </View>
            </Container>
        );
    }
}

export default Home;
