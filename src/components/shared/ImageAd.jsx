import Image from "next/image";

const ImageAd = () => {
  return (
    <div className="w-full h-[300px] bg-cyan-500 rounded-lg relative overflow-hidden">
      <Image
        src={"/profile.jpg"}
        alt="profile"
        fill={true}
        className="object-cover"
      />
    </div>
  );
};

export default ImageAd;
