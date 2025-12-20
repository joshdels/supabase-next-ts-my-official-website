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
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact");
        const json = await res.json();

        if (json.success) {
          setMessages(json.data);
        }
        console.log(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, []);

  const toggleImportant = async (id: string, currentValue: boolean) => {
    console.log(
      "Toggling message:",
      id,
      "from",
      currentValue,
      "to",
      !currentValue
    );

    setMessages((prev) =>
      prev.map((msg) =>
        msg.ud === id ? { ...msg, is_important: !currentValue } : msg
      )
    );

    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_important: !currentValue }),
      });

      const json = await res.json();
      if (!json.success) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.ud === id ? { ...msg, is_important: currentValue } : msg
          )
        );
        console.error("Failed to update DB");
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.ud === id ? { ...msg, is_important: currentValue } : msg
        )
      );
    }
  };

  const toggleRead = async (id: string, currentValue: boolean) => {
    console.log(
      "Toggling message:",
      id,
      "from",
      currentValue,
      "to",
      !currentValue
    );

    setMessages((prev) =>
      prev.map((msg) =>
        msg.ud === id ? { ...msg, is_read: !currentValue } : msg
      )
    );

    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_read: !currentValue }),
      });

      const json = await res.json();
      if (!json.success) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.ud === id ? { ...msg, is_read: currentValue } : msg
          )
        );
        console.error("Failed to update DB");
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.ud === id ? { ...msg, is_read: currentValue } : msg
        )
      );
    }
  };

  return (
    <div className="p-2 mt-20">
      <h1 className="text-2xl font-bold mb-4">Mailbox</h1>

      <ul className="space-y-1">
        {messages.map((m) => (
          <li
            key={m.ud}
            className="bg-white p-4 rounded flex gap-2 items-start"
          >
            <input
              type="checkbox"
              className="cursor-pointer w-5 h-5"
              checked={m.is_read || false}
              onChange={() => toggleRead(m.ud, m.is_read || false)}
            />

            <button
              className={`cursor-pointer text-xl select-none ${
                m.is_important ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => toggleImportant(m.ud, m.is_important || false)}
            >
              ★
            </button>

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
