import React from "react";
import { MdCelebration } from "react-icons/md";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const style = {
    container: `absolute top-0 left-0 bg-white w-1/2  border shadow-lg`,
  };
  return (
    <>
      <button
        className="bg-gradient-to-r from-[#00B09B] to-[#8EC842] text-white  font-bold uppercase text-sm px-6 py-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Buy Now
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <MdCelebration className="text-[#8EC842]" />
                  <p className="my-4 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#00B09B] to-[#8EC842]">
                    Congrats ! for purchase
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
