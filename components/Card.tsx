type CardProps = {
    name: string;
    price: number;
    image:string,
    description:string,
    category:string
  };

import Image from "next/image";

const Card: React.FC<CardProps> = ({name, price,image,description,category }) => {
    return(
        <div className="shadow rounded bg-white p-3 mt-2">
            <Image src={image} width={100} height={100} alt="" /> 
            <h3>{name}</h3>
            <p>Harga: Rp {price}</p>
        </div>
    );
}

export default Card