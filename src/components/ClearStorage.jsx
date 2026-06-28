// components/ClearStorage.jsx
"use client";

import { useEffect } from "react";

export default function ClearStorage() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return null;
}
