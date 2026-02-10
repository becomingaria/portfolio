import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/WipeTransition.css';

// Context for wipe navigation
const WipeTransitionContext = createContext(null);

export const useWipeNavigate = () => {
  const context = useContext(WipeTransitionContext);
  const navigate = useNavigate();

  if (!context) {
    return navigate;
  }

  return context.wipeNavigate;
};

export const WipeTransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phase, setPhase] = useState('idle'); // 'idle', 'entering', 'exiting'
  const [direction, setDirection] = useState('left'); // 'left' = Home→Resume, 'right' = Resume→Home
  const transitionTimeoutRef = useRef(null);

  const wipeNavigate = useCallback((to) => {
    const currentPath = location.pathname;

    // Determine if this is a transition between home and resume
    const isMainPage = (p) => p === '/' || p.startsWith('/?');
    const isResumePage = (p) => p === '/resume';

    if ((isMainPage(currentPath) && isResumePage(to)) ||
      (isResumePage(currentPath) && isMainPage(to))) {

      // Set direction based on navigation
      const newDirection = isResumePage(to) ? 'right' : 'left';
      setDirection(newDirection);

      // Phase 1: Tiles enter and cover screen
      setPhase('entering');

      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      // Navigate after tiles cover screen (5 tiles * 0.1s delay + 0.5s animation)
      transitionTimeoutRef.current = setTimeout(() => {
        navigate(to);

        // Linger with tiles on screen for 500ms, then exit
        transitionTimeoutRef.current = setTimeout(() => {
          // Phase 2: Tiles exit from opposite side
          setPhase('exiting');

          // Return to idle after exit animation
          transitionTimeoutRef.current = setTimeout(() => {
            setPhase('idle');
          }, 700);
        }, 500);
      }, 700);
    } else {
      navigate(to);
    }
  }, [navigate, location.pathname]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <WipeTransitionContext.Provider value={{ wipeNavigate, isTransitioning: phase !== 'idle', direction }}>
      <div className="wipe-transition-wrapper">
        {/* Tile-based loader */}
        <div className={`loader loader--${phase} loader--${direction}`} aria-hidden="true">
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
          <div className="loader__tile"></div>
        </div>

        {/* Page content */}
        {children}
      </div>
    </WipeTransitionContext.Provider>
  );
};

export default WipeTransitionProvider;
