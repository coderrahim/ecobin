
import Services from '../Components/Services/Services';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import LiveChat from '../Components/LiveChat/LiveChat';
import GoogleMap from '@/Components/GoogleMap/GoogleMap';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Gallery></Gallery>
      <GoogleMap></GoogleMap>
      <LiveChat></LiveChat>
    </div>
  )
}
export default HomePage;

