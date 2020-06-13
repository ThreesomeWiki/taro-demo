import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import Base from '../../components/Base';
import Container from '../../components/Container';
import TextCard from '../../components/TextCard';

@connect(
    ({}) => ({}),
    dispatch => ({})
)
class Picture extends Base {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    tagName: '熟女乱伦',
                    list: [
                        {
                            id: 1,
                            title: '百变美腿高跟达人(17P)',
                        },
                        {
                            id: 2,
                            title: 'i惹火半球令人遐想无边【45P】',
                        },
                    ],
                },
                {
                    id: 2,
                    tagName: '国产图片',
                    list: [
                        {
                            id: 1,
                            title: '百变美腿高跟达人(17P)',
                        },
                        {
                            id: 2,
                            title: 'i惹火半球令人遐想无边【45P】',
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
                <View className="Picture">
                    {data.map(item => (
                        <TextCard
                            key={item.id}
                            data={item}
                            onClick={data => {
                                Taro.navigateTo({ url: './picture/PictureDetail' });
                            }}
                        />
                    ))}
                </View>
            </Container>
        );
    }
}

export default Picture;
