import Header from "components/Header/Header";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    script.type = "module";
    document.body.appendChild(script);

    const nomoduleScript = document.createElement("script");
    nomoduleScript.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    nomoduleScript.setAttribute("nomodule", "");
    document.body.appendChild(nomoduleScript);
  }, []);

  return (
    <>
      <Header />
    </>
  );
}
