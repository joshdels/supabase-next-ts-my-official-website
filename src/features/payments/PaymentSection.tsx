"use client";

import { useState } from "react";
import Image from "next/image";
import { FileUser, Copy, CopyCheck } from "lucide-react";

import { payments, PaymentsProp } from "@/src/data/payments.";

interface PaymentSectionProps {
  title: string;
  type?: string;
}

export default function PaymentSection({ title, type }: PaymentSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <>
      <h1 className="text-4xl font-bold mt-20">{title}</h1>
      <section className="mx-auto my-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {payments
            .filter((payment) => payment.type == type)
            .map((payment: PaymentsProp, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center p-6 rounded-xl  shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative shrink-0">
                    <Image
                      src={payment.logo}
                      alt={payment.type + " logo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold capitalize">
                      {payment.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {payment.account_name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Account: {payment.account_number}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  {payment.proof && (
                    <a
                      href={payment.proof}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-center transition"
                    >
                      <FileUser />
                    </a>
                  )}

                  <button
                    onClick={() => handleCopy(payment.account_number, index)}
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition"
                  >
                    {copiedIndex === index ? <CopyCheck /> : <Copy />}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
