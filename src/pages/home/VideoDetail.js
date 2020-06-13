import { View, Video } from '@tarojs/components';
import Base from '../../components/Base';
import Container from '../../components/Container';

export default class VideoDetail extends Base {
    render() {
        return (
            <Container>
                <View className="Home-VideoDetail">
                    <Video className="video" />
                </View>
            </Container>
        );
    }
}
