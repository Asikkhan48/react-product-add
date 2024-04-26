

const Product = ({product, handelCard}) => {

   
    const {category, description, id, image, price, title} = product;

    return (
        <div>

        <div className="card text-center space-y-5 p-4 m-4">
          <img src={image} alt="" />
          <h1 className="font-bold">{title}</h1>
          <p><span className="font-semibold">Description:</span> {description}</p>

          <p> <span className="font-semibold">Caragory:</span> {category}</p>

          <div className="card-footer">
            <h3>{price}</h3>
            <button 
            onClick={()=> handelCard(product)}
            className="add-btn text-2xl text-pink-700 font-bold">Add to cart</button>

          </div>

        </div>

        </div>
    );
};

export default Product;