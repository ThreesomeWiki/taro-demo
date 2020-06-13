import Base from '../../../components/Base';
import { View, Text, Image } from '@tarojs/components';

export default class VideoCard extends Base {
    render() {
        const { data = {}, onClick } = this.props;
        return (
            <View
                className="Home-VideoCard"
                onClick={() => {
                    onClick && onClick();
                }}
            >
                <Image src={data.image} className="image" mode="widthFix" lazyLoad />
                <Text className="title">{data.title}</Text>
            </View>
        );
    }
}
