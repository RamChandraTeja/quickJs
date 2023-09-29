import React, { useState } from 'react';
import "../css/TableComponent.scss"

function TableComponent() {
  const [data, setData] = useState([
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
    { id: 3, name: 'Row 3' },
  ]);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>
              <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
