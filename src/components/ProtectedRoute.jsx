import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabaseClient';

const ProtectedRoute = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (error) {
                    setError(error.message);
                } else {
                    setSession(data.session);
                }
            } catch (err) {
                setError("An unexpected error occurred.");
            } finally {
                setLoading(false);
            }
        };

        fetchSession();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or animation
    }

    if (error) {
        return <div>Error: {error}</div>; // Display error message
    }

    if (!session) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render protected content if authenticated
};

export default ProtectedRoute;
