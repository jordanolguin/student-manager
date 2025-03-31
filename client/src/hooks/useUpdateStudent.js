import { useState } from "react";
import { updateStudent } from "../api/api";

const useUpdateStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const modifyStudent = async (id, updatedStudentData) => {
        try {
            setLoading(true);
            const updatedStudent = await updateStudent(id, updatedStudentData);
            return updatedStudent;
        } catch (err) {
            setError('Error updating student:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { modifyStudent, loading, error };
};

export default useUpdateStudent;