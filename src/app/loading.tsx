import { ScaleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ScaleLoader />
    </div>
  );
}
