"use client";

import { useState, useEffect } from "react";
import Navbar from "@/src/components/layout/Navbar";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function MailboxPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortAsc, setSortAsc] = useState(false); // false = newest first

  // Fetch messages from your API
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact");
      const json = await res.json();

      if (json.success) {
        setMessages(json.data);
      } else {
        console.error("API error:", json.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Sort messages by date
  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return sortAsc ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Mailbox</h1>

        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Sort by Date {sortAsc ? "(Oldest first)" : "(Newest first)"}
        </button>

        {loading ? (
          <p>Loading messages...</p>
        ) : sortedMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <ul className="space-y-4">
            {sortedMessages.map((msg) => (
              <li
                key={msg.id}
                className="p-4 bg-white rounded shadow hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{msg.name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(msg.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="text-gray-700">{msg.message}</div>
                <div className="text-sm text-gray-400 mt-1">{msg.email}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
