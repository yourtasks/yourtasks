import Link from "next/link";

const Branding = () => {
  return (
    <Link href="/" className="text-xl font-semibold cursor-pointer">
      Campus<span className="text-cyan-500">Connect</span>
    </Link>
  );
};

export default Branding;
