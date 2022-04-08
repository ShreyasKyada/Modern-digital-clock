const clock = document.getElementsByClassName("clock")[0];

for (let i = 0; i < 8; i++) {
  const section = document.createElement("section");

  for (let j = 0; j < 10; j++) {
    const p = document.createElement("p");
    p.innerHTML = j;
    section.appendChild(p);
  }

  if (i === 2 || i === 5) {
    section.innerHTML = "<p>:</p>";
    section.classList.add("colon");
  } else {
    section.classList.add("timer");
  }
  clock.appendChild(section);
}

const slideDistance =
  document.getElementsByClassName("timer")[0].children[0].clientHeight;

const getHours = (hours) => {
  return hours % 12 === 0 ? 12 : hours % 12;
};

const formatSegment = (segment) => {
  return segment < 10 ? `0${segment}` : segment;
};

const getTime = () => {
  let date = new Date();

  const hours = getHours(date.getHours()),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  return `${formatSegment(hours)}${formatSegment(minutes)}${formatSegment(
    seconds
  )}`;
};

setInterval(() => {
  const arr = getTime()
    .split("")
    .map((char) => {
      return char;
    });

  const timer = document.getElementsByClassName("timer");
  for (let i = 0; i < 6; i++) {
    timer[i].style.marginTop = -(arr[i] * slideDistance) + "px";
    timer[i].children[arr[i]].classList.add("active");

    if (arr[i] === "0") {
      timer[i].children[9].classList.remove("active");
      timer[i].children[5].classList.remove("active");
    } else {
      timer[i].children[arr[i] - 1].classList.remove("active");
    }
  }
}, 1000);
