import React, { useState } from "react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Policy Bot"
      >
        💬
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-semibold flex justify-between items-center">
            <span>PolicyBot</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">
              ✖
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-800 dark:text-gray-100">
            <p>
              Hello! I’m your HR PolicyBot. Ask me about leave, bonuses, or
              company rules.
            </p>
            {/* You can embed your bot/chat component here */}
          </div>
          <div className="p-2 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full p-2 text-sm border rounded outline-none dark:bg-gray-800 dark:text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotButton;
