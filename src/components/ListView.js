import React, { useState, useEffect } from "react";
import BoxModel from "../models/BoxModel";
import "./ListView.css";

const ListView = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    setBoxes(BoxModel.getAll());
  }, []);

  return (
    <div className="list-container">
      <h2 className="list-title">Box List</h2>
      {boxes.length === 0 ? (
        <p className="list-empty-message">No boxes have been added yet.</p>
      ) : (
        <table className="list-table">
          <thead>
            <tr>
              <th>Receiver Name</th>
              <th>Weight (kg)</th>
              <th>Box Color</th>
              <th>Destination Country</th>
              <th>Shipping Cost (INR)</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index} className="list-row">
                <td>{box.receiverName}</td>
                <td>{box.weight}</td>
                <td
                  style={{
                    backgroundColor: box.boxColor,
                  }}
                  className="list-color-box"
                ></td>
                <td>{box.destinationCountry}</td>
                <td>{box.shippingCost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListView;
