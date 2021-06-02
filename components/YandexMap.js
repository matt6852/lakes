import { YMaps, Map, Placemark } from "react-yandex-maps";
// import styles from '../../styles/Home.module.css'
import React, { useEffect } from "react";
import { useAppContext } from "context/state";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};

const coordinates = [
  [55.684758, 37.738521],
  [52.7317, 41.4433],
];

export default function YandexMap() {
  const { setSizeWinow, sizeWindow } = useAppContext();

  useEffect(() => {
    const handleMap = (e) => {
      const w = e.target.innerWidth;
      if (w < 775) {
        setSizeWinow(w);
      } else {
        setSizeWinow(1000);
      }
    };
    window.addEventListener("resize", handleMap);

    return () => {
      window.removeEventListener("resize", handleMap);
    };
  }, [sizeWindow]);

  return (
    <YMaps>
      <Map
        defaultState={mapData}
        width={"100"}
        height={sizeWindow < 776 ? "325px" : "445px"}
      >
        {coordinates.map((coordinate, index) => (
          <Placemark key={index} geometry={coordinate} />
        ))}
      </Map>
    </YMaps>
  );
}
