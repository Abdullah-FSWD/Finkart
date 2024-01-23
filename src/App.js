// import './App.css';
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart } from "./Components/PieChart";
import Login from "./Components/Login";
import { AgGrid } from "./Components/AgGrid";

function App() {
  const [label, setLabel] = useState([]);
  const [mission, setMission] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
          <AgGrid setLabel={setLabel} setMission={setMission} />
          <PieChart label={label} mission={mission} />
        </div>
      ) : (
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </>
  );
}

export default App;
