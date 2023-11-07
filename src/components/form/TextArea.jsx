"use client";

import { useState } from "react";

const TextArea = ({ ...props }) => {
  return <textarea rows={10} {...props} className="input-field" />;
};

export default TextArea;
