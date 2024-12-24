import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    console.log('userInfo',  userInfo);
    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;