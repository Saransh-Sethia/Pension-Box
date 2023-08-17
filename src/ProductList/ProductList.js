import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import './ProductList.css'

function ProductList({title,price,description,category,image,rating}) {
  return (
    <>
      <Card className="card">
        <CardMedia component="img" className="image" image={image} alt="" />
        <CardContent>
          <Typography fontWeight="700">{title}</Typography>
          <Typography>{description}</Typography>
          <Typography paddingY="0.5rem" fontWeight="700">
            Price: ${price}
          </Typography>
          <Typography paddingY="0.5rem" fontWeight="700">
            {category}
          </Typography>
          <Rating
            name="read-only"
            value={rating.rate}
            count={rating.count}
            precision={0.5}
            readOnly
          />
        </CardContent>

        <CardActions className="class-actions">
          <Button
            className="card-button"
            fullWidth
            variant="contained"
          >
            View Product
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductList;
