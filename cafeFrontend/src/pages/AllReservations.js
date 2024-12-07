import React from "react";

const AllReservations = () => {
  // Sample reservations data
  const reservations = [
    { id: 1, table: "Table 1", time: "7:00 PM", name: "John Doe" },
    { id: 2, table: "Table 2", time: "8:00 PM", name: "Jane Smith" },
    { id: 3, table: "Table 3", time: "9:00 PM", name: "Alice Johnson" },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url('/path/to/your/background/image.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "350px",
          padding: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          backdropFilter: "blur(11.1px)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "20px" }}>
          La Montana
        </div>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>Reservation Management</h2>
        <button
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            padding: "10px 20px",
            marginTop: "10px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>All Reservations</h1>
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                Reservation ID
              </th>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                Table
              </th>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                Time
              </th>
              <th
                style={{
                  border: "1px solid white",
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  {reservation.id}
                </td>
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  {reservation.table}
                </td>
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  {reservation.time}
                </td>
                <td
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  {reservation.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllReservations;
