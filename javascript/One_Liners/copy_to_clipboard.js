// copy text to clipboard

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

copyToClipboard("Hello Michael!");
