const requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

const inProgress = requests.some((request) => request.status === "pending");

console.log(inProgress);
