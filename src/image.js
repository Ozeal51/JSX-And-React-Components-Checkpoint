import product from "./product";

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderRadius: "10px"
      }}
    />
  );
};

export default Image;