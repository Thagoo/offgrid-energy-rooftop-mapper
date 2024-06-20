import React from "react";

export default function PopupAlert({ children }: { children: any }) {
  return (
    <div>
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm blur-safari overflow-hidden h-dvh w-screen z-40" />
        {children}
      </>
    </div>
  );
}
