import Image from "next/image";
import noDataImage from "../../public/noDataImage.png";
import { useRouter } from "next/navigation";

const NoDataFound = () => {
  const router = useRouter();
  const gotoCreateDecision = () => {
    router.push("/createDecision");
  };
  return (
    <div className="flex justify-center items-center px-4">
      <div className=" p-6 md:p-10 rounded-xl w-full max-w-md md:max-w-3xl flex flex-col items-center text-center">
        <div className="mb-6">
          <Image
            src={noDataImage}
            alt="No Data"
            className="w-44 sm:w-44 md:w-52 xl:w-72 h-auto"
            priority
          />
        </div>
        <h2 className="relative text-xl sm:text-2xl font-semibold text-gray-800 mb-2 top-8 xl:top-12">
          No Decisions Available
        </h2>
        <p className="relative text-sm sm:text-base text-gray-600 mb-6 max-w-lg top-8 xl:top-16 md:text-xl xl:text-2xl">
          It seems like there are no decisions created yet. You can add a
          decision by navigating to the "Create New Decision" option from the
          homepage or you can click the button below:
        </p>
        <div
          onClick={gotoCreateDecision}
          className="relative hover:cursor-pointer top-8 xl:top-20"
        >
          <button className="relative w-full md:w-[70%] text-center text-xl py-2 px-6 font-medium border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out xl:text-2xl xl:py-2 xl:px-6 xl:font-semibold xl:w-auto rounded hover:cursor-pointer">
            {" "}
            Create New Decision{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoDataFound;
