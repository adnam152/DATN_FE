import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

function PublicLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PublicLayout