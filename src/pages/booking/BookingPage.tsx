import BookingDetail from "../../component/bookingDetails/BookingDetail"
import Footer from "../../component/Footer"
import NavBar from "../../component/NavBar"
import BackgroundLayout from "../../Layout/BackgroundLayout"
const BookingPage = () => {
  return (
    <BackgroundLayout>
      <NavBar/>
      <BookingDetail/>
      <Footer/>
    </BackgroundLayout>
  )
}

export default BookingPage