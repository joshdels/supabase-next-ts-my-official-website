"use client";

import { useEffect, useState } from "react";

interface Message {
  ud: string;
  name: string;
  email: string;
  message: string;
  is_important?: boolean;
  is_read?: boolean;
  created_at: string;
}

export default function MailContent() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setMessages(json.data);
        console.log(json);
      })
      .catch(console.error);
  }, []);

  return (
      <div className="p-20">
        <h1 className="text-2xl font-bold mb-4">Mailbox</h1>

        <ul className="space-y-1">
          {messages.map((m) => (
            <li
              key={m.ud}
              className="bg-white p-4 rounded flex gap-2 items-start"
            >
              {/* Read checkbox */}
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={Boolean(m.is_read)}
                  readOnly
                  className="accent-blue-600"
                />
                Read
              </label>

              {/* Important checkbox */}
              <span
                className={`cursor-pointer text-xl select-none ${
                  m.is_important ? "text-yellow-400" : "text-gray-300"
                }`}
                title={m.is_important ? "Important" : "Mark as important"}
              >
                ★
              </span>

              {/* Date */}

              <p className="ml-4">{m.message}</p>

              <p className="text-gray-400">
                {new Date(m.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>
  );
}
