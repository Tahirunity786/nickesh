import Image from 'next/image';


const StatCard = ({ iconSrc, value, label }) => (
    <div className="col-lg-3 mb-5">
      <div className="card h-100 shadow-sm border border-light rounded-4">
        <div className="card-body text-center">
          <div className="text-center mb-2">
            <Image
              src={iconSrc}
              width={25}
              height={25}
              alt={label}
            />
          </div>
          <h6 className="fw-bold">{value}</h6>
          <p className="mb-0">{label}</p>
        </div>
      </div>
    </div>
  );
  
  export default StatCard;