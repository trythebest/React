export function Colorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "34px",
    width: "250px",
    marginTop:"20px",
    display:"flex",
    
  };
  return (
    <div style={styles} className="color" ></div>
  );
}
