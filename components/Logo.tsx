import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="hidden md:block">
        <Link href={`/`}>
          <Image src="/logo.png" width={100} height={100} alt="Airbnb Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
