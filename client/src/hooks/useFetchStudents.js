import { useState, useEffect } from "react";
import { getStudents } from "../api/api";

const useFetchStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
            } catch (err) {
                setError('Error fetching students:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    return { students, loading, error, setStudents };
};

export default useFetchStudents;