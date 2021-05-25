import React from "react";
import { Link } from "react-router-dom";

export const Devices = (props) => {
  const devices = props.devices;
  return (
    <>
      <div className="col-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Device</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
          {devices && devices.map((device) => <tr><td>{device.id}</td> <td>{device.id}</td> <td>{device.name}</td> <td>{device.desired.value}{device.desired.unit==='boolean'?<p></p>:device.desired.unit}</td></tr>)}
          </tbody>
        </table>
      </div>
    </>
  );
};
