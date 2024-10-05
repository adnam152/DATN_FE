
import Header from "../../components/common/Header/Header"
import Footer from "../../components/common/Footer/Footer"
import NewArrival from '../../components/home/NewArrival'


function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <NewArrival />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage