import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';

import MainScreen from './pages/MainScreen';

import configStore from './store';

import './app.scss';

const store = configStore();

class App extends Component {
    config = {
        pages: ['pages/MainScreen', 'pages/picture/PictureDetail', 'pages/story/StoryDetail', 'pages/home/VideoDetail'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black',
        },
    };

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    render() {
        return (
            <Provider store={store}>
                <MainScreen />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById('app'));
