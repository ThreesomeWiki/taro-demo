import Taro, { Component, Events } from '@tarojs/taro';
import { View, Button, Text, Image, Video, WebView, Input, Slider, Textarea } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { add, minus, asyncAdd } from '../../actions/counter';
import './index.scss';

@connect(
    ({ counter }) => ({
        counter,
    }),
    dispatch => ({})
)
class Index extends Component {
    static options = {
        addGlobalClass: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [{ age: 1 }, { age: 2 }, { age: 3 }],
        };
    }

    componentDidMount() {}

    render() {
        const data = [
            {
                title: '《少妇白洁的故事》连载第九章',
                score: 7,
            },
            {
                title: '《少妇白洁的故事》连载第八章',
                score: 9,
            },
        ];
        return (
            <View className="Index">
                {data.map(v => (
                    <View className="flex-row-between-center list">
                        <Text className="title">{v.title}</Text>
                        <Text className="score">{`${v.score}`.padEnd(2, 0)}</Text>
                    </View>
                ))}
                <Textarea
                    value="上了车，冷小玉一贯的不看着人说话，“白洁，还在这当这个破老师，你可真能受得了，别告诉我你喜欢这份神圣的职业。”"
                    className="input"
                />
                <Image
                    src="http://www.ais02.com/20181228/20181125_230739_205.jpg"
                    style={{ width: '100%', height: '100%' }}
                />
                <Image
                    src="http://www.ais02.com/20181228/123asdassdfdsh%20(1).jpg"
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
        );
    }
}

export default Index;
