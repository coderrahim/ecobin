"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

const images = [
    'https://img.freepik.com/free-photo/ground-littered-with-plastic-bottles_1268-20038.jpg?w=826&t=st=1705475222~exp=1705475822~hmac=3c3cb47fbbf10f1cfac985ad22835e161c0d8846713352032f7f7e6e961a128d',
    'https://img.freepik.com/free-photo/man-collecting-plastic-garbage-polluted-park_1268-20119.jpg?w=826&t=st=1705475228~exp=1705475828~hmac=0ada8c1afdd3978777fb383df5cc2175fdf13d0b8afda321673a86185fef96cf',
    'https://img.freepik.com/free-photo/hand-african-american-man-picking-up-bottle-into-garbage-bags-while-cleaning-area-park-africa-volunteering-charity-people-ecology-concept_627829-377.jpg?w=740&t=st=1705475225~exp=1705475825~hmac=2b774ed7bf481cad3af4dd39b2b2b451bb3751cd3528825e3fa3c1ee9709cb59',
    'https://img.freepik.com/free-photo/man-collecting-scattered-plastic-bottles-from-ground_1268-20056.jpg?w=826&t=st=1705475234~exp=1705475834~hmac=c93ced84b994c8d3cf285b34774b5112bd93c5d31fc28621d355914ffcc22ec5',
];

const GallaryImages = () => {
    return (
        <div className='py-12'>
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mb-20">
                <p className="text-green-600 font-medium lg:mt-0 md:mt-5 mt-5" data-aos="fade-down">Shaping Tomorrow's Sustainability</p>
                <h1 className="text-3xl font-semibold dark:text-white" data-aos="fade-up">Our Recent Works</h1>
                <p className="text-xs dark:text-white" data-aos="zoom-in">Discover our latest projects driving positive change in waste management. From innovative tech solutions to community initiatives, we're committed to a cleaner, greener future. Join us in our journey towards responsible waste practices and a more sustainable world.</p>
            </div>
            <Swiper
                modules={[EffectCoverflow, Navigation, Autoplay]} effect="coverflow"
                spaceBetween={50}
                slidesPerView={3}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img className='rounded-lg' src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default GallaryImages;