import ServiceDetails from "@/components/UserUI/ServiceDetails/ServiceDetails";

const servicedetails = ({params}) => {

    const {id} = params;
    // console.log(id);

    return (
        <ServiceDetails id={id}></ServiceDetails>
    );
};

export default servicedetails;