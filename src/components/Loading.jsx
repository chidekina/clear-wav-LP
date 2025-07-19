import React from "react";

export default function Loading() {
    return (
        <div className="bg-[#0A1833] min-h-screen flex items-center justify-center">
            <img
                src="/clear-wave.png"
                alt="Clear Wave Logo"
                className="w-72 animate-logo-blink"
            />
            <style>{`
        @keyframes logo-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-logo-blink {
          animation: logo-blink 1.2s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
