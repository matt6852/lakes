import { YMaps, Map, Placemark } from "react-yandex-maps";
// import styles from '../../styles/Home.module.css'

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [52.7317, 41.4433],
];



export default function YandexMap() {
    return (
      <YMaps>
        <Map
          defaultState={mapData}
          width={"100"}
          height={ "445px"}
        >
          {coordinates.map((coordinate, index) => (
            <Placemark key={index} geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
    );
}
