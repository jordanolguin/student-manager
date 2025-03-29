import { useState } from "react";
import { createStudent } from "../api/api";

const useCreateStudent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addStudent = async (student) => {
        try {
            setLoading(true);
            const newStudent = await createStudent(student);
            return newStudent;
        } catch (err) {
            setError('Error creating student:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { addStudent, loading, error };
};

export default useCreateStudent;