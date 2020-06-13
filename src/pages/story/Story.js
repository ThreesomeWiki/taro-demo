import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Base from '../../components/Base';
import Container from '../../components/Container';
import TextCard from '../../components/TextCard';

@connect(
    ({}) => ({}),
    dispatch => ({})
)
class Story extends Base {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    tagName: '都市言情',
                    list: [
                        {
                            id: 1,
                            title: '背着老公玩多P',
                        },
                        {
                            id: 2,
                            title: '我穿着開胸的大Ｖ吊帶連身裙被双管齐下',
                        },
                    ],
                },
                {
                    id: 2,
                    tagName: '人妻熟女',
                    list: [
                        {
                            id: 1,
                            title: '插破闷骚女友的处女膜破',
                        },
                        {
                            id: 2,
                            title: '一次美丽的约会',
                        },
                    ],
                },
            ],
        };
    }

    render() {
        const { data } = this.state;
        return (
            <Container tab>
                <View className="Story">
                    {data.map(item => (
                        <TextCard
                            data={item}
                            key={item.id}
                            onClick={data => {
                                Taro.navigateTo({ url: './story/StoryDetail' });
                            }}
                        />
                    ))}
                </View>
            </Container>
        );
    }
}

export default Story;
