import Image from 'next/image';

const InfoCard = ({ data }) => (
  data.map((items, key)=>(

    <div className="card shadow-sm border border-light rounded-4 mb-3" key={key}>
    <div className="card-body d-flex justify-content-start">
      <div className="text-center mb-2 me-3">
        <Image src={items.iconSrc} width={25} height={25} alt={items.heading} />
      </div>
      <div>
        <h6 className="fw-bold">{items.heading}</h6>
        <p className="mb-0">{items.paraGraph}</p>
      </div>
    </div>
  </div>
  ))
);

export default InfoCard;