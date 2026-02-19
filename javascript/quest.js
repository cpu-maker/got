let quests = [
  {
    id: 1,
    name: "Clear the Forest",
    description: "Defeat 5 enemies.",
    progress: 0,
    goal: 5,
    completed: false
  }
];

function updateQuestUI() {
  const questLog = document.getElementById("questLog");
  questLog.innerHTML = quests.map(q =>
    `${q.name}: ${q.progress}/${q.goal}`
  ).join("<br>");
}
