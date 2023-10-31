import Image from "next/image";

const Avatar = () => {
  return (
    <div className={`relative h-7 w-7`}>
      <Image
        src={"/profile.jpg"}
        alt="profile"
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Avatar;
