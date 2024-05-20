import React from "react";

const ContentArray = [
  {
    title: "Select a corner",
    subTitle:
      "To start, select the lower corner of the roof side where you want to place solar panels.",
  },
  {
    title: "Select another corner",
    subTitle:
      "Then, select the next corner of that roof space, so the line sits on the ridge or gutter line.",
  },
  {
    title: "Keep going",
    subTitle:
      "Once you’ve selected each corner, you’ll see a green ticket to indicate it’s complete.",
  },
];

export default function Modal({
  handleGoBackClick,
  handleNextClick,
}: {
  handleGoBackClick: () => void;
  handleNextClick: () => void;
}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" bg-black text-white rounded-full w-[120px] px-4 py-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Next
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex px-4 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto h-[70vh] py-2">
              <div className="border-0 rounded-lg shadow-lg h-full relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className=" font-semibold flex w-[95vw] pt-4">
                    <div className=" w-full">
                      <div className=" text-2xl text-center ">
                        Make your roof
                      </div>
                      <div className=" font-semibold text-sm text-gray-400 text-center">
                        Draw your roof on the map. So we can estimate whether
                        you have space for solar.
                      </div>
                      <div>
                        {ContentArray.map((item, idx) => (
                          <div key={idx}>
                            <div className=" bg-gray-200 my-4 rounded-lg h-[150px] p-4">
                              <div className=" flex gap-4">
                                <div>
                                  <div className=" flex gap-2 font-semibold">
                                    <div className=" h-[30px] flex justify-center items-center w-[30px] bg-yellow-300 rounded-full">
                                      {idx + 1}
                                    </div>
                                    <div>{item.title}</div>
                                  </div>
                                  <div>{item.subTitle}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className=" font-semibold text-sm text-yellow-400 text-center">
                        Draw your roof on the map. So we can estimate whether
                        you have space for solar.
                      </div>
                    </div>
                    <div className=" w-full flex justify-center items-center h-auto">
                      <div className=" flex flex-col gap-5 justify-center">
                        <button
                          onClick={() => {
                            setShowModal(false);
                            handleNextClick();
                          }}
                          className=" w-fit m-auto px-8 py-3 rounded-full bg-yellow-400 font-semibold"
                        >
                          Start Drawing
                        </button>
                        <div className=" flex items-center gap-2">
                          <div className=" h-[1px] w-[100px] bg-gray-300 my-2"></div>
                          <div className=" text-gray-300">OR</div>
                          <div className=" h-[1px] w-[100px] bg-gray-300 my-2"></div>
                        </div>
                        <div>
                          <div
                            onClick={() => {
                              setShowModal(false);
                              handleGoBackClick();
                            }}
                            className=" text-gray-500 cursor-pointer text-center underline"
                          >
                            Go Back
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
