import { FaRobot } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  // Start CLOSED by default
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I’m Urvi's bot! How can I help you today?" },
  ]);

  const predefinedButtons = [
    "Give me a tour of this website.",
    "What are Urvi's hobbies?",
    "Show me Urvi's resume.",
    "Share a fun fact about Urvi.",
  ];

  const [input, setInput] = useState("");
  const [isTouring, setIsTouring] = useState(false);
  const [tourText, setTourText] = useState("");

  // Ensure the UI actually starts closed (no flash, correct size)
  useEffect(() => {
    const box = document.querySelector(".chatbot-box");
    const btn = document.querySelector(".chatbot-toggle");
    const container = document.querySelector(".chatbot-container");
    if (!isOpen) {
      box && box.classList.add("closed");
      btn && btn.classList.add("active"); // your CSS uses .active when closed
      if (container) {
        container.style.width = "50px";
        container.style.height = "50px";
      }
    }
  }, []); // run once on mount

  const toggleChat = () => {
    setIsOpen(!isOpen);

    const el = document.querySelector(".chatbot-box");
    if (el) el.classList.toggle("closed");

    const btn = document.querySelector(".chatbot-toggle");
    if (btn) btn.classList.toggle("active");

    const container = document.querySelector(".chatbot-container");

    if (isOpen) {
      // We are closing -> shrink immediately so nothing peeks through
      if (container) {
        container.style.width = "50px";
        container.style.height = "50px";
      }
    } else {
      // We are opening -> clear inline size so CSS (incl. mobile media query) can control it
      if (container) {
        container.style.width = "";
        container.style.height = "";
      }
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;
    const trimmedInput = input.trim();
    let response =
      "I'm not sure how to respond to that. For further questions, please refer to the buttons below or reach out through the contact page.";

    if (trimmedInput === "Give me a tour of this website.") {
      response =
        "Sure, let me take you through this portfolio! I would recommend taking the tour on desktop for the best experience.";
      startTour();
    } else if (trimmedInput === "What are Urvi's hobbies?") {
      response =
        "Urvi loves singing and has a diploma in Hindustani classical music (vocals)! She also enjoys reading, painting, and working out.";
    } else if (trimmedInput === "Show me Urvi's resume.") {
      response = "You can download it directly from the home page!";
    } else if (trimmedInput === "Share a fun fact about Urvi.") {
      response = (
        <span>
          Urvi has published a book called <strong>The Bucket List of Living</strong>! It's
          available worldwide on{" "}
          <a
            href="https://www.amazon.com/dp/9357654569"
            target="_blank"
            rel="noopener noreferrer"
            className="chatbot-link"
          >
            Amazon
          </a>.
        </span>
      );
    }

    setInput("");
    await addUserInput(trimmedInput);
    await addBotReply(response);
  };

  async function addUserInput(input) {
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setTimeout(() => {
      const el = document.querySelector(".chatbot-messages");
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  }

  async function addBotReply(response) {
    setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    setTimeout(() => {
      const el = document.querySelector(".chatbot-messages");
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  }

  async function startTour() {
    await addBotReply("Starting the tour in...");
    await delay(1000);
    await addBotReply("3");
    await delay(1000);
    await addBotReply("2");
    await delay(1000);
    await addBotReply("1");
    await delay(1000);
    await addBotReply("Let's begin the tour!");
    await delay(1000);
    toggleChat();
    window.history.pushState({}, "", "/#home");
    await delay(400);
    setIsTouring(true);
    setTourText(
      "Welcome to Urvi's portfolio! It encapsulates all about her and all that she brings to the table! Let's start with her experience."
    );
    await delay(3400);
    window.history.pushState({}, "", "/#experience");
    setTourText(
      "These are the spaces she has contributed in and added value to so far. After this, let me take you through some projects she's proud of!"
    );
    await delay(3400);
    window.history.pushState({}, "", "/#projects");
    setTourText(
      "Each of these projects comes from a place of passion and sincerety, reflecting her skills and interests. Next, let's look at her skills."
    );
    await delay(3400);
    window.history.pushState({}, "", "/#skills");
    setTourText(
      "These are the technologies she currently works with. Urvi's always eager to learn more and expand her skill set! Upcoming: Ways to contact her!"
    );
    await delay(3400);
    window.history.pushState({}, "", "/#contact");
    setTourText(
      "She's vailable through all these platforms. I hope you will get in touch and build something impactful together!"
    );
    await delay(3400);
    window.history.pushState({}, "", "/#home");
    setTourText("That's it for the tour, I hope it was helpful!");
    await delay(3000);
    setIsTouring(false);
    setTourText("");
  }

  function delay(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  return (
    <>
      {isTouring && (
        <div className="fixed bottom-[20px] w-[80%] left-1/2 transform -translate-x-1/2 bg-pink-200 text-black dark:bg-pink-900 dark:text-white px-4 py-2 rounded shadow z-100 text-center">
          <p className="font-semibold">{tourText}</p>
        </div>
      )}

      <div className="chatbot-container text-black">
        <button className="chatbot-toggle" onClick={toggleChat}>
          <FaRobot size={24} />
        </button>

        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-quick-buttons px-2 py-1 flex flex-wrap gap-2">
            {predefinedButtons.map((btn, i) => (
              <button key={i} onClick={() => setInput(btn)}>
                {btn}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Type your message..."
              required
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
