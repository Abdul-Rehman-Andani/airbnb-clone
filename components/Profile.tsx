import { IoMenuOutline } from "react-icons/io5";
import Image from "next/image";

const Profile = () => {
  return (
    <div className='border flex items-center gap-3 rounded-[100px] px-4 py-1'>
      <IoMenuOutline className="text-xl"/>
      <Image src="/profile.png" width={32} height={32} alt="Prfile Image"/>
    </div>
  )
}

export default Profile;
