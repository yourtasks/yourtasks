"use client";

import Container from "@/components/modal/shared/Container";
import { useEffect, useRef, useState } from "react";

const PositionContainer = ({ children }) => {
  const [below, setBelow] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef) {
      const rect = modalRef.current.getBoundingClientRect();
      const modalHeight = rect.y + rect.height;

      if (modalHeight > window.innerHeight) {
        setBelow(true);
      } else {
        setBelow(false);
      }
    }
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={modalRef}
      className={`absolute ${below ? "bottom-8" : "top-8"} right-8 z-50`}
    >
      <Container className="min-w-max border-2 border-color px-0 py-1 sm:p-2">
        {children}
      </Container>
    </div>
  );
};

export default PositionContainer;
