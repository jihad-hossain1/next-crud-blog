import EditForm from "@/components/EditForm";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBlog({ params }) {
  const { id } = params;
  const { article } = await getBlogById(id);
  const { title, description, image, categoryId } = article;

  return (
    <EditForm
      id={id}
      title={title}
      description={description}
      image={image}
      categoryId={categoryId}
    />
  );
}
