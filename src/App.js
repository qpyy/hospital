import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppointmentPage from './components/pages/AppointmentPage';
import SignUpPage from './components/pages/SignUpPage';

const App = () => {
  const isAuth = useSelector(state => state.user.isAuth);

  if (isAuth) {
    return (
      <Routes>
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="*" element={<Navigate to="/appointments" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/sign-in" />} />
    </Routes>
  );
};

export default App;
