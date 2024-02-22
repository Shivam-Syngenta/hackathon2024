import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import FormItem from "antd/es/form/FormItem";
import { Option } from "antd/es/mentions";
import moment, { Moment } from "moment";
import data from '../res/response.json'
import { generateGraphData } from "../methods";
export const FormComponent = ({setData}) => {
  const [lat, setLat] = useState(39.7837304);
  const [lng, setLng] = useState(-100.445882);
  const [cropName, setCropName] = useState();
  const [cropVariety, setCropVariety] = useState();
  const [plantingDate, setPlantingDate] = useState();
  const handleButton = () =>{
    setData(generateGraphData(data))
  }
  function handlePlantingDate(date, dateString) {
    setPlantingDate(dateString);
  }
  return (
    <Form>
      <FormItem label="Latitude:">
        <InputNumber
          style={{ width: "10vw" }}
          value={lat}
          onChange={(e) => setLat(e)}
        />
      </FormItem>
      <FormItem label="Longitude:">
        <InputNumber
          style={{ width: "10vw" }}
          value={lng}
          onChange={(e) => setLng(e)}
        />
      </FormItem>
      <FormItem label="CropName:">
        <Select
          style={{ width: "10vw" }}
          allowClear={true}
          placeholder="Enter Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e)}
        >
          <Option value="CORN" key="CORN">
            CORN
          </Option>
        </Select>
      </FormItem>
      <FormItem label="Crop Variety:">
        <Select
          style={{ width: "10vw" }}
          allowClear={true}
          placeholder="Enter Crop Name"
          value={cropVariety}
          onChange={(e) => setCropVariety(e)}
        >
          <Option value="DKC35-88" key="DKC35-88">
            DKC35-88
          </Option>
          <Option value="NK7837" key="NK7837">
            NK7837
          </Option>
          <Option value="NK8204" key="NK8204">
            NK8204
          </Option>
        </Select>
      </FormItem>
      <FormItem label="Planting Date">
        <DatePicker
          placeholder="Select Date"
          onChange={handlePlantingDate}
          value={plantingDate ? moment(plantingDate) : undefined}
          format={"YYYY/MM/DD"}
        />
      </FormItem>
      <Button onClick={handleButton} type="primary">View Output</Button>
    </Form>
  );
};
