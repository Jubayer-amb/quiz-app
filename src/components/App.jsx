import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import '../styles/App.css';
import Layout from './Layout';
import Navbar from './navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<PrivateRoute />}>
                            <Route path="" element={<Quiz />} />
                        </Route>
                        <Route path="/signup" element={<PublicRoute />}>
                            <Route path="" element={<Signup />} />
                        </Route>
                        <Route path="/login" element={<PublicRoute />}>
                            <Route path="" element={<Login />} />
                        </Route>
                        <Route path="/result" element={<PrivateRoute />}>
                            <Route path="" element={<Result />} />
                        </Route>
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
