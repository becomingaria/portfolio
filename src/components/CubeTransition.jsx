import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CubeTransition.css';

// Context for cube navigation
const CubeTransitionContext = createContext(null);

export const useCubeNavigate = () => {
  const context = useContext(CubeTransitionContext);
  const navigate = useNavigate();

  if (!context) {
    // Fallback to regular navigation if not wrapped in provider
    return navigate;
  }

  return context.cubeNavigate;
};

export const CubeTransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle', 'zoom-out', 'rotate', 'zoom-in'
  const [transitionDirection, setTransitionDirection] = useState('forward'); // 'forward' or 'back'
  const [pendingNavigation, setPendingNavigation] = useState(null);

  const cubeNavigate = useCallback((to) => {
    const currentPath = window.location.pathname;

    // Determine direction
    const isMainPage = (p) => p === '/' || p.startsWith('/?');
    const isResumePage = (p) => p === '/resume';

    if ((isMainPage(currentPath) && isResumePage(to)) ||
      (isResumePage(currentPath) && isMainPage(to))) {
      // Trigger cube transition
      setTransitionDirection(isResumePage(to) ? 'forward' : 'back');
      setIsTransitioning(true);
      setPendingNavigation(to);
      setTransitionPhase('zoom-out');
    } else {
      // Regular navigation for other routes
      navigate(to);
    }
  }, [navigate]);

  // Handle transition phases
  useEffect(() => {
    if (!isTransitioning) return;

    let timer;

    if (transitionPhase === 'zoom-out') {
      timer = setTimeout(() => {
        setTransitionPhase('rotate');
      }, 400);
    } else if (transitionPhase === 'rotate') {
      timer = setTimeout(() => {
        // Navigate during rotation
        if (pendingNavigation) {
          navigate(pendingNavigation);
        }
        setTransitionPhase('zoom-in');
      }, 600);
    } else if (transitionPhase === 'zoom-in') {
      timer = setTimeout(() => {
        setTransitionPhase('idle');
        setIsTransitioning(false);
        setPendingNavigation(null);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [isTransitioning, transitionPhase, navigate, pendingNavigation]);

  const getCubeClass = () => {
    let classes = 'cube';
    if (transitionPhase === 'zoom-out') classes += ' zoomed-out';
    if (transitionPhase === 'rotate' || transitionPhase === 'zoom-in') {
      classes += transitionDirection === 'forward' ? ' rotated-to-resume' : ' rotated-to-portfolio';
    }
    if (transitionPhase === 'zoom-in') classes += ' zoomed-in';
    return classes;
  };

  return (
    <CubeTransitionContext.Provider value={{ cubeNavigate, isTransitioning, transitionDirection }}>
      <div className="cube-transition-wrapper">
        {isTransitioning && (
          <div className={`cube-overlay ${transitionPhase}`}>
            <div className="cube-scene">
              <div className={getCubeClass()}>
                {/* Front face - Main page */}
                <div className="cube-face cube-face-front">
                  <div className="cube-face-content">
                    <div className="cube-face-icon">🏠</div>
                    <span className="cube-face-label">Portfolio</span>
                  </div>
                </div>

                {/* Right face - Resume page */}
                <div className="cube-face cube-face-right">
                  <div className="cube-face-content">
                    <div className="cube-face-icon">📄</div>
                    <span className="cube-face-label">Resume</span>
                  </div>
                </div>

                {/* Left face - for back navigation */}
                <div className="cube-face cube-face-left">
                  <div className="cube-face-content">
                    <div className="cube-face-icon">🏠</div>
                    <span className="cube-face-label">Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </CubeTransitionContext.Provider>
  );
};

export default CubeTransitionProvider;
