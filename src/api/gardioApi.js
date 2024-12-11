import axios from "axios";

const gardioApi = axios.create({
    baseURL: "https://huggingface.co/spaces/Drzee1994/NelsonBot",
    headers: {
        "Content-Type": "application/json",
    },
});

export const sendMessageToSpace = async (message, context = '') => {
    try {
        const response = await gardioApi.post("/run", { 
            inputs: {
                message: message,
                context: context
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error communicating with Hugging Face Space:", error);
        throw error;
    }
};

