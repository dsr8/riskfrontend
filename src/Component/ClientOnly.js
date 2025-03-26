import React, { useState, useEffect } from "react";
const ClientOnly = ({ children }) => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null; // Prevents hydration mismatch
  
    return children;
  };
  
  export default ClientOnly;