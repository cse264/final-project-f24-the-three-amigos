export default function BottomsPage() {
    const items = [
      { id: 1, name: "Jeans", image: "/bottoms.jpg" },
      { id: 2, name: "Shorts", image: "/bottoms.jpg" },
      { id: 3, name: "Trousers", image: "/bottoms.jpg" },
    ];
  
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px",
    };
  
    const cardStyle = {
      background: "#FFF",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      textAlign: "center",
      padding: "10px",
    };
  
    const imageStyle = {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    };
  
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Bottoms</h1>
        <div style={gridStyle}>
          {items.map((item) => (
            <div key={item.id} style={cardStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  