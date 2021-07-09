import { YMaps, Map, Placemark } from "react-yandex-maps";
// import styles from '../../styles/Home.module.css'
import React, { useEffect } from "react";
import { useAppContext } from "context/state";

const mapData = {
  center: [60.1922159, 29.0164543],
  zoom: 7,
};

const coordinates = [
  [60.188393, 29.065422],
  [59.973707, 30.3005083],
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
