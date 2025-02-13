import LoadingSpinner from "@/app/ui/loading-spinner";
import {
  ContactDetailsContext,
  ContactDetailsContextValue,
} from "@/context/ContactDetailsContext";
import {
  FormDataContext,
  FormDataContextValue,
} from "@/context/FormDataContext";

import { createContact } from "@/lib/action";
import { useContext, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function ContactDetails({ goNext }: { goNext: any }) {
  const initialState = { errors: {}, message: undefined, userData: undefined };
  const [state, formAction] = useFormState<any>(
    createContact as any,
    initialState
  );

  const [validationError, setValidationError] = useState<any>({});
  const { contactDetails, updateContactDetails } = useContext(
    ContactDetailsContext
  ) as ContactDetailsContextValue;

  const { updateFormData } = useContext(
    FormDataContext
  ) as FormDataContextValue;

  useEffect(() => {
    if (state?.errors) {
      setValidationError(state);
    } else if (state.success) {
      const contactDetails = {
        name: state.userData.name,
        phone: state.userData.phone,
        email: state.userData.email,
        leadId: state.leadId,
      };
      updateContactDetails(contactDetails);
      updateFormData({ contactDetails: contactDetails });
    }
  }, [state]);

  useEffect(() => {
    if (contactDetails && contactDetails.leadId) {
      updateFormData({ contactDetails: contactDetails });
      goNext();
    }
  }, [contactDetails]);

  const handleReset = () => {
    setValidationError({});
  };

  return (
    <div className="flex flex-col justify-center md:w-[400px] md:items-center gap-6 md:pt-0 pt-5">
      <div className="font-semibold text-2xl text-center animate-in slide-in-from-top-4 duration-1000">
        Please enter your details
      </div>
      <form
        className="flex flex-col w-full gap-4 animate-in fade-in duration-1000"
        action={formAction}
      >
        <div className=" space-y-2 ">
          <label htmlFor="name" className="text-[#868687]">
            Full Name
          </label>
          <input
            type="text"
            className={`border-2 ${
              validationError?.errors?.name
                ? "border-red-300"
                : "border-gray-100"
            } focus:outline-none  block w-full px-10 py-4 rounded-full focus:border-primary `}
            placeholder="Rakesh Sharma"
            id="name"
            name="name"
            onChange={(e) => {
              handleReset();
            }}
            required
          />
          {validationError.errors?.name &&
            validationError.errors.name.map((error: any) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div className=" space-y-2">
          <label htmlFor="phone_number" className="text-[#868687]">
            Phone Number
          </label>
          <input
            type="tel"
            className={`border-2 ${
              validationError?.errors?.phone_number
                ? "border-red-300"
                : "border-gray-100"
            } focus:outline-none  block w-full px-10 py-4 rounded-full focus:border-primary `}
            placeholder="99XXXXXXXX"
            id="phone_number"
            name="phone_number"
            onChange={(e) => {
              handleReset();
            }}
            required
          />
          {validationError.errors?.phone_number && (
            <p className="mt-2 text-sm text-red-500">
              {validationError.errors.phone_number[0]}
            </p>
          )}
        </div>
        <div className=" space-y-2 ">
          <label htmlFor="email" className="text-[#868687]">
            Email Address
          </label>
          <input
            type="email"
            className={`border-2 ${
              validationError?.errors?.email
                ? "border-red-300"
                : "border-gray-100"
            } focus:outline-none  block w-full px-10 py-4 rounded-full focus:border-primary `}
            placeholder="Eg. rakesh@example.com"
            id="email"
            name="email"
            onChange={(e) => {
              handleReset();
            }}
            required
          />
          {validationError.errors?.email &&
            validationError.errors.email.map((error: any) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div className=" space-y-2 flex justify-center animate-in slide-in-from-bottom-2 duration-1000">
          <Submit />
        </div>
      </form>
    </div>
  );
}

function Submit() {
  const status = useFormStatus();

  return (
    <button
      className="focus:outline-none bg-slate-900 text-white tracking-wider px-6 py-2 rounded-full disabled:bg-gray-600 flex items-center justify-center gap-2"
      disabled={status.pending}
    >
      Next
      {status.pending ? (
        <LoadingSpinner height={20} width={20} />
      ) : (
        <span>&#8594;</span>
      )}
    </button>
  );
}
