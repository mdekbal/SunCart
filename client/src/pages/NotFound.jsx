import { useState } from "react";

export default function NotFoundPage() {
    const [config] = useState({
        heading_text: "404",
        message_text: "Looks like this page rolled away in a shopping cart...",
        background_color: "#1a1a2e",
        text_color: "#e2e8f0",
        accent_color: "#f59e0b",
        secondary_text_color: "#94a3b8",
        font_family: "Fredoka",
        font_size: 16,
    });

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
            style={{
                background: `linear-gradient(
          180deg,
          ${config.background_color} 0%,
          #16213e 50%,
          #0f3460 100%
        )`,
                fontFamily: `${config.font_family}, sans-serif`,
            }}
        >
            {/* Sun */}
            <div
                className="absolute"
                style={{ top: "8%", right: "12%" }}
            >
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="28" fill="#f59e0b" />
                </svg>
            </div>

            {/* Cart */}
            <div className="mb-8">
                <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
                    <path
                        d="M10 10h4l8 32h28l6-20H22"
                        stroke="#e2e8f0"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="26" cy="52" r="4" fill="#f59e0b" />
                    <circle cx="46" cy="52" r="4" fill="#f59e0b" />
                </svg>
            </div>

            {/* 404 Heading */}
            <h1
                className="text-7xl md:text-9xl font-bold mb-4 text-center"
                style={{ color: config.text_color }}
            >
                {config.heading_text.split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block"
                        style={{
                            animation: "bounce 1s infinite",
                            animationDelay: `${index * 0.2}s`,
                        }}
                    >
                        {char}
                    </span>
                ))}
            </h1>

            {/* Message */}
            <p
                className="text-center max-w-md px-4"
                style={{
                    color: config.secondary_text_color,
                    fontSize: `${config.font_size * 1.3}px`,
                }}
            >
                {config.message_text}
            </p>

            {/* Button */}
            <button
                onClick={() => (window.location.href = "/")}
                className="mt-8 px-6 py-3 rounded-full font-semibold text-lg transition hover:scale-105"
                style={{
                    backgroundColor: config.accent_color,
                    color: "#1a1a2e",
                }}
            >
                Go Home
            </button>

            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute w-1 h-1 rounded-full bg-white opacity-60"
                    style={{ top: "15%", left: "20%" }}
                />
                <div
                    className="absolute w-1 h-1 rounded-full bg-white opacity-40"
                    style={{ top: "30%", left: "70%" }}
                />
                <div
                    className="absolute w-1 h-1 rounded-full bg-white opacity-50"
                    style={{ top: "50%", left: "10%" }}
                />
            </div>

            <style>
                {`
          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
            </style>
        </div>
    );
}