import React, { useState } from "react";
import "./multipleInput.scss";

const MultipleInput = () => {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceAdd = (e) => {
    setServiceList((prev) => [...prev, { service: "" }]);
  };
  const handleServiceRemove = (index) => {
    console.log(index);
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };
  console.log(serviceList);
  return (
    <form className="App">
      <div className="form-field">
        <label htmlFor="service">Service(s)</label>
        {serviceList.map((service, index) => {
          return (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={service.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {serviceList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="add-btn"
                  >
                    <span>Add a Service</span>
                  </button>
                )}
              </div>
              {serviceList.length > 1 && (
                <div className="second-division">
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
};

export default MultipleInput;
