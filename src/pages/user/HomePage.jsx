
import Header from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer"
import NewArrival from '../../components/home/NewArrival'
import LoginForm from '../../components/common/AuthForm/AuthForm';

function HomePage() {
    return (
        <div>
            <Header />
            <main>
                {/* <NewArrival /> */}
                <LoginForm></LoginForm>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage