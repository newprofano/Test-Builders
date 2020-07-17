import React, {useEffect, useState} from 'react';

const bg = require('../../assets/bgTempo.png');

import Geolocation from '@react-native-community/geolocation';
import callApi from '../../services/api';
import {HttpMethod} from '../../core/Enums';

import {
  Container,
  UpdateIcon,
  IconContainer,
  Button,
  AttTime,
  Loading,
} from './styles';
import {
  formatDate,
  firstLetterToUpperCase,
} from '../../core/utils/helpersFunctions';
import {
  IOpenWeatherModel,
  ICoord,
} from '../../services/models/OpenWeatherModel';
import HomeComponent from '../../core/components/HomeComponent';

let currentDate: Date;
let formatedDate: string;

const Main: React.FC = () => {
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [climateData, setClimateData] = useState<IOpenWeatherModel | null>(
    null,
  );
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getLocaleAndClimate();
  }, []);

  function getLocaleAndClimate() {
    Geolocation.getCurrentPosition((info) => {
      const coordsObj: ICoord = {
        lat: info.coords.latitude,
        lon: info.coords.longitude,
      };

      findCoordinates(coordsObj);
      getHour();
    });
  }

  async function findCoordinates({lat, lon}: ICoord) {
    const response = await callApi<IOpenWeatherModel>(
      '/weather',
      HttpMethod.get,
      {
        lat,
        lon,
        units: 'metric',
        lang: 'pt_br',
      },
    );

    setClimateData(response.data);
    setLoad(true);
  }

  function getHour() {
    currentDate = new Date();
    formatedDate = formatDate(currentDate, 'iiii,  dd  MMMM');
    let idk = formatedDate.split(' ');
    formatedDate = idk.map(firstLetterToUpperCase).join(' ');

    setHour(currentDate.toLocaleTimeString('pt-br'));
    setDate(formatedDate);
  }

  return (
    <Container source={bg}>
      {load && climateData ? (
        <>
          <HomeComponent climateData={climateData} date={date} />
        </>
      ) : (
        <>
          <Loading>Sua Conexão ou GPS esta com problemas</Loading>
        </>
      )}
      <IconContainer>
        <AttTime>Atualizado as: {hour}</AttTime>
        <Button onPress={getLocaleAndClimate}>
          <UpdateIcon name="reload1" size={30}></UpdateIcon>
        </Button>
      </IconContainer>
    </Container>
  );
};

export default Main;
