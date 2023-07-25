import "./styling.css"

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>NAME</th>
          <th>TYPE OF SATELLITE</th>
          <th>LAUNCH DATE</th>
          <th>STATUS</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "active" : "inactive"}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
  );
};

export default Table;