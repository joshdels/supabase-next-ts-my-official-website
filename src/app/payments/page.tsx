"use client";

import Navbar from "@/src/components/layout/Navbar";
import PaymentSection from "@/src/features/payments/PaymentSection";

export default function Payments() {
  return (
    <>
      <Navbar />

      <div
        className="text-gray-800 items-center justify-between text-md
        px-6 sm:px-5 md:px-20 lg:px-20 2xl:px-40 py-4  w-full z-100 shadow-2xs mt-20"
      >
        <PaymentSection title="International Payment" type="international" />
        <PaymentSection title="Local Payment" type="local" />
      </div>
    </>
  );
}
