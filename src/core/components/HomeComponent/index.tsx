import React from 'react';

import {FeelsLike, Separator} from '../../../pages/Main/styles';
import {IOpenWeatherModel} from '../../../services/models/OpenWeatherModel';
import {firstLetterToUpperCase} from '../../utils/helpersFunctions';
import {
  AditionalInfo,
  AditionalText,
  CityName,
  DateText,
  Desc,
  MinMaxContainer,
  MinMaxText,
  Temp,
} from './styles';

interface IProps {
  climateData: IOpenWeatherModel;
  date: string;
}

const HomeComponent: React.FC<IProps> = ({climateData, date}) => {
  return (
    <>
      <CityName>
        {climateData.name}, {climateData.sys.country}
      </CityName>
      <DateText>{date}</DateText>
      <Temp>{Math.trunc(climateData.main.temp)}º</Temp>
      <Desc>{firstLetterToUpperCase(climateData.weather[0].description)}</Desc>
      <MinMaxContainer>
        <MinMaxText>Mín: {Math.trunc(climateData.main.temp_min)}º</MinMaxText>
        <Separator />
        <MinMaxText>Máx: {Math.trunc(climateData.main.temp_max)}º</MinMaxText>
      </MinMaxContainer>
      <FeelsLike>
        Sensação Térmica: {Math.trunc(climateData.main.feels_like)}º
      </FeelsLike>

      <AditionalInfo>
        <AditionalText>Vel. Vento: {climateData.wind.speed}km/h</AditionalText>
        <AditionalText>Umidade: {climateData.main.humidity}%</AditionalText>
        <AditionalText>Pressão: {climateData.main.pressure}hPa</AditionalText>
      </AditionalInfo>
    </>
  );
};

export default HomeComponent;
