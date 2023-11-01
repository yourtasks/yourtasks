import { FaHospital } from "react-icons/fa6";
import { MdAccessTimeFilled, MdLocationPin, MdWaterDrop } from "react-icons/md";

const Item = ({ label, Icon, value }) => {
  return (
    <div className="w-full flex gap-x-2">
      <div className="flex gap-x-2 opacity-70 font-medium w-4/12">
        {Icon}
        <p className="text-xs min-w-max capitalize">{label}</p>
      </div>
      <p className="w-fit opacity-70">:</p>
      <p className="capitalize w-8/12 font-medium">{value}</p>
    </div>
  );
};

const Emergency = () => {
  return (
    <div className="w-full flex flex-col gap-y-2 px-4">
      <Item
        Icon={<MdWaterDrop size={20} />}
        label="blood group"
        value="A+ (A positive)"
      />
      <Item
        Icon={<FaHospital size={20} />}
        label="hospital name"
        value="Ibne sina diagnostic hospital"
      />
      <Item
        Icon={<MdAccessTimeFilled size={20} />}
        label="time"
        value="10/10/2023, 10:25pm"
      />
      <Item
        Icon={<MdLocationPin size={20} />}
        label="location"
        value="Uttar badda, dhaka"
      />
    </div>
  );
};

export default Emergency;
