import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Products = mongoose.models.Products || mongoose.model("Products", productsSchema);

export default Products;