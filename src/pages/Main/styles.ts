import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Loading = styled.Text`
  color: black;
  font-size: 50px;
  text-align: center;
  color: white;
`;

export const IconContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  margin-right: 10px;
  margin-bottom: 10px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 25px;
`;

export const UpdateIcon = styled(Icon)`
  height: 50px;
  width: 50px;
  align-items: center;
  padding: 9px;
  color: white;
  border-radius: 25px;
  background-color: rgb(0, 116, 172);
`;

export const AttTime = styled.Text`
  color: white;
  font-size: ${RFValue(20)}px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 18px;
  background-color: rgba(255, 255, 255, 0.4);
  align-content: center;
`;

export const FeelsLike = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${RFValue(18)}px;
  margin-bottom: 70px;
`;
