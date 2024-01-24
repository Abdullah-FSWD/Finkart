import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import { useEffect, useState } from "react";
import axios from "axios";

export const AgGrid = ({ setLabel, setMission }) => {
  const [rowData, setRowData] = useState([]);
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
      stackInArray(companiesStats);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function getSuccessfulCompanyStats(data) {
    const companyStats = {};
    data.forEach((mission) => {
      if (mission.successful === true) {
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
    <AgGridReact rowData={rowData} columnDefs={colDefs} pagination={true} />
  );
};
