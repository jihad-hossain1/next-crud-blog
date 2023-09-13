import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String,
        image: String,
        categoryId: Number,

    },
    {
        timestamps: true,
    }
);

const Articles = mongoose.models.Articles || mongoose.model("Articles", topicSchema);

export default Articles;