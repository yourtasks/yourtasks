import Image from "next/image";

const ImageAd = () => {
  return (
    <div className="w-full max-h-[300px] bg-cyan-500 rounded-lg relative overflow-hidden">
      <Image
        src={"/profile.jpg"}
        alt="profile"
        height={0}
        width={0}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ImageAd;
