export const getRandomTime = () => {
  const today = new Date();
  const backendTime = today.toLocaleTimeString('en-GB');
  const userTime = today.toLocaleTimeString();
  console.log(userTime - backendTime);
  return { userTime, backendTime };
};

export const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const secondsToHours = time => {
  const seconds = Number(time);
  const hours = Math.floor(seconds / 3600);

  return hours;
};
