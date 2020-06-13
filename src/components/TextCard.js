import Base from './Base';
import { View, Text } from '@tarojs/components';
import './TextCard.scss';

export default class TextCard extends Base {
    render() {
        const { data = { list: [] }, onClick } = this.props;
        return (
            <View className="TextCard">
                <View className="tag">
                    <Text className="tag-name">{data.tagName}</Text>
                </View>
                {data.list.map(item => (
                    <View
                        className="list"
                        key={item.id}
                        onClick={() => {
                            onClick && onClick(item);
                        }}
                    >
                        <Text className="title">{item.title}</Text>
                    </View>
                ))}
            </View>
        );
    }
}
