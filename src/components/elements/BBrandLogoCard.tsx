import Image from "next/image";

const BrandLogoCard = ({ data: brand }: any) => {
  return (
    <div className="flex items-center justify-center w-auto h-20 max-w-[160px]">
      <Image
        src={brand?.logo?.src}
        alt={brand?.alt}
        width={140}
        height={80}
        className="object-contain"
      />
    </div>
  );
};

export default BrandLogoCard;
