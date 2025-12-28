"use client";

import { useRouter } from "next/navigation";
import { CircleCheckBig, X, House } from "lucide-react";
import { useContactStore } from "@/src/store/useContactStore";

interface SuccessProps {
  show: boolean;
  onClose: () => void;
}

export default function Success({ show, onClose }: SuccessProps) {
  const router = useRouter();
  const {setShowContact} = useContactStore();

  if (!show) return null;

  const handleBackHome = () => {
    setShowContact(false);
    router.push("/");
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm px-8 py-6 flex flex-col items-center gap-4 max-w-sm text-center">
        <div className="text-gray-500 hover:text-red-400 text-right absolute top-4 right-4">
          <button onClick={handleBackHome}>
            <X />
          </button>
        </div>

        <div className="flex items-center justify-center h-25 w-25 rounded-full bg-blue-100 text-blue-600">
          <CircleCheckBig className="h-15 w-15" />
        </div>

        <h1 className="text-xl font-bold text-gray-800">Success!</h1>

        <p className="text-md text-gray-600 leading-relaxed">
          Please wait up to{" "}
          <span className="font-semibold text-gray-800">24 hours</span>. I'll
          get back to you shortly.
        </p>

        <div
          onClick={handleBackHome}
          className="flex items-center gap-2
             px-5 py-3 rounded-xl
             bg-gray-600 text-white
             font-medium text-sm
             hover:bg-gray-700
             transition-all duration-200
             active:scale-95
             cursor-pointer
             "
        >
          <House className="h-4 w-4" />
          Back to Home
        </div>
      </div>
    </div>
  );
}
