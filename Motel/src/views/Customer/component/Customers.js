import React from 'react';
import {
  Container,
  Card,
  CardItem,
  Button,
  Segment,
  Content,
  Text,
  Label,
} from 'native-base';

import ListCustomer from './ListCustomer';
import ListContact from './ListContact';

export default function SegmentOutsideHeaderExample(props) {
  const {actions, tabs, isLogin, navigation} = props;
  if (isLogin === true) {
    return (
      <Container>
        <Segment>
          <Button
            first
            active={tabs === 'customers'}
            onPress={() => actions.onChangeTab({value: 'customers'})}>
            <Text>Khách Hàng</Text>
          </Button>
          <Button
            active={tabs === 'contacts'}
            onPress={() => actions.onChangeTab({value: 'contacts'})}>
            <Text>Hợp Đồng</Text>
          </Button>
        </Segment>
        {tabs === 'customers' ? (
          <Content padder>
            <ListCustomer {...props} />
          </Content>
        ) : (
          <Content padder>
            <ListContact {...props} />
          </Content>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <Card>
          <CardItem>
            <Label>Vui lòng đăng nhập để có thể thực hiện chức năng này</Label>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={() => navigation.navigate('Login')}>
              <Text>Đăng nhập</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
