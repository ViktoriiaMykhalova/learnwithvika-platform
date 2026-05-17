"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Section =
  | "Grammar"
  | "Use of English"
  | "Vocabulary"
  | "Reading"
  | "Listening"
  | "Speaking";

type Question = {
  id: number;
  section: Section;
  question: string;
  options: string[];
  correct: string[];
  note?: string;
};

const questions: Question[] = [
  {
    id: 1,
    section: "Grammar",
    question: "If Erik phones, I ____ you know.",
    options: ["I'm going to let", "let", "I'm letting", "I'll let"],
    correct: ["I'll let"],
  },
  {
    id: 2,
    section: "Grammar",
    question: "'Has anybody offered to look after the children?' 'Sophia ____ it.'",
    options: ["is to do", "is going to do", "does", "will do"],
    correct: ["will do"],
  },
  {
    id: 3,
    section: "Grammar",
    question: "The next train to Dublin ____ at 3:45. (station announcement)",
    options: ["will leave", "is leaving", "is going to leave", "leaves"],
    correct: ["leaves"],
  },
  {
    id: 4,
    section: "Grammar",
    question: "Sorry, but I can't help ____.",
    options: ["laugh", "to laugh", "laughing"],
    correct: ["laughing"],
  },
  {
    id: 5,
    section: "Grammar",
    question: "Would you mind ____ the window?",
    options: ["open", "to open", "opening"],
    correct: ["opening"],
  },
  {
    id: 6,
    section: "Grammar",
    question: "I'd like you to stop ____ that.",
    options: ["do", "to do", "doing"],
    correct: ["doing"],
  },
  {
    id: 7,
    section: "Grammar",
    question: "I want to learn how to play ____ piano.",
    options: ["a", "the", "—"],
    correct: ["the"],
  },
  {
    id: 8,
    section: "Grammar",
    question: "We want to buy ____ new car.",
    options: ["a", "the", "—"],
    correct: ["a"],
  },
  {
    id: 9,
    section: "Grammar",
    question: "We want to go for a drink after the concert ____ Friday evening.",
    options: ["at", "in", "on"],
    correct: ["on"],
  },
  {
    id: 10,
    section: "Grammar",
    question: "You can plant these flowers ____ the autumn.",
    options: ["at", "in", "on"],
    correct: ["in"],
  },
  {
    id: 11,
    section: "Grammar",
    question: "Is your neighbourhood quiet ____ night?",
    options: ["at", "in", "on"],
    correct: ["at"],
  },
  {
    id: 12,
    section: "Grammar",
    question: "You'll miss the train ____ a taxi. Choose TWO correct options.",
    options: [
      "in case you take",
      "even if you take",
      "provided that you take",
      "whether or not you take",
    ],
    correct: ["even if you take", "whether or not you take"],
    note: "Choose TWO options.",
  },
  {
    id: 13,
    section: "Grammar",
    question: "If I had known about your plans earlier, I ____ you. Choose TWO correct options.",
    options: [
      "might have warned",
      "might warn",
      "would warn",
      "would have warned",
    ],
    correct: ["might have warned", "would have warned"],
    note: "Choose TWO options.",
  },
  {
    id: 14,
    section: "Grammar",
    question: "Despite yesterday's snowfalls, we ____ home in less than an hour.",
    options: ["could drive", "can drive", "were able to drive", "are able to drive"],
    correct: ["were able to drive"],
  },
  {
    id: 15,
    section: "Grammar",
    question:
      "She swam strongly and ____ cross the river easily, even though it was swollen by the heavy rain.",
    options: ["can", "was able to", "could", "is able to"],
    correct: ["was able to"],
  },
  {
    id: 16,
    section: "Grammar",
    question: "____ me to get you some water?",
    options: ["Would you like", "Should you like", "Shall you like", "Will you like"],
    correct: ["Would you like"],
  },
  {
    id: 17,
    section: "Use of English",
    question: "Choose the correct sentence.",
    options: [
      "I am agree with you.",
      "I agree with you.",
      "I agreeing with you.",
      "I agree you.",
    ],
    correct: ["I agree with you."],
  },
  {
    id: 18,
    section: "Use of English",
    question: "Choose the correct phrase.",
    options: [
      "I look forward to hear from you.",
      "I look forward to hearing from you.",
      "I look forward hearing from you.",
      "I look forward hear from you.",
    ],
    correct: ["I look forward to hearing from you."],
  },
  {
    id: 19,
    section: "Use of English",
    question: "Choose the correct option: I'm interested ____ learning English.",
    options: ["on", "in", "at", "for"],
    correct: ["in"],
  },
  {
    id: 20,
    section: "Use of English",
    question: "Choose the best sentence.",
    options: [
      "She suggested going to the cinema.",
      "She suggested to go to the cinema.",
      "She suggested go to the cinema.",
      "She suggested we going to the cinema.",
    ],
    correct: ["She suggested going to the cinema."],
  },
  {
    id: 21,
    section: "Use of English",
    question: "Choose the correct option: I wish I ____ more free time.",
    options: ["have", "had", "will have", "am having"],
    correct: ["had"],
  },
  {
    id: 22,
    section: "Vocabulary",
    question: "All couples have their ____; no relationship is perfect.",
    options: ["thin and thick", "ups and downs", "fun and games", "hustle and bustle"],
    correct: ["ups and downs"],
  },
  {
    id: 23,
    section: "Vocabulary",
    question: "The drawer is full of ____; there is nothing of value in there.",
    options: ["pros and cons", "wine and dine", "bread and butter", "odds and ends"],
    correct: ["odds and ends"],
  },
  {
    id: 24,
    section: "Vocabulary",
    question: "After hiking all day, Jane noticed she had a painful ____ on her heel.",
    options: ["sore throat", "nausea", "sunburn", "blister"],
    correct: ["blister"],
  },
  {
    id: 25,
    section: "Vocabulary",
    question: "Joe is ____ a terrible cold.",
    options: ["passing out", "suffering from", "getting ill", "coming round"],
    correct: ["suffering from"],
  },
  {
    id: 26,
    section: "Vocabulary",
    question: "Tom's a real ____! He's always buying the latest gadgets and devices.",
    options: ["technophobe", "screenshot", "internet provider", "techie"],
    correct: ["techie"],
  },
  {
    id: 27,
    section: "Vocabulary",
    question: "I need to find a ____, so I can check if I've received any emails.",
    options: ["search engine", "techie", "WiFi hotspot", "server"],
    correct: ["WiFi hotspot"],
  },
  {
    id: 28,
    section: "Vocabulary",
    question: "I'm going on a ____ to Spain where I'll meet with the company directors.",
    options: ["road trip", "staycation", "business trip", "backpacking"],
    correct: ["business trip"],
  },
  {
    id: 29,
    section: "Vocabulary",
    question: "The ____ from London to New York usually takes about six hours.",
    options: ["tour", "flight", "road trip", "spa retreat"],
    correct: ["flight"],
  },
  {
    id: 30,
    section: "Vocabulary",
    question: "It took us four hours to reach our ____.",
    options: ["travel", "pleasure trip", "journey", "destination"],
    correct: ["destination"],
  },
  {
    id: 31,
    section: "Vocabulary",
    question: "He was very ____ and never doubted his abilities.",
    options: ["self-confident", "innocent", "sociable", "talented"],
    correct: ["self-confident"],
  },
  {
    id: 32,
    section: "Reading",
    question:
      "Deadly TikTok challenges — Gap 1. TikTok users carry out challenges. A successful challenge will go viral...",
    options: [
      "The bereaved families are suing TikTok for spreading the challenge among impressionable youngsters.",
      "They allow users not only to express their creativity through editing and special effects but also to participate and engage with a worldwide community.",
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
      "It added that doing so was not funny and certainly wouldn't make users famous.",
      "No talent is required beyond a little extroversion and commitment.",
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
    correct: [
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
    ],
  },
  {
    id: 33,
    section: "Reading",
    question:
      "Deadly TikTok challenges — Gap 2. Anyone with a smartphone can get involved. Users can just ride the trend to gain popularity.",
    options: [
      "The bereaved families are suing TikTok for spreading the challenge among impressionable youngsters.",
      "They allow users not only to express their creativity through editing and special effects but also to participate and engage with a worldwide community.",
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
      "It added that doing so was not funny and certainly wouldn't make users famous.",
      "No talent is required beyond a little extroversion and commitment.",
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
    correct: ["No talent is required beyond a little extroversion and commitment."],
  },
  {
    id: 34,
    section: "Reading",
    question:
      "Deadly TikTok challenges — Gap 3. The young brain values things that provide a sense of inclusion and popularity.",
    options: [
      "The bereaved families are suing TikTok for spreading the challenge among impressionable youngsters.",
      "They allow users not only to express their creativity through editing and special effects but also to participate and engage with a worldwide community.",
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
      "It added that doing so was not funny and certainly wouldn't make users famous.",
      "No talent is required beyond a little extroversion and commitment.",
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
    correct: [
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
    ],
  },
  {
    id: 35,
    section: "Reading",
    question:
      "Deadly TikTok challenges — Gap 4. TikTok stated that it did not allow dangerous challenges and any such content would be removed.",
    options: [
      "The bereaved families are suing TikTok for spreading the challenge among impressionable youngsters.",
      "They allow users not only to express their creativity through editing and special effects but also to participate and engage with a worldwide community.",
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
      "It added that doing so was not funny and certainly wouldn't make users famous.",
      "No talent is required beyond a little extroversion and commitment.",
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
    correct: [
      "It added that doing so was not funny and certainly wouldn't make users famous.",
    ],
  },
  {
    id: 36,
    section: "Reading",
    question:
      "Deadly TikTok challenges — Gap 5. Several youngsters died after the blackout challenge.",
    options: [
      "The bereaved families are suing TikTok for spreading the challenge among impressionable youngsters.",
      "They allow users not only to express their creativity through editing and special effects but also to participate and engage with a worldwide community.",
      "These encourage people to video themselves doing some kind of activity, such as singing, dancing or acting.",
      "The more attention a young person's stunt might get, the less likely he or she is to consider its potential risks.",
      "It added that doing so was not funny and certainly wouldn't make users famous.",
      "No talent is required beyond a little extroversion and commitment.",
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
    correct: [
      "Even so, the parents of the deceased youngsters claim that TikTok's dangerous algorithms are responsible for their children's deaths.",
    ],
  },
  {
    id: 37,
    section: "Listening",
    question: "She never thought she was going to survive.",
    options: ["True", "False"],
    correct: ["False"],
  },
  {
    id: 38,
    section: "Listening",
    question: "The plane crashed due to a storm.",
    options: ["True", "False"],
    correct: ["True"],
  },
  {
    id: 39,
    section: "Listening",
    question: "After the crash, she tried to rescue her grandfather.",
    options: ["True", "False"],
    correct: ["True"],
  },
  {
    id: 40,
    section: "Listening",
    question: "When the plane crashed, she was sleeping.",
    options: ["True", "False"],
    correct: ["False"],
  },
  {
    id: 41,
    section: "Listening",
    question: "She could find her way out of the forest thanks to a TV show.",
    options: ["True", "False"],
    correct: ["True"],
  },
  {
    id: 42,
    section: "Listening",
    question: "Once she reached the highway, a car took her immediately.",
    options: ["True", "False"],
    correct: ["False"],
  },
  {
    id: 43,
    section: "Listening",
    question:
      "After what happened, it's hard for her to find the strength to live again.",
    options: ["True", "False"],
    correct: ["False"],
  },
];

const sections: Section[] = [
  "Grammar",
  "Use of English",
  "Vocabulary",
  "Reading",
  "Listening",
  "Speaking",
];

const AUTO_MAX_SCORE = 90;
const SPEAKING_MAX_SCORE = 10;
const TOTAL_MAX_SCORE = 100;

function formatTime(seconds: number) {
  const safeSeconds = Math.max(seconds, 0);
  const minutes = Math.floor(safeSeconds / 60);
  const sec = safeSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

function getEstimatedLevel(score90: number) {
  const percent = (score90 / AUTO_MAX_SCORE) * 100;

  if (percent <= 30) return "A1";
  if (percent <= 50) return "A2";
  if (percent <= 75) return "B1";
  return "B2";
}

export default function PlacementTestPage() {
  const totalTime = 45 * 60;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>("Grammar");
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingUrl, setRecordingUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [aiFeedback, setAiFeedback] = useState("");
  const [checkingAI, setCheckingAI] = useState(false);
  const [speakingChecked, setSpeakingChecked] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const groupedQuestions = useMemo(() => {
    return questions.reduce<Record<Section, Question[]>>(
      (acc, question) => {
        acc[question.section].push(question);
        return acc;
      },
      {
        Grammar: [],
        "Use of English": [],
        Vocabulary: [],
        Reading: [],
        Listening: [],
        Speaking: [],
      }
    );
  }, []);

  const correctCount = useMemo(() => {
    return questions.reduce((total, question) => {
      const userAnswer = answers[question.id] || [];
      const sortedUser = [...userAnswer].sort().join("|");
      const sortedCorrect = [...question.correct].sort().join("|");

      return sortedUser === sortedCorrect ? total + 1 : total;
    }, 0);
  }, [answers]);

  const autoScore = Math.round((correctCount / questions.length) * AUTO_MAX_SCORE);
  const level = getEstimatedLevel(autoScore);

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [timeLeft, submitted]);

  useEffect(() => {
    return () => {
      stopMicrophoneTracks();
      if (recordingUrl) {
        URL.revokeObjectURL(recordingUrl);
      }
    };
  }, [recordingUrl]);

  function stopMicrophoneTracks() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }

  function handleAnswer(question: Question, option: string) {
    if (submitted) return;

    setAnswers((prev) => {
      const current = prev[question.id] || [];

      if (question.correct.length > 1) {
        const alreadySelected = current.includes(option);

        if (alreadySelected) {
          return {
            ...prev,
            [question.id]: current.filter((item) => item !== option),
          };
        }

        if (current.length >= question.correct.length) {
          return {
            ...prev,
            [question.id]: [...current.slice(1), option],
          };
        }

        return {
          ...prev,
          [question.id]: [...current, option],
        };
      }

      return {
        ...prev,
        [question.id]: [option],
      };
    });
  }

  function scrollToSection(section: Section) {
    setActiveSection(section);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function goToRecommendation() {
    const params = new URLSearchParams({
      level,
      autoScore: String(autoScore),
    });

    window.location.href = `/recommendation?${params.toString()}`;
  }

  async function startRecording() {
    if (isRecording || checkingAI) return;

    try {
      resetRecordingData();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });

        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordingUrl(audioUrl);

        stopMicrophoneTracks();
        setIsRecording(false);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error(error);
      setIsRecording(false);
      stopMicrophoneTracks();
      alert("Microphone access was denied or something went wrong.");
    }
  }

  function stopRecording() {
    if (!mediaRecorderRef.current) return;

    if (mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }

    setIsRecording(false);
  }

  function resetRecordingData() {
    if (recordingUrl) {
      URL.revokeObjectURL(recordingUrl);
    }

    setRecordingUrl("");
    setTranscript("");
    setAiFeedback("");
    setSpeakingChecked(false);
    audioChunksRef.current = [];
  }

  function clearRecording() {
    if (isRecording) {
      stopRecording();
    }

    resetRecordingData();
    stopMicrophoneTracks();
  }

  async function checkSpeakingWithAI() {
    if (audioChunksRef.current.length === 0) {
      alert("Please record your answer first.");
      return;
    }

    try {
      setCheckingAI(true);
      setTranscript("");
      setAiFeedback("");
      setSpeakingChecked(false);

      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });

      const formData = new FormData();
      formData.append("audio", audioBlob, "speaking-answer.webm");

      const response = await fetch("/api/speaking-check", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "AI check failed.");
        return;
      }

      setTranscript(data.transcript || "");
      setAiFeedback(data.feedback || "");
      setSpeakingChecked(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while checking your speaking.");
    } finally {
      setCheckingAI(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6efe7",
        color: "#2f241f",
      }}
    >
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: sidebarOpen ? 260 : 72,
          background: "#2f241f",
          color: "#fffaf5",
          padding: sidebarOpen ? "24px 16px" : "24px 10px",
          transition: "0.3s",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        <button
          type="button"
          onClick={() => setSidebarOpen((prev) => !prev)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
            marginBottom: 24,
          }}
        >
          {sidebarOpen ? "← Hide" : "☰"}
        </button>

        {sidebarOpen && (
          <h2 style={{ fontSize: 18, marginBottom: 18 }}>Test sections</h2>
        )}

        <nav style={{ display: "grid", gap: 10 }}>
          {sections.map((section) => (
            <button
              type="button"
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                padding: sidebarOpen ? "12px 14px" : "12px 0",
                borderRadius: 14,
                border: "none",
                textAlign: sidebarOpen ? "left" : "center",
                background:
                  activeSection === section ? "#c49a7c" : "rgba(255,255,255,0.08)",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              {sidebarOpen ? section : section[0]}
            </button>
          ))}
        </nav>
      </aside>

      <div
        style={{
          marginLeft: sidebarOpen ? 280 : 92,
          padding: "40px 24px",
          transition: "0.3s",
        }}
      >
        <header
          style={{
            maxWidth: 980,
            margin: "0 auto 28px",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ marginBottom: 8 }}>English Placement Test</h1>
            <p style={{ color: "#6f5f55" }}>
              Grammar, Use of English, Vocabulary, Reading, Listening and Speaking.
            </p>
          </div>

          <div
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 9999,
              padding: "16px 24px",
              borderRadius: 24,
              background: timeLeft <= 300 ? "#fee2e2" : "#fffaf5",
              border: "1px solid #e5d7ca",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              fontWeight: 900,
              fontSize: 32,
              color: timeLeft <= 300 ? "#991b1b" : "#2f241f",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>⏳</span>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </header>

        {!submitted && (
          <section
            style={{
              maxWidth: 980,
              margin: "0 auto 24px",
              background: "#fffaf5",
              border: "1px solid #e5d7ca",
              borderRadius: 24,
              padding: 24,
              boxShadow: "0 10px 30px rgba(80, 55, 40, 0.08)",
            }}
          >
            <p>
              <strong>Time:</strong> 45 minutes
            </p>
            <p>
              <strong>Automatic score:</strong> {AUTO_MAX_SCORE} points
            </p>
            <p>
              <strong>Speaking:</strong> {SPEAKING_MAX_SCORE} points, checked by AI
              and teacher.
            </p>
            <p>
              <strong>Total:</strong> {TOTAL_MAX_SCORE} points
            </p>
          </section>
        )}

        {!submitted && (
          <>
            {sections.map((section) => (
              <section
                key={section}
                id={section}
                style={{
                  maxWidth: 980,
                  margin: "0 auto 28px",
                  background: "#fff",
                  border: "1px solid #e5d7ca",
                  borderRadius: 24,
                  padding: 24,
                  boxShadow: "0 10px 30px rgba(80, 55, 40, 0.06)",
                }}
              >
                <h2 style={{ marginBottom: 18 }}>{section}</h2>

                {section === "Listening" && (
                  <div
                    style={{
                      background: "#fffaf5",
                      border: "1px dashed #c49a7c",
                      borderRadius: 18,
                      padding: 24,
                      marginBottom: 18,
                    }}
                  >
                    <h3 style={{ marginBottom: 12, fontSize: 24 }}>
                      Listening Part 1
                    </h3>

                    <p
                      style={{
                        marginBottom: 18,
                        color: "#6f5f55",
                        lineHeight: 1.6,
                      }}
                    >
                      Watch the video and answer the questions below.
                    </p>

                    <video
                      controls
                      controlsList="nodownload"
                      style={{
                        width: "100%",
                        maxHeight: 420,
                        marginBottom: 28,
                        borderRadius: 18,
                        background: "#000",
                      }}
                    >
                      <source src="/audio/listening-part1.mp4" type="video/mp4" />
                    </video>
                  </div>
                )}

                {section === "Speaking" && (
                  <div
                    style={{
                      background: "#fffaf5",
                      border: "1px dashed #c49a7c",
                      borderRadius: 18,
                      padding: 24,
                      marginBottom: 18,
                    }}
                  >
                    <h3 style={{ fontSize: 26, marginBottom: 18 }}>
                      🎤 Speaking Task
                    </h3>

                    <p style={{ lineHeight: 1.7, marginBottom: 18 }}>
                      <strong>
                        Do you think social media has a positive or negative influence
                        on people’s lives?
                      </strong>
                    </p>

                    <p style={{ marginBottom: 12 }}>
                      Please record a voice answer. Recommended length: 1.5–2 minutes.
                    </p>

                    <div
                      style={{
                        background: "#fff",
                        padding: 18,
                        borderRadius: 16,
                        border: "1px solid #e5d7ca",
                        marginBottom: 20,
                      }}
                    >
                      <p style={{ marginBottom: 10 }}>In your answer, mention:</p>

                      <ul style={{ paddingLeft: 22, lineHeight: 1.8 }}>
                        <li>your personal opinion</li>
                        <li>advantages of social media</li>
                        <li>disadvantages of social media</li>
                        <li>a real-life or personal example</li>
                      </ul>

                      <p style={{ marginTop: 14, color: "#6f5f55" }}>
                        Try to use linking words: however, because, although, in my
                        opinion, on the other hand.
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={startRecording}
                        disabled={isRecording || checkingAI}
                        style={{
                          padding: "14px 20px",
                          borderRadius: 16,
                          border: "none",
                          background: isRecording ? "#c9b8aa" : "#2f241f",
                          color: "#fff",
                          fontWeight: 800,
                          cursor:
                            isRecording || checkingAI ? "not-allowed" : "pointer",
                        }}
                      >
                        {recordingUrl ? "🎙️ Record again" : "🎙️ Start recording"}
                      </button>

                      <button
                        type="button"
                        onClick={stopRecording}
                        disabled={!isRecording}
                        style={{
                          padding: "14px 20px",
                          borderRadius: 16,
                          border: "none",
                          background: !isRecording ? "#c9b8aa" : "#991b1b",
                          color: "#fff",
                          fontWeight: 800,
                          cursor: !isRecording ? "not-allowed" : "pointer",
                        }}
                      >
                        ⏹ Stop recording
                      </button>

                      {recordingUrl && (
                        <button
                          type="button"
                          onClick={clearRecording}
                          disabled={isRecording || checkingAI}
                          style={{
                            padding: "14px 20px",
                            borderRadius: 16,
                            border: "1px solid #c49a7c",
                            background: "#fff",
                            color: "#2f241f",
                            fontWeight: 800,
                            cursor:
                              isRecording || checkingAI ? "not-allowed" : "pointer",
                          }}
                        >
                          🔄 Clear recording
                        </button>
                      )}
                    </div>

                    {isRecording && (
                      <p
                        style={{
                          marginTop: 14,
                          color: "#991b1b",
                          fontWeight: 800,
                        }}
                      >
                        Recording is in progress...
                      </p>
                    )}

                    {recordingUrl && (
                      <div
                        style={{
                          marginTop: 22,
                          background: "#fff",
                          border: "1px solid #e5d7ca",
                          borderRadius: 18,
                          padding: 18,
                        }}
                      >
                        <p style={{ fontWeight: 800, marginBottom: 12 }}>
                          Your recording:
                        </p>

                        <audio
                          controls
                          src={recordingUrl}
                          style={{
                            width: "100%",
                            marginBottom: 16,
                          }}
                        />

                        <button
                          type="button"
                          onClick={checkSpeakingWithAI}
                          disabled={checkingAI || isRecording}
                          style={{
                            padding: "14px 22px",
                            borderRadius: 16,
                            border: "none",
                            background: "#2f241f",
                            color: "#fff",
                            fontWeight: 800,
                            cursor:
                              checkingAI || isRecording ? "not-allowed" : "pointer",
                          }}
                        >
                          {checkingAI
                            ? "Checking with AI..."
                            : speakingChecked
                            ? "Check again with AI"
                            : "Check speaking with AI"}
                        </button>
                      </div>
                    )}

                    {transcript && (
                      <div
                        style={{
                          marginTop: 22,
                          background: "#fff",
                          border: "1px solid #e5d7ca",
                          borderRadius: 18,
                          padding: 18,
                        }}
                      >
                        <p style={{ fontWeight: 800, marginBottom: 12 }}>
                          Transcript:
                        </p>

                        <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>
                          {transcript}
                        </p>
                      </div>
                    )}

                    {aiFeedback && (
                      <div
                        style={{
                          marginTop: 22,
                          background: "#fff",
                          border: "1px solid #e5d7ca",
                          borderRadius: 18,
                          padding: 20,
                          whiteSpace: "pre-wrap",
                          lineHeight: 1.8,
                        }}
                      >
                        <p style={{ fontWeight: 900, marginBottom: 12 }}>
                          AI Speaking Feedback:
                        </p>
                        {aiFeedback}
                      </div>
                    )}
                  </div>
                )}

                {groupedQuestions[section].map((question) => (
                  <div
                    key={question.id}
                    style={{
                      padding: 18,
                      borderRadius: 18,
                      background: "#fffaf5",
                      border: "1px solid #e5d7ca",
                      marginBottom: 18,
                    }}
                  >
                    <p style={{ fontWeight: 800, marginBottom: 8 }}>
                      {question.id}. {question.question}
                    </p>

                    {question.note && (
                      <p style={{ color: "#8a6a57", marginBottom: 12 }}>
                        {question.note}
                      </p>
                    )}

                    <div style={{ display: "grid", gap: 10 }}>
                      {question.options.map((option) => {
                        const selected = (answers[question.id] || []).includes(
                          option
                        );

                        return (
                          <label
                            key={option}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "12px 14px",
                              borderRadius: 14,
                              border: selected
                                ? "2px solid #8a6a57"
                                : "1px solid #e5d7ca",
                              background: selected ? "#f3ebe2" : "#fff",
                              cursor: "pointer",
                            }}
                          >
                            <input
                              type={
                                question.correct.length > 1 ? "checkbox" : "radio"
                              }
                              name={`question-${question.id}`}
                              checked={selected}
                              onChange={() => handleAnswer(question, option)}
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </section>
            ))}

            <div style={{ maxWidth: 980, margin: "0 auto 40px" }}>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                style={{
                  width: "100%",
                  padding: "18px 24px",
                  borderRadius: 20,
                  border: "none",
                  background: "#2f241f",
                  color: "#fffaf5",
                  fontWeight: 900,
                  fontSize: 17,
                  cursor: "pointer",
                }}
              >
                Finish test
              </button>
            </div>
          </>
        )}

        {submitted && (
          <section
            style={{
              maxWidth: 980,
              margin: "0 auto",
              background: "#fffaf5",
              border: "1px solid #e5d7ca",
              borderRadius: 24,
              padding: 28,
              boxShadow: "0 10px 30px rgba(80, 55, 40, 0.08)",
            }}
          >
            <h2 style={{ marginBottom: 18 }}>Test result</h2>

            <p>
              <strong>Correct answers:</strong> {correctCount} / {questions.length}
            </p>

            <p>
              <strong>Automatic score:</strong> {autoScore} / {AUTO_MAX_SCORE}
            </p>

            <p>
              <strong>Speaking score:</strong>{" "}
              {speakingChecked
                ? `AI feedback received / ${SPEAKING_MAX_SCORE}`
                : `pending / ${SPEAKING_MAX_SCORE}`}
            </p>

            <p>
              <strong>Final score:</strong> pending / {TOTAL_MAX_SCORE}
            </p>

            <p>
              <strong>Estimated level based on automatic part:</strong> {level}
            </p>

            {transcript && (
              <div
                style={{
                  marginTop: 22,
                  background: "#fff",
                  border: "1px solid #e5d7ca",
                  borderRadius: 18,
                  padding: 18,
                }}
              >
                <p style={{ fontWeight: 800, marginBottom: 12 }}>
                  Speaking transcript:
                </p>
                <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>
                  {transcript}
                </p>
              </div>
            )}

            {aiFeedback && (
              <div
                style={{
                  marginTop: 22,
                  background: "#fff",
                  border: "1px solid #e5d7ca",
                  borderRadius: 18,
                  padding: 20,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.8,
                }}
              >
                <p style={{ fontWeight: 900, marginBottom: 12 }}>
                  AI Speaking Feedback:
                </p>
                {aiFeedback}
              </div>
            )}

            <button
              type="button"
              onClick={goToRecommendation}
              style={{
                marginTop: 22,
                padding: "14px 22px",
                borderRadius: 16,
                border: "none",
                background: "#2f241f",
                color: "#fffaf5",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Continue to recommendation
            </button>
          </section>
        )}
      </div>
    </main>
  );
}