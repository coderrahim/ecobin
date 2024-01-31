import './GoogleMap.css'

const GoogleMap = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center text-green-500 mb-6 italic'>Get Our Location...</h1>
            <div className='map-responsive'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955469184!2d90.3655622632675!3d23.747049949762214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1706721613554!5m2!1sen!2sbd" width="600" height="450" title='Responsive google map' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default GoogleMap;