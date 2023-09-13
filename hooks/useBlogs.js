export const getBlog = async () => {
    try {
        const res = await fetch("/api/route");

        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};