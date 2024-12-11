import { useState } from "react";
import { sendMessageToSpace } from "../api/gardioApi";

const useGardio = () => {
    const [loading, setLoading] = useState(false);

    const fetchResponse = async (message, context = '') => {
        setLoading(true);
        try {
            const response = await sendMessageToSpace(message, context);
            return response.outputs;
        } catch (error) {
            console.error("Error fetching response:", error);
            if (error.response && error.response.status === 429) {
                throw new Error("The server is currently busy. Please try again later.");
            } else {
                throw new Error("An unexpected error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return { fetchResponse, loading };
};

export default useGardio;

