import Taro, { Component, Events } from '@tarojs/taro';
import { View, Button, Text, Image, Video, WebView, Input, Slider } from '@tarojs/components';
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
    state = {
        data: [{ age: 1 }, { age: 2 }, { age: 3 }],
    };
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}

export default Index;
