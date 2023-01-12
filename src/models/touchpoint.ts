type TouchPoint = {
  id: string;
  title: string;
  location: string;
  date: string;
  type: "assignment" | "call" | "test";
  alert?: boolean;
};

export default TouchPoint;
