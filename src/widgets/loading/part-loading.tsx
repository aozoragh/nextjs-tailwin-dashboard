import { Loader } from "lucide-react";
import { FC } from "react";

const PartLoading: FC<{ size?: number }> = ({ size = 64 }) => (
  <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center tw-py-10">
    <Loader size={size} className="tw-animate-spin tw-opacity-50" />
  </div>
);

export default PartLoading;
