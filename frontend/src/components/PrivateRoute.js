import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
    const { token, loading } = useAuth();
    const location = useLocation();

    // Show nothing while checking authentication status
    if (loading) {
        return null;
    }

    // Redirect to login if not authenticated, preserving the intended destination
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}