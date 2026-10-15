const scenes = {
  start: {
    title: "Campus Night",
    text: "Hacktoberfest night on campus. The lab lights are on, Discord is buzzing, and you have one hour before the GHW challenge window closes. Where do you go first?",
    choices: [
      { label: "Head to the computer lab", next: "lab" },
      { label: "Check the courtyard event board", next: "courtyard" }
    ]
  },
  lab: {
    title: "The lab",
    text: "A classmate is stuck on a GitHub Skills step. Copilot has a suggestion open in the editor. Do you pair, or finish your own submission first?",
    choices: [
      { label: "Pair and ship their pull request", next: "pair" },
      { label: "Finish your Copilot challenge first", next: "solo" }
    ]
  },
  courtyard: {
    title: "The courtyard",
    text: "The board lists a late workshop: Getting Started with Copilot. You can still grab a seat, or you can stay outside and sketch a tiny game on paper.",
    choices: [
      { label: "Join the workshop", next: "workshop" },
      { label: "Sketch the game on a bench", next: "sketch" }
    ]
  },
  pair: {
    title: "Shipped together",
    text: "You walk through the Copilot review comments, they merge, and you both still have time to submit.",
    ending: "Ending: collaborators finish stronger. You submitted on time."
  },
  solo: {
    title: "Solo sprint",
    text: "Your choose-your-own-adventure page is live. You send the repo link with a screenshot, then go back to help.",
    ending: "Ending: you made the deadline, then paid it forward."
  },
  workshop: {
    title: "Workshop",
    text: "You complete the Copilot skills exercise in the preconfigured Codespace and capture the completion screen.",
    ending: "Ending: Skills course done. Repo link plus screenshot, as asked."
  },
  sketch: {
    title: "Paper prototype",
    text: "The sketch becomes this tiny browser game. Copilot turns the branches into code before the hour is up.",
    ending: "Ending: a simple app, built with Copilot, shared as the challenge."
  }
};

const titleEl = document.getElementById("title");
const storyEl = document.getElementById("story");
const choicesEl = document.getElementById("choices");
const endingEl = document.getElementById("ending");
const restartEl = document.getElementById("restart");

function show(id) {
  const scene = scenes[id];
  titleEl.textContent = scene.title;
  storyEl.textContent = scene.text;
  choicesEl.innerHTML = "";
  endingEl.hidden = true;
  restartEl.hidden = true;

  if (scene.ending) {
    endingEl.hidden = false;
    endingEl.textContent = scene.ending;
    restartEl.hidden = false;
    return;
  }

  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.label;
    button.addEventListener("click", () => show(choice.next));
    choicesEl.appendChild(button);
  });
}

restartEl.addEventListener("click", () => show("start"));
show("start");
