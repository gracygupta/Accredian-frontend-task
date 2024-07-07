import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg p-4 w-80 h-96">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">Chat with an Expert</h2>
            <button onClick={toggleChat} className="text-gray-600">
              ✕
            </button>
          </div>
          <div className="h-full overflow-y-auto">
            {/* Chat messages will go here */}
            <div className="text-center text-gray-500 mt-20">
              Chat content here
            </div>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type a message"
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>
      )}
      <button
        onClick={toggleChat}
        className="bg-gray-900 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaCommentDots size={24} />
      </button>
    </div>
  );
};

export default ChatComponent;
