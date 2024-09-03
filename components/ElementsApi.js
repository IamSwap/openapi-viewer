import { useEffect, useRef } from "react";

export default function ElementsApi({ apiUrl }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (apiUrl && containerRef.current) {
      const proxyUrl = `/api/proxy?url=${encodeURIComponent(apiUrl)}`;

      const elementsApi = document.createElement("elements-api");
      elementsApi.setAttribute("apiDescriptionUrl", proxyUrl);
      elementsApi.setAttribute("router", "hash");
      elementsApi.setAttribute("layout", "sidebar");

      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(elementsApi);
    }
  }, [apiUrl]);

  return <div ref={containerRef} className="h-full w-full" />;
}
