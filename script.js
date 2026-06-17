const placeholderOwner = "Sweep name";

const bracketColumns = [
  {
    id: "left-r32",
    className: "left r32",
    title: "Round of 32",
    subtitle: "Left half",
    matches: [
      match(74, "Round of 32", "Jun 28, 4:00 PM", "Los Angeles", "Winner Group E", "3rd Group A/B/C/D/F"),
      match(77, "Round of 32", "Jun 29, 12:00 PM", "New York/New Jersey", "Winner Group I", "3rd Group C/D/F/G/H"),
      match(73, "Round of 32", "Jun 28, 1:00 PM", "Mexico City", "Runner-up Group A", "Runner-up Group B"),
      match(75, "Round of 32", "Jun 29, 3:00 PM", "Boston", "Winner Group F", "Runner-up Group C"),
      match(83, "Round of 32", "Jul 2, 6:00 PM", "Mexico City", "Runner-up Group K", "Runner-up Group L"),
      match(84, "Round of 32", "Jul 2, 9:00 PM", "New York/New Jersey", "Winner Group H", "Runner-up Group J"),
      match(81, "Round of 32", "Jul 1, 4:00 PM", "Seattle", "Winner Group D", "3rd Group B/E/F/I/J"),
      match(82, "Round of 32", "Jul 1, 6:00 PM", "Santa Clara", "Winner Group G", "3rd Group A/E/H/I/J")
    ]
  },
  {
    id: "left-r16",
    className: "left",
    title: "Round of 16",
    subtitle: "8 matches",
    matches: [
      match(90, "Round of 16", "Jul 4, 6:00 PM", "Houston", "Winner Match 74", "Winner Match 77"),
      match(89, "Round of 16", "Jul 4, 2:00 PM", "Philadelphia", "Winner Match 73", "Winner Match 75"),
      match(93, "Round of 16", "Jul 6, 2:00 PM", "Arlington", "Winner Match 83", "Winner Match 84"),
      match(94, "Round of 16", "Jul 6, 5:00 PM", "Seattle", "Winner Match 81", "Winner Match 82")
    ]
  },
  {
    id: "left-qf",
    className: "left",
    title: "Quarter-finals",
    subtitle: "4 matches",
    matches: [
      match(97, "Quarter-final", "Jul 9, 4:00 PM", "Boston", "Winner Match 89", "Winner Match 90"),
      match(98, "Quarter-final", "Jul 10, 12:00 PM", "Los Angeles", "Winner Match 93", "Winner Match 94")
    ]
  },
  {
    id: "left-sf",
    className: "left",
    title: "Semi-finals",
    subtitle: "2 matches",
    matches: [
      match(101, "Semi-final", "Jul 14, 2:00 PM", "Arlington", "Winner Match 97", "Winner Match 98")
    ]
  },
  {
    id: "final",
    className: "center",
    title: "Final",
    subtitle: "Champion",
    matches: [
      match(104, "Final", "Jul 19, 3:00 PM", "New York/New Jersey", "Winner Match 101", "Winner Match 102", true)
    ],
    champion: "World Cup Winner"
  },
  {
    id: "right-sf",
    className: "right",
    title: "Semi-finals",
    subtitle: "2 matches",
    matches: [
      match(102, "Semi-final", "Jul 15, 3:00 PM", "Atlanta", "Winner Match 99", "Winner Match 100")
    ]
  },
  {
    id: "right-qf",
    className: "right",
    title: "Quarter-finals",
    subtitle: "4 matches",
    matches: [
      match(99, "Quarter-final", "Jul 11, 5:00 PM", "Miami", "Winner Match 91", "Winner Match 92"),
      match(100, "Quarter-final", "Jul 11, 8:00 PM", "Kansas City", "Winner Match 95", "Winner Match 96")
    ]
  },
  {
    id: "right-r16",
    className: "right",
    title: "Round of 16",
    subtitle: "8 matches",
    matches: [
      match(91, "Round of 16", "Jul 5, 5:00 PM", "New York/New Jersey", "Winner Match 76", "Winner Match 78"),
      match(92, "Round of 16", "Jul 5, 9:00 PM", "Mexico City", "Winner Match 79", "Winner Match 80"),
      match(95, "Round of 16", "Jul 7, 12:00 PM", "Atlanta", "Winner Match 86", "Winner Match 88"),
      match(96, "Round of 16", "Jul 7, 1:00 PM", "Vancouver", "Winner Match 85", "Winner Match 87")
    ]
  },
  {
    id: "right-r32",
    className: "right r32",
    title: "Round of 32",
    subtitle: "Right half",
    matches: [
      match(76, "Round of 32", "Jun 29, 6:00 PM", "Monterrey", "Winner Group C", "Runner-up Group F"),
      match(78, "Round of 32", "Jun 29, 6:00 PM", "Dallas", "Runner-up Group E", "Runner-up Group I"),
      match(79, "Round of 32", "Jun 30, 3:00 PM", "Atlanta", "Winner Group A", "3rd Group C/E/F/H/I"),
      match(80, "Round of 32", "Jun 30, 6:00 PM", "San Francisco Bay Area", "Winner Group L", "3rd Group E/H/I/J/K"),
      match(86, "Round of 32", "Jul 3, 6:00 PM", "Dallas", "Winner Group J", "Runner-up Group H"),
      match(88, "Round of 32", "Jul 3, 9:00 PM", "Seattle", "Runner-up Group D", "Runner-up Group G"),
      match(85, "Round of 32", "Jul 3, 3:00 PM", "Miami", "Winner Group B", "3rd Group E/F/G/I/J"),
      match(87, "Round of 32", "Jul 3, 6:00 PM", "Philadelphia", "Winner Group K", "3rd Group D/E/I/J/L")
    ]
  }
];

function match(number, round, when, venue, home, away, isFinal = false) {
  return {
    number,
    round,
    when,
    venue,
    isFinal,
    teams: [
      { flag: "", name: home, owner: placeholderOwner, score: "" },
      { flag: "", name: away, owner: placeholderOwner, score: "" }
    ]
  };
}

function renderBracket() {
  const bracket = document.querySelector("#bracket");
  bracket.innerHTML = bracketColumns.map(renderColumn).join("");
}

function renderColumn(column) {
  const champion = column.champion
    ? `<div class="champion"><span>Champion</span><strong>${column.champion}</strong></div>`
    : "";

  return `
    <div class="round ${column.className}" id="${column.id}">
      <div class="round-title"><span>${column.title}</span><small>${column.subtitle}</small></div>
      ${column.matches.map(renderMatch).join("")}
      ${champion}
    </div>
  `;
}

function renderMatch(item) {
  return `
    <article class="match ${item.isFinal ? "final" : "compact"}">
      <div class="match-head">
        <span class="match-label">Match ${item.number} · ${item.round}</span>
        <span class="match-meta">${item.when}<br>${item.venue}</span>
      </div>
      <div class="team-list">
        ${item.teams.map(renderTeam).join("")}
      </div>
    </article>
  `;
}

function renderTeam(team) {
  return `
    <div class="team">
      <span class="flag">${team.flag || "Flag"}</span>
      <span class="team-text">
        <span class="team-name">${team.name}</span>
        <span class="team-owner">${team.owner}</span>
      </span>
      <span class="score">${team.score || "-"}</span>
    </div>
  `;
}

renderBracket();
