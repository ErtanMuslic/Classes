import { useNavigate, useParams } from "react-router-dom"
import Layout from "../Layout"

const Product = () =>{

    const arrayProducts = [
        {id:0,name:"Stolica",price:"100"},
        {id:1,name:"Banana",price:"2"},
        {id:2,name:"Sto",price:"500"},
        {id:3,name:"Kauc",price:"5000"}]

    const params = useParams();
    console.log(params);

    const selectedProduct = arrayProducts[params.productId]

    return (
        <Layout>
            {selectedProduct ?(
            <div>
            <p>{selectedProduct.id}</p>
            <p>{selectedProduct.name}</p>
            <p>{selectedProduct.price}</p>
            </div>
            ): (
                <p>Product not found</p>
            )}
        </Layout>
    )
}

export  default Product