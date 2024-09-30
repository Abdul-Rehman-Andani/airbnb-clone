import React, { ReactNode } from "react";

interface Props {
  value: string | number;
  full?: boolean;
  fill?: boolean;
  border?: boolean;
  extra?: string;
  icon?: ReactNode;
}

const Button: React.FC<Props> = ({
  full,
  fill,
  value,
  extra,
  border,
  icon,
}: Props) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-5 ${
          full && `w-full`
        } ${extra} ${fill && `bg-primary text-white`}  ${
          border && `border`
        }  rounded-md py-2`}
      >
        <span className="text-xl">{icon}</span>
        <span>{value}</span>
      </button>
    </>
  );
};

export default Button;
