const BusinessCard = ({name, job, email, phone}) => {
    return(
        <div>
            <h3>{name}</h3>
            <h3>{job}</h3>
            <h3>Email: {email}</h3>
            <h3>Telefon: {phone}</h3>
            <hr />

        </div>
    );
};

export default BusinessCard;