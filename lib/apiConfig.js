export function getApiUrl() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("apiUrl") || "";
  }
  return "";
}

export function setApiUrl(url) {
  if (typeof window !== "undefined") {
    localStorage.setItem("apiUrl", url);
  }
}

export function removeApiUrl() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("apiUrl");
  }
}
