import React, { useState, useEffect, useLayoutEffect, useRef, Suspense, lazy } from "react";
import { BasicContext } from "../utilities/BasicContext";
import styled, { createGlobalStyle } from "styled-components";

// Lazy Load Components
// _______________ LazyCountDisplay __________________________
const LazyCountDisplay = lazy(() => {
  let delay_seconds = 1;

  return new Promise(resolve => setTimeout(resolve, delay_seconds * 1000))
    .then(() => import("../components/Lazy/LazyCountDisplay"))
});

// _______________ LazyCounter __________________________
const LazyCounter = lazy(() => {
  let delay_seconds = 3;

  return new Promise(resolve => setTimeout(resolve, delay_seconds * 1000))
    .then(() => import("../components/Lazy/LazyCounter"))
});

// _______________ HooksExample1 - default export __________________________
const HooksExample1 = () => {
  const [count] = React.useContext(BasicContext);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [customClass, setCustomClass] = useState("");

  const toggleLoading = () => {
    if (loading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }

  // =====================[ useEffect ]==============================
  useEffect(() => {
    setMounted(true);

    if (loading === false && count !== 0) {
      if (count % 2 === 0) {
        setCustomClass("text-blue");
      } else {
        setCustomClass("text-green");
      }
    }

    return function cleanup() {
      setMounted(false);
    }
  }, [loading, count]);

  // =====================[ useLayoutEffect ]==============================
  const pageRef = useRef();
  useLayoutEffect(() => {
    if (pageRef.current != null) {
      pageRef.current.className = '';
      pageRef.current.classList.add(customClass);
    }

  }, [customClass]);

  return (
    <div>
      <GlobalStyle />
      {loading ? (
        <Loader>
          <button onClick={toggleLoading} >Click Me to Toggle Loading</button>
        </Loader>
      ) : (
          <PageContent pageRef={pageRef} isLoading={loading} toggleLoading={toggleLoading} />
        )}
      <div className="debug">
        <h3>Debug</h3>
        <pre>{JSON.stringify({ mounted: mounted }, null, 2)}</pre>
      </div>
    </div>
  )
}

// _______________ PageContent ________________________________________________
const PageContent = ({ pageRef, isLoading, toggleLoading }) => {
  return (
    <div className="App" ref={pageRef}>
      <h1>Hooks Example 1</h1>
      <Suspense fallback={<Loader style={{ color: "#F94D4D" }} />}>
        <LazyCountDisplay />
        <LazyCounter />
      </Suspense>
      <div style={{ marginTop: "3rem" }}>
        <button onClick={toggleLoading} >Click Me to Toggle Loading</button>
        <pre>{JSON.stringify({ loading: isLoading }, null, 2)}</pre>
      </div>
    </div>
  )
}

// Styled Components 
// _______________ GlobalStyle ________________________________________________
const GlobalStyle = createGlobalStyle`
  .App {
    overflow: auto;
    height: auto;
    margin: 0 auto; 
    padding: 1rem; 
    max-width: 1080px;
    background-color: #ECECEC;
  }

  .text-blue {
    color: #2C83CF; 
    overflow: auto;
    height: auto;
    margin: 0 auto; 
    padding: 1rem; 
    max-width: 1080px;
    background-color: #ECECEC;
  }

  .text-green {
    color: #3BB273;
    overflow: auto;
    height: auto;
    margin: 0 auto; 
    padding: 1rem; 
    max-width: 1080px;
    background-color: #ECECEC;
  }

  .debug {position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    height: auto;
    margin: 0 auto; 
    padding: 0 1rem; 
    font-size: 18px; 
    max-width: 400px;
    background-color: #ECECEC;
  }
`;

// _______________ StyledLoader ______________________________
const StyledLoader = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column; 
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  color: #2C83CF;
  background-color: rgba(44, 131, 207, 0.3);
`;

// _______________ Loader ________________________________________________
const Loader = ({ className, children, style }) => {

  if (style === undefined) {
    return (
      <StyledLoader className={`${className ? className : ""}`}>
        <h1>Loading...</h1>
        {children}
      </StyledLoader>
    )
  }

  return (
    <div className={`${className ? className : ""}`} style={style} >
      <h1>Loading...</h1>
      {children}
    </div>
  )
}

export { LazyCountDisplay, LazyCounter, PageContent, Loader, StyledLoader, GlobalStyle };
export default HooksExample1;



