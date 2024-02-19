import { MdSettingsSuggest } from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiDiamondHard } from "react-icons/gi";
import React from 'react';

const WhyChoose = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between gap-14 lg:mx-0 md:mx-10 mx-5 pt-14 mb-20">
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform text-[#00416d] space-y-3 p-10 items-center text-center mx-auto bg-[#f7f7f7] rounded-2xl border-2 border-[#d3d3d3] hover:bg-green-600 hover:text-white" data-aos="zoom-in">

                <MdSettingsSuggest className="text-6xl mx-auto" />

                <h3 className="text-2xl font-bold">Efficiency</h3>
                <p className="text-xs">Streamlined waste solutions; optimize processes, reduce costs, and minimize environmental impact effortlessly</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform text-[#00416d] space-y-3 p-10 items-center text-center mx-auto bg-[#f7f7f7] rounded-2xl border-2 border-[#d3d3d3] hover:bg-green-600 hover:text-white" data-aos="zoom-in">
                <ImMakeGroup className="text-6xl mx-auto" />
                <h3 className="text-2xl font-bold">Innovation</h3>
                <p className="text-xs">Pioneering waste management; stay ahead with cutting-edge technologies, sustainable practices, and creative solutions</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform text-[#00416d] space-y-3 p-10 items-center text-center mx-auto bg-[#f7f7f7] rounded-2xl border-2 border-[#d3d3d3] hover:bg-green-600 hover:text-white" data-aos="zoom-in">
                <VscWorkspaceTrusted className="text-6xl mx-auto" />
                <h3 className="text-2xl font-bold">Reliability</h3>
                <p className="text-xs">Dependable waste services; consistent, on-time pickups, and reliable waste disposal for a worry-free partnership</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform text-[#00416d] space-y-3 p-10 items-center text-center mx-auto bg-[#f7f7f7] rounded-2xl border-2 border-[#d3d3d3] hover:bg-green-600 hover:text-white" data-aos="zoom-in">
                <GiDiamondHard className="text-6xl mx-auto" />
                <h3 className="text-2xl font-bold">Sustainability</h3>
                <p className="text-xs">Eco-friendly waste solutions; prioritize the planet with green practices, recycling, and environmental responsibility</p>
            </div>


        </div>
    );
};

export default WhyChoose;