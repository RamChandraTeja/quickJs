import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table1 = ({ rowData }) => {
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 300 }}>
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

const Table2 = ({ rowData, onRowSelect }) => {
  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 300 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onRowSelected={(event) => {
          if (event.node.selected) {
            onRowSelect(event.data);
          }
        }}
        rowSelection="single"
      />
    </div>
  );
};

const SearchPopup = ({ onSearch, dropdownOptions }) => {
  const [searchCriteria, setSearchCriteria] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSearch = () => {
    // Perform search with searchCriteria
    onSearch(searchCriteria);
  };

  return (
    <div>
      <h2>Search Popup</h2>
      <input
        type="text"
        placeholder="Search Criteria"
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Dropdown</h2>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select an option</option>
        {dropdownOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const App = () => {
  const [table1Data, setTable1Data] = useState([]);
  const [table2Data] = useState([
    { id: 1, name: "Row 1" },
    { id: 2, name: "Row 2" },
    { id: 3, name: "Row 3" }
  ]);

  const [dropdownOptions, setDropdownOptions] = useState([]);

  // Simulated API call function (replace with your actual API call)
  const fetchTable1Data = () => {
    // Simulated API response data (dummy data)
    const apiResponse = [
      { id: 101, name: "API Row 1" },
      { id: 102, name: "API Row 2" },
      { id: 103, name: "API Row 3" },
      { id: 104, name: "API Row 4" },
      { id: 105, name: "API Row 5" }
    ];

    setTable1Data(apiResponse);
  };

  const handleTable2RowSelect = (rowData) => {
    // Simulated API call when a row in Table2 is selected
    fetchTable1Data();

    // Update the dropdown options based on the selected row
    setDropdownOptions([{ id: rowData.id, name: rowData.name }]);
  };

  const handleSearch = (searchCriteria) => {
    // Perform a search based on searchCriteria
    console.log("Performing search with criteria:", searchCriteria);
  };

  return (
    <div>
      <SearchPopup onSearch={handleSearch} dropdownOptions={dropdownOptions} />

      <h2>Table 1</h2>
      <Table1 rowData={table1Data} />

      <h2>Table 2</h2>
      <Table2 rowData={table2Data} onRowSelect={handleTable2RowSelect} />
    </div>
  );
};

export default App;
