import Banner from "@/Components/Banner/Banner";
import GallaryImages from "@/Components/GallaryImages/GallaryImages";
import LiveChat from "@/Components/LiveChat/LiveChat";
import Contact from "@/components/Contact/Contact";
import OurClients from "@/components/OurClients/OurClients";
import Statistics from "@/components/Statistics/Statistics";
import WhyChoose from "@/components/WhyChoose/WhyChoose";






const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <Contact></Contact>
            <Statistics></Statistics>
            <GallaryImages></GallaryImages>
            <OurClients></OurClients>
            <LiveChat></LiveChat>

        </div>
    );
};

export default HomePage;