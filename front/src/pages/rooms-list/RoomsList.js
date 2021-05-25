import React, { useEffect, useState } from "react";
import "./RoomsList.scss";
import { getHomeById } from "../../services/utils";
import { useParams } from 'react-router-dom';
import { Card } from "../../components/card/RoomCard"
import { Devices } from "../../components/devices/Devices";
import { PieChart }  from "../../components/piechart/PieChart"


export const RoomsList = () => {
  const [selectedRoomDevices, setSelectedRoomDevices] = useState(null);
  const [home, setHome] = useState([]);
  let { id } = useParams();

  const rooms = home.rooms;
  var dataForPie = [];

  useEffect(() => {
    getHomeById(id).then((data) => setHome(data));
  }, []);

  rooms && rooms.map((room)=> dataForPie.push([room.name, room.powerUsage.value]))
  return (
    <div className="container home">
      <h1>
        Mis habitaciones
      </h1>
      <div className="row">
      {rooms && rooms.map((room)=><p onClick={() => setSelectedRoomDevices(room.devices)}><Card name={room.name} homeId={room.homeId} devices={room.devices}></Card></p>)}
      {selectedRoomDevices ? <Devices devices={selectedRoomDevices}></Devices>:<p></p>}
      </div>
      <PieChart data={dataForPie} width={200} height={200} innerRadius={0} outerRadius={100}></PieChart>
    </div>
    
  );
};
