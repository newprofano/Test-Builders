import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const CityName = styled.Text`
  margin-top: 30px;
  font-size: ${RFValue(35)}px;
  color: white;
`;
export const DateText = styled.Text`
  color: white;
  font-size: ${RFValue(18)}px;
`;

export const Temp = styled.Text`
  font-size: ${RFValue(65)}px;
  color: white;
`;

export const Desc = styled.Text`
  font-size: ${RFValue(33)}px;
  color: white;
  margin-bottom: 10px;
`;

export const MinMaxContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const MinMaxText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${RFValue(20)}px;
`;

export const AditionalInfo = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
  border-radius: 10px;
  width: 92%;
`;

export const AditionalText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: ${RFValue(20)}px;
`;
