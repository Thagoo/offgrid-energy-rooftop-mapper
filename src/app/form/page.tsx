"use client";
import StepFour from "@/components/form/StepFour";
import StepOne from "@/components/form/StepOne";
import StepThree from "@/components/form/StepThree";
import StepTwo from "@/components/form/StepTwo";
import Places, { PlacesAutocomplete } from "@/components/maps/Autoplaces";
import Modal from "@/components/modal";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const SolarTips = {
  0: "This helps us understand whether you are on commercial or residential tarifs to help calculate savings data.",
  1: "Offgrid gives you a fixed price. Mounting, Structure and all peripherals included.",
  2: "Based on your requirement we also suggest batteries and invertors to make sure you always have electricity",
  3: "this helps us estimate how many units of electricity you consume and what your system size should be.",
  4: "Your location helps us understand data in terms of sunlight and temperature",
};

const FormPage = () => {
  const [question, setQuestion] = useState(0);
  const [formState, setFormState] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    8: "",
  });
  const [result, setResult] = useState("");

  const [selected, setSelected] = useState(null);
  const [mapcenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 22.879440307617188,
    lng: 78.96288299560547,
  });
  const [zoom, setZoom] = useState<number>(4.8);

  const autoCompleteRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  const SearchFunction = () => {
    autoCompleteRef.current = new (
      window as any
    ).google.maps.places.Autocomplete(formState[4], options);
    // console.log(">>>> auto complete", autoCompleteRef.current);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && question === 4) SearchFunction();
  }, [formState]);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function (this: any, ...args: any) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  return (
    <>
      <Head>
        <title>Offgrid</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen ">
        <div className="w-full px-4">
          <Navbar />
          <div className="md:h-[80vh] w-full flex justify-center items-center">
            {question === 0 && (
              <StepOne setFormState={setFormState} formState={formState} />
            )}
            {question === 1 && (
              <StepTwo setFormState={setFormState} formState={formState} />
            )}

            {question === 2 && (
              <StepThree setFormState={setFormState} formState={formState} />
            )}
            {question === 3 && (
              <StepFour setFormState={setFormState} formState={formState} />
            )}
            {question === 4 && (
              <div className=" flex flex-col w-[400px] justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">
                  Search for and select your address
                </div>
                {/* <input
                  value={formState[4]}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, 4: e.target.value }))
                  }
                  className=" p-4 rounded-full w-[80%] bg-yellow-200 border-none outline-none"
                  placeholder="Search for your address"
                /> */}
                <PlacesAutocomplete
                  setSelected={setSelected}
                  setMapCenter={setMapCenter}
                  setZoom={setZoom}
                  setFormState={setFormState}
                  setQuestion={setQuestion}
                />
              </div>
            )}
            {question === 5 && (
              <div className=" flex flex-col justify-center w-[400px] gap-4 items-center">
                <div className=" font-semibold text-2xl">Pin your roof</div>
                <div className=" text-gray-400 text-center font-medium">
                  Drag the map to the center of your house,
                  <br /> then click next
                </div>
                <Modal
                  handleNextClick={() => setQuestion(question + 1)}
                  handleGoBackClick={() => setQuestion(question - 1)}
                />
              </div>
            )}
            {question === 6 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Click a corner</div>
                <div className=" text-gray-400">
                  Keep clicking to outline your roof on the map
                </div>
                <button
                  disabled={
                    formState[question as keyof typeof formState] === ""
                  }
                  onClick={() => setQuestion(question + 1)}
                  className=" bg-black px-6 py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Next {"->"}
                </button>
              </div>
            )}
            {question === 7 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Roof Marked</div>
                <div className=" text-gray-400">
                  Keep clicking to outline your roof on the map
                </div>
                <button
                  disabled={
                    formState[question as keyof typeof formState] === ""
                  }
                  onClick={() => setQuestion(question + 1)}
                  className=" bg-black px-6 py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Done {"->"}
                </button>
              </div>
            )}
            {question === 8 && (
              <div className=" flex flex-col justify-center gap-4 items-center">
                <div className=" font-semibold text-2xl">Roof Type</div>
                <div className=" text-gray-400">
                  is your roof flat, pitched or flat with beams
                </div>
                <div className=" flex w-full flex-wrap justify-center gap-4">
                  <div
                    onClick={() => {
                      setFormState((prev) => {
                        return {
                          ...prev,
                          8: "pitched",
                        };
                      });
                    }}
                    className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
                  >
                    <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
                      {formState[8] === "pitched" && (
                        <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
                      )}
                    </div>
                    <div>Pitched</div>
                  </div>
                  <div
                    onClick={() => {
                      setFormState((prev) => {
                        return {
                          ...prev,
                          8: "flat",
                        };
                      });
                    }}
                    className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
                  >
                    <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
                      {formState[8] === "Flat" && (
                        <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
                      )}
                    </div>
                    <div>Flat</div>
                  </div>
                  <div
                    onClick={() => {
                      setFormState((prev) => {
                        return {
                          ...prev,
                          8: "Flat with beams",
                        };
                      });
                    }}
                    className=" bg-yellow-100 w-full max-w-[180px] justify-center h-[50px] flex pl-2 pr-6 gap-2 items-center rounded-full py-1 cursor-pointer"
                  >
                    <div className=" bg-white h-[10px] flex justify-center items-center w-[10px] rounded-full">
                      {formState[8] === "Flat with beams" && (
                        <div className=" h-[8px] w-[8px] rounded-full bg-blue-800"></div>
                      )}
                    </div>
                    <div>Flat with beams</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {question <= 4 && (
            <div className="md:hidden w-full flex justify-center items-center p-4 md:bg-yellow-400 rounded-tl-3xl rounded-bl-3xl md:h-[100vh]">
              <div className=" w-[400px] p-6 border rounded-md border-black bg-white text-black">
                <div className=" text-xl mb-2 font-semibold">Solar Tip</div>
                <div>{SolarTips?.[question as keyof typeof SolarTips]}</div>
              </div>
            </div>
          )}
          <div className="">
            <div className=" flex justify-between items-center">
              {question !== 0 && (
                <button
                  onClick={() => setQuestion(question - 1)}
                  className=" bg-black px-6 py-2 text-white rounded-full"
                >
                  Back
                </button>
              )}
              {question < 5 && (
                <button
                  disabled={
                    formState[question as keyof typeof formState] === ""
                  }
                  onClick={() => setQuestion(question + 1)}
                  className=" bg-black px-6 ml-auto py-2 text-white disabled:opacity-50 rounded-full"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        {question <= 4 && (
          <div className="hidden md:flex w-full justify-center items-center p-4 md:bg-yellow-400 rounded-tl-3xl rounded-bl-3xl md:h-[100vh]">
            <div className=" w-[400px] p-6 border rounded-md border-black bg-white text-black">
              <div className=" text-xl mb-2 font-semibold">Solar Tip</div>
              <div>{SolarTips?.[question as keyof typeof SolarTips]}</div>
            </div>
          </div>
        )}
        {question > 4 && (
          <div className=" w-full h-[100vh] rounded-tl-3xl rounded-bl-3xl">
            <Places
              selected={selected}
              zoom={zoom}
              mapcenter={mapcenter}
              question={question}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default FormPage;
