"use client";

import { CalModal, useCalModal } from "@/components/CalModal";

interface CalButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CalButton({
  children,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}: CalButtonProps) {
  const { isOpen, open, close } = useCalModal();

  return (
    <>
      <button
        onClick={open}
        className={className}
        style={{ cursor: "pointer", ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </button>
      <CalModal isOpen={isOpen} onClose={close} />
    </>
  );
}
