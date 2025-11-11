import React, { useContext, useState } from "react";
import ai from "../assets/ai.png";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import open from "../assets/open.mp3";

function Ai() {
  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();
  const [activeAi, setActiveAi] = useState(false);
  const openingSound = new Audio(open);

  // 🔊 Text-to-Speech function
  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  // 🎤 Voice Recognition setup
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("Speech Recognition not supported in this browser");
    toast.error("Speech Recognition not supported in your browser");
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim().toLowerCase();
    console.log("You said:", transcript);

    if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
      speak("Opening search");
      setShowSearch(true);
      navigate("/collection");
    } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
      speak("Closing search");
      setShowSearch(false);
    } else if (
      transcript.includes("collection") ||
      transcript.includes("collections") ||
      transcript.includes("product") ||
      transcript.includes("products")
    ) {
      speak("Opening collection page");
      navigate("/collection");
    } else if (transcript.includes("about")) {
      speak("Opening about page");
      navigate("/about");
      setShowSearch(false);
    } else if (transcript.includes("home")) {
      speak("Opening home page");
      navigate("/");
      setShowSearch(false);
    } else if (
      transcript.includes("cart") ||
      transcript.includes("kaat") ||
      transcript.includes("caat")
    ) {
      speak("Opening your cart");
      navigate("/cart");
      setShowSearch(false);
    } else if (transcript.includes("contact")) {
      speak("Opening contact page");
      navigate("/contact");
      setShowSearch(false);
    } else if (
      transcript.includes("order") ||
      transcript.includes("myorders") ||
      transcript.includes("orders") ||
      transcript.includes("my order")
    ) {
      speak("Opening your orders page");
      navigate("/order");
      setShowSearch(false);
    } else {
      toast.error("Try again");
    }
  };

  recognition.onend = () => {
    setActiveAi(false);
  };

  // 🎧 Start listening function
  const startListening = () => {
    try {
      openingSound.play();
      setActiveAi(true);
      recognition.start();
    } catch (err) {
      console.error("Error starting speech recognition:", err);
      toast.error("Voice recognition error");
    }
  };

  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      onClick={startListening}
    >
      <img
        src={ai}
        alt="AI"
        className={`w-[100px] cursor-pointer ${
          activeAi
            ? "translate-x-[10%] translate-y-[-10%] scale-125"
            : "translate-x-[0] translate-y-[0] scale-100"
        } transition-transform`}
        style={{
          filter: `${
            activeAi
              ? "drop-shadow(0px 0px 30px #00d2fc)"
              : "drop-shadow(0px 0px 20px black)"
          }`,
        }}
      />
    </div>
  );
}

export default Ai;
