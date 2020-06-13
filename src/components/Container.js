import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Base from './Base';
import './Container.scss';

export default class Container extends Base {
    state = { height: 0 };
    componentDidMount = () => {
        const { screenHeight } = Taro.getSystemInfoSync();
        this.setState({ height: screenHeight });
    };
    render() {
        const { height } = this.state;
        const { tab } = this.props;
        if (!height) return null;
        return (
            <View className="flex-column flex1 Base" style={{ minHeight: height + 'px' }}>
                {this.props.children}
                {tab ? <View className="tab" /> : null}
            </View>
        );
    }
}
