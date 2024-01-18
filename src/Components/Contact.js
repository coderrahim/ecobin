

const Contact = () => {
    return (
        <div className="lg:max-w-7xl lg:mx-auto ">
        <h1 className="font-bold text-6xl mt-32 text-green-500">Contact</h1> 
        <form>
        <div className="bg-slate-100 mt-12 p-16 rounded-lg">
            <h3 className="font-medium text-2xl text-center">Get in touch!</h3>
            <p className="text-center">Wanna talk?Leave us Your contact details and lets schedule a call.</p>
            <div className="flex justify-center lg:gap-8 md:gap-8 gap-2 items-center">
            <div className="mt-12">
            <input type="text" placeholder="Your Name" className="input block mb-6 input-bordered lg:w-[450px] md:w-[450px] w-[200px] " />
            <input type="email" placeholder="Your Email" className="input block mb-6 input-bordered  lg:w-[450px] md:w-[450px] w-[200px]" />
            <input type="number" placeholder="Your Number" className="input block input-bordered  lg:w-[450px] md:w-[450px] w-[200px]" />
            </div>
            <div className="mt-12">
            <input type="text" placeholder="Type Your Location" className="input block input-bordered mb-6 lg:w-[450px] md:w-[450px] w-[200px]" />
            <textarea className="textarea textarea-bordered lg:w-[450px] md:w-[450px] w-[200px] block mb-8" placeholder="How can we help you? "></textarea>
            
            </div>
           
            </div>
            <div className="flex justify-center items-center mt-8">
            <button className="bg-green-500 px-5 py-2 rounded-md">submit</button>
            </div>
           

        </div>
        </form> 
        </div>
    );
};

export default Contact;