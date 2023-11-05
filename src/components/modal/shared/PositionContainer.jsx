"use client";

import Container from "@/components/modal/shared/Container";
import { useModal } from "@/hooks/useModal";
import { useEffect, useRef, useState } from "react";

const PositionContainer = ({ children }) => {
  const modalRef = useRef();
  const { data } = useModal();
  const [pos, setPos] = useState(data.position);

  useEffect(() => {
    if (modalRef) {
      const rect = modalRef.current.getBoundingClientRect();
      const modalHeight = rect.y + rect.height;

      if (modalHeight > window.innerHeight) {
        setPos((prev) => ({
          ...prev,
          top: data.position.top - (modalHeight - window.innerHeight),
        }));
      }
    }
  }, [modalRef, data]);

  return (
    <div
      ref={modalRef}
      className={`fixed`}
      style={{ top: pos.top, right: pos.right }}
    >
      <Container className="border-2 border-color px-0 py-1 sm:p-2">
        {children}
      </Container>
    </div>
  );
};

export default PositionContainer;
