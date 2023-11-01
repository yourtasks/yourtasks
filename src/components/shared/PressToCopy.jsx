"use client";
const PressToCopy = ({ children, textToCopy }) => {
  const handlePress = () => {
    console.log("pressed");
  };
  const handleRelease = () => {
    console.log("release");
  };

  return (
    <div
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      className="w-full flex flex-col gap-y-2 p-1 rounded-md click no-select"
    >
      {children}
    </div>
  );
};

export default PressToCopy;
