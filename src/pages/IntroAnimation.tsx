// IntroAnimation.tsx
import React, { useState, useEffect } from "react";
import "./IntroAnimation.css";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [line1, setLine1] = useState<string>("");
  const [line2, setLine2] = useState<string>("");
  const [line3, setLine3] = useState<string>("");
  const [line4, setLine4] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const fullLine1: string = "Denvir De Jesus here.";
  const fullLine2: string = "I may not have your exact stack today...";
  const fullLine3: string = "...but give me two weeks and I'll own it.";
  const fullLine4: string = "Ready to solve what you need?";

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let intervals: NodeJS.Timeout[] = [];

    // Typing animation sequence
    const timeout1 = setTimeout(() => {
      let i = 0;
      const interval1 = setInterval(() => {
        setLine1(fullLine1.slice(0, i + 1));
        i++;
        if (i === fullLine1.length) {
          clearInterval(interval1);

          // Start line 2
          setTimeout(() => {
            let j = 0;
            const interval2 = setInterval(() => {
              setLine2(fullLine2.slice(0, j + 1));
              j++;
              if (j === fullLine2.length) {
                clearInterval(interval2);

                // Start progress bar
                const progressInterval = setInterval(() => {
                  setProgress((prev) => {
                    if (prev >= 100) {
                      clearInterval(progressInterval);

                      // Start line 3 after progress completes
                      let k = 0;
                      const interval3 = setInterval(() => {
                        setLine3(fullLine3.slice(0, k + 1));
                        k++;
                        if (k === fullLine3.length) {
                          clearInterval(interval3);

                          // Start line 4
                          setTimeout(() => {
                            let l = 0;
                            const interval4 = setInterval(() => {
                              setLine4(fullLine4.slice(0, l + 1));
                              l++;
                              if (l === fullLine4.length) {
                                clearInterval(interval4);

                                // Hide cursor and trigger completion
                                setTimeout(() => {
                                  setShowCursor(false);
                                  if (onComplete) {
                                    setTimeout(onComplete, 1000);
                                  }
                                }, 1000);
                              }
                            }, 50);
                          }, 500);
                        }
                      }, 50);
                      return 100;
                    }
                    return prev + 2;
                  });
                }, 30);
              }
            }, 50);
          }, 500);
        }
      }, 70);
    }, 500);

    // Cleanup function
    return () => {
      [...timeouts, ...intervals].forEach((timer) => clearTimeout(timer));
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [onComplete]);

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="line-container">
          <span className="intro-line">{line1}</span>
          {showCursor && line1 === fullLine1 && line2 === "" && (
            <span className="cursor">|</span>
          )}
        </div>

        <div className="line-container">
          <span className="intro-line">{line2}</span>
          {showCursor && line2 === fullLine2 && line3 === "" && (
            <span className="cursor">|</span>
          )}
        </div>

        {line2 === fullLine2 && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <span className="progress-text">2 weeks</span>
          </div>
        )}

        <div className="line-container">
          <span className="intro-line">{line3}</span>
          {showCursor && line3 === fullLine3 && line4 === "" && (
            <span className="cursor">|</span>
          )}
        </div>

        <div className="line-container">
          <span className="intro-line">{line4}</span>
          {showCursor && line4 === fullLine4 && (
            <span className="cursor">|</span>
          )}
        </div>

        {line4 === fullLine4 && !showCursor && (
          <div className="fade-in">
            <button className="enter-button" onClick={onComplete}>
              Enter Portfolio →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroAnimation;
