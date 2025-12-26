"use client";

import { useEffect, useState } from "react";
import { Star, Trash } from "lucide-react";

interface Message {
  ud: string;
  name: string;
  email: string;
  message: string;
  country_value: string;
  is_important: boolean;
  is_read: boolean;
  created_at: string;
}

type ToggleField = "is_read" | "is_important";

export default function MailContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact");
        const json = await res.json();
        if (json.success) setMessages(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, []);

  const totalPages = Math.ceil(messages.length / pageSize);

  const currentItems = messages.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function goToPage(page: number) {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }

  async function toggleField(
    id: string,
    field: ToggleField,
    currentValue: boolean
  ) {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.ud === id ? { ...msg, [field]: !currentValue } : msg
      )
    );

    try {
      const res = await fetch("/api/contact", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, [field]: !currentValue }),
      });
      const json = await res.json();
      if (!json.success) throw new Error("Update failed");
    } catch (err) {
      console.error("Failed to toggle field", field, err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.ud === id ? { ...msg, [field]: currentValue } : msg
        )
      );
    }
  }

  async function deleteMessage(id: string) {
    const prevMessages = messages;
    setMessages((prev) => prev.filter((msg) => msg.ud !== id));

    try {
      const res = await fetch("/api/contact", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const json = await res.json();
      if (!json.success) throw new Error("Failed to delete");
    } catch (err) {
      console.error("Failed to delete", err);
      setMessages(prevMessages);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mailbox</h1>

      <div className="shadow-sm rounded-md divide-y divide-gray-200">
        {currentItems.map((m) => (
          <div
            key={m.ud}
            className={`flex items-center px-4 py-3 hover:bg-gray-100 transition-colors ${
              m.is_read ? "bg-gray-100" : "bg-white font-semibold"
            }`}
          >
            <input
              type="checkbox"
              checked={m.is_read}
              onChange={() => toggleField(m.ud, "is_read", m.is_read)}
              className="mr-4 w-5 h-5 cursor-pointer"
            />
            <button
              className={`mr-4 text-lg cursor-pointer hover:text-yellow-300 ${
                m.is_important ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => toggleField(m.ud, "is_important", m.is_important)}
            >
              <Star />
            </button>
            <div className="flex-1 min-w-0">
              <p className="truncate">{m.name}</p>
              <p className="text-gray-400 text-sm truncate">{m.email}</p>
            </div>
            <div className="w-32 text-sm text-gray-500">
              {m.country_value || "Empty"}
            </div>
            <div className="flex-1 px-4 min-w-0">
              <p className="truncate">{m.message}</p>
            </div>
            <div className="w-24 text-sm text-gray-400">
              {new Date(m.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <button
              onClick={() => deleteMessage(m.ud)}
              className="ml-4 text-red-600 hover:text-red-800 cursor-pointer"
            >
              <Trash />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1 rounded ${
                page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
