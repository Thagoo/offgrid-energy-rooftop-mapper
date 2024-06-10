import React, { useContext } from "react";
import Modal from "../modal";
import FormStepContext from "@/context/FormStepContext";

export default function MapSelectorMobile() {
  const [showModal, setShowModal] = React.useState(false);
  const { currentStep, setCurrentStep } = useContext(FormStepContext);

  return (
    <div>
      {" "}
      <>
        <div className="fixed transform top-1/2 left-1/2 py-2 px-2 -translate-y-1/2 -translate-x-1/2 w-full bg-white flex flex-col justify-center gap-4 items-center rounded-3xl backdrop-blur-md bg-opacity-25 border border-white">
          <svg
            className="animate-in fade-in duration-1000"
            width="73"
            height="79"
            viewBox="0 0 73 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4648 77.5L66.3878 44.3787"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
            <path
              d="M9.9043 49.5547L68.9484 72.3254"
              stroke="#212121"
              stroke-width="2"
              stroke-linecap="round"
              stroke-dasharray="10 10"
            />
            <ellipse cx="39.4648" cy="62.5" rx="16" ry="6" fill="#FFCB00" />
            <path
              d="M35.2423 24.277C39.7553 23.8146 43.0389 19.7813 42.5765 15.2684C42.1141 10.7555 38.0808 7.47186 33.5679 7.93425C29.0549 8.39664 25.7713 12.4299 26.2337 16.9429C26.6961 21.4558 30.7294 24.7394 35.2423 24.277Z"
              stroke="#212121"
              stroke-width="4.10708"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M37.3264 24.4841C37.2978 24.2048 37.1493 23.9493 36.9135 23.7739C36.6778 23.5985 36.3742 23.5175 36.0694 23.5487L34.2819 23.7319C33.9772 23.7631 33.6962 23.904 33.501 24.1236C33.3057 24.3431 33.2121 24.6234 33.2407 24.9027L36.7602 59.2525C36.8114 59.7499 36.9699 60.2312 37.2265 60.6686L38.7999 63.3451C38.8504 63.4129 38.9201 63.4667 39.0017 63.5008C39.0833 63.5349 39.1738 63.5481 39.2636 63.5389C39.3535 63.5296 39.4394 63.4984 39.5124 63.4485C39.5854 63.3986 39.6427 63.3318 39.6784 63.2551L40.6764 60.3151C40.839 59.8348 40.8966 59.3313 40.8459 58.8339L37.3264 24.4841Z"
              fill="#212121"
            />
          </svg>

          <div className="font-semibold text-2xl animate-in fade-in duration-1000">
            Pin your roof
          </div>
          <div className="text-center font-medium animate-in fade-in duration-1000">
            Drag the map to the center of your house,
            <br /> then click next
          </div>
          <Modal
            handleNextClick={() => setCurrentStep(currentStep + 1)}
            handleGoBackClick={() => setCurrentStep(currentStep - 1)}
          />
        </div>
      </>
    </div>
  );
}
