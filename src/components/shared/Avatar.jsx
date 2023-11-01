import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Avatar = ({ className }) => {
  return (
    <div className={twMerge(`relative h-7 w-7`, className)}>
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
