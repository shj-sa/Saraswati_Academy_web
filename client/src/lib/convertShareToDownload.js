export const convertDriveLink = (shareLink) => {
  const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  } else {
    return null; // or throw an error / return a message
  }
};
