import { View, Image } from '@tarojs/components';
import Base from '../../components/Base';
import Container from '../../components/Container';

export default class PictureDetail extends Base {
    state = {
        images: [
            'https://www.22091.xyz//file/images/fm2247m7e3/358671-1.jpg',
            'https://www.22091.xyz//file/images/fm2247m7e3/358671-2.jpg',
            'https://www.22091.xyz//file/images/fm2247m7e3/358671-3.jpg',
            'https://www.22091.xyz//file/images/fm2247m7e3/358671-4.jpg',
            'https://www.22091.xyz//file/images/fm2247m7e3/358671-5.jpg',
        ],
    };
    render() {
        const { images } = this.state;
        return (
            <Container>
                <View className="Picture-PictureDetail">
                    {images.map(image => (
                        <Image src={image} className="image" mode="widthFix" lazyLoad key={image} />
                    ))}
                </View>
            </Container>
        );
    }
}
