import { Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import "./LandingPageCMS.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
function AddFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = React.useState([]);
  const [skuSearch, setSkuSearch] = useState("");
  const [productfromSearch, setProductfromSearch] = useState(null);

  const searchForSku = async (val) => {
    const q = query(collection(db, "products"), where("productSKU", "==", val));
    const querySnapshot = await getDocs(q);
    let data = [];
    
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      data.push(doc.data);
    });
    setProductfromSearch(data[0]);
  };
  useEffect(() => {
    if (skuSearch) {
      searchForSku(skuSearch);
    }
  }, [skuSearch]);

  return (
    <Grid className="container" container>
      <Grid item xs={12}>
        <h1>Add Featured Products</h1>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
        item
        xs={12}
      >
        {featuredProducts.map((product, index) => {
          return (
            <div className="featuredProduct">
              <div>
                <img width="100%" src={product.productImage} alt="product" />
              </div>
              <div>{product.productName}</div>
              <div>{product.productPrice} rs</div>
              <span>
                <CancelIcon
                  onClick={() => {
                    setFeaturedProducts(
                      featuredProducts.filter(
                        (item, i) => item.product_id !== product.product_id
                      )
                    );
                  }}
                  sx={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                />
              </span>
            </div>
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <TextField
          placeholder="SKU"
          value={skuSearch}
          onChange={(e) => setSkuSearch(e.target.value)}
          fullWidth
        />
      <div 
      onClick={()=>setFeaturedProducts(p=>{return [...p,productfromSearch]})}
      className="product-from-search">
        {productfromSearch?.productName}
      </div>
      </Grid>
    </Grid>
  );
}

export default AddFeaturedProducts;
