export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (err: unknown): string => {
  let message: string;
  if (err instanceof Error) {
    message = err.message;
  } else if (err && typeof err === "object" && "message" in err) {
    message = String(err.message);
  } else if (typeof err === "string") {
    message = err;
  } else {
    message = "Unknown error ";
  }
  return message;
};
