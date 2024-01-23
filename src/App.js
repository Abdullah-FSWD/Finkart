// import './App.css';
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart } from "./Components/PieChart";

function App() {
  const [rowData, setRowData] = useState([]);
  const [label, setLabel] = useState([]);
  const [mission, setMission] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "company" },
    { field: "date" },
    { field: "location" },
    { field: "mission" },
    { field: "price" },
    { field: "rocket" },
    { field: "successful" },
    { field: "time" },
  ]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.ag-grid.com/example-assets/space-mission-data.json"
      );
      setRowData(response.data);
      const companiesStats = getSuccessfulCompanyStats(response.data);
      // console.log("companiesStats", companiesStats);
      stackInArray(companiesStats);
    } catch (error) {
      throw new Error("Error fetching books data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function getSuccessfulCompanyStats(data) {
    const companyStats = {};

    // Iterate through the data
    data.forEach((mission) => {
      // Check if the mission was successful
      if (mission.successful === true) {
        // Increment the successful mission count for the company
        if (companyStats[mission.company]) {
          companyStats[mission.company]++;
        } else {
          companyStats[mission.company] = 1;
        }
      }
    });

    return companyStats;
  }

  function stackInArray(data) {
    const companyLabel = [];
    let companyMissions = [];
    for (let key in data) {
      companyLabel.push(key);
      companyMissions.push(data[key]);
    }
    setLabel(companyLabel);
    setMission(companyMissions);
  }


  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      Hello
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
      <PieChart label={label} mission={mission} />
    </div>
  );
}

export default App;
