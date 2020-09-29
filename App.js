import React from 'react';
import AdaPay from './PayMoudle';
import {Button, StyleSheet, View} from 'react-native';

// export default class App extends Component {
const App: () => React$Node = () => {
  // 生成订单并唤起支付宝
  function _onAlipay() {
    // 服务端API
    fetch('https://adapay-test-python.cloudpnr.com/api/v1/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 请求参数
      body: JSON.stringify({
        app_id: 'app_7d87c043-aae3-4357-9b2c-269349a980d6',
        env: '1',
        expend: {
          auth_code: '',
        },
        goods_desc: '测试商品',
        goods_title: '测试商品',
        pay_amt: '0.01',
        pay_channel: 'alipay',
        prod_mode: '0',
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('订单信息：');
        console.log(responseJson.data);
        AdaPay.doPay(responseJson.data, (PayResult) => {
          console.log('支付信息：');
          console.log(PayResult);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="支付宝"
          onPress={() => {
            _onAlipay();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default App;
