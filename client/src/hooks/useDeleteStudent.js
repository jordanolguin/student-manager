import { useState } from "react";
import { deleteStudent } from "../api/api";

const useDeleteStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const removeStudent = async (id) => {
        try {
            setLoading(true);
            const response = await deleteStudent(id);
            return response;
        } catch (err) {
            setError('Error deleting student:', err);
        } finally {
            setLoading(false);
        }
    };

    return { removeStudent, loading, error };
};

export default useDeleteStudent;