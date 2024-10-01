
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
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