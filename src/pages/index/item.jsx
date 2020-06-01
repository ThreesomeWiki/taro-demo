import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    const { onPress } = this.props;
    console.log("is props:", this.props.data);
    return (
      <View
        onClick={() => {
          onPress && onPress();
        }}
      >
        <Text>{this.props.data || "124"}</Text>
      </View>
    );
  }
}
