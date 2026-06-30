const placeholderOwner = "";

const bracketColumns = [
  {
    id: "left-r32",
    className: "left r32",
    title: "Round of 32",
    subtitle: "Left half",
    matches: [
      match(74, "Round of 32", "29 Jun, 12:00 AM UK", "Los Angeles", { flag: "https://flagcdn.com/w40/de.png", name: "Germany", owner: "Jackie M", score: "1(2)" }, { flag: "https://flagcdn.com/w40/py.png", name: "Paraguay", owner: "Katrina T", score: "1(4)",  winner: true }),
      match(77, "Round of 32", "29 Jun, 5:00 PM UK", "New York/New Jersey", { flag: "https://flagcdn.com/w40/fr.png", name: "France", owner: "Conor M", score: "" }, { flag: "https://flagcdn.com/w40/se.png", name: "Sweden", owner: "Colette B", score: "" }),
      match(73, "Round of 32", "28 Jun, 8:00 PM UK", "Mexico City", { flag: "https://flagcdn.com/w40/za.png", name: "South Africa", owner: "Teresa Mc", score: "0" }, { flag: "https://flagcdn.com/w40/ca.png", name: "Canada", owner: "Colette B", score: "1", winner: true }),
      match(75, "Round of 32", "29 Jun, 8:00 PM UK", "Boston", { flag: "https://flagcdn.com/w40/nl.png", name: "Netherlands", owner: "Nicola Mc", score: "1(2)" }, { flag: "https://flagcdn.com/w40/ma.png", name: "Morocco", owner: "Terry B", score: "1(3)", winner: true }),
      match(83, "Round of 32", "3 Jul, 1:00 AM UK", "Mexico City", { flag: "https://flagcdn.com/w40/pt.png", name: "Portugal", owner: "Alison G", score: "" }, { flag: "https://flagcdn.com/w40/cr.png", name: "Croatia", owner: "Emma M", score: "" }),
      match(84, "Round of 32", "3 Jul, 2:00 AM UK", "New York/New Jersey", { flag: "https://flagcdn.com/w40/es.png", name: "Spain", owner: "Carl R", score: "" }, { flag: "https://flagcdn.com/w40/at.png", name: "Austria", owner: "Claire Gilm", score: "" }),
      match(81, "Round of 32", "2 Jul, 12:00 AM UK", "Seattle", { flag: "https://flagcdn.com/w40/us.png", name: "USA", owner: "Beirdre C", score: "" }, { flag: "https://flagcdn.com/w40/ba.png", name: "Bosnia", owner: "Darren H", score: "" }),
      match(82, "Round of 32", "2 Jul, 2:00 AM UK", "Santa Clara", { flag: "https://flagcdn.com/w40/be.png", name: "Belgium", owner: "Will F", score: "" }, { flag: "https://flagcdn.com/w40/sn.png", name: "Senegal", owner: "Billy J", score: "" })
    ]
  },
  {
    id: "left-r16",
    className: "left",
    title: "Round of 16",
    subtitle: "8 matches",
    matches: [
      match(90, "Round of 16", "5 Jul, 12:00 AM UK", "Houston", { flag: "https://flagcdn.com/w40/py.png", name: "Paraguay", owner: "Katrina T", score: ""}, { flag: "", name: "Winner Match 77", owner: placeholderOwner, score: "" }),
      match(89, "Round of 16", "4 Jul, 7:00 PM UK", "Philadelphia", { flag: "https://flagcdn.com/w40/ca.png", name: "Canada", owner: "Colette B", score: "" }, { flag: "https://flagcdn.com/w40/ma.png", name: "Morocco", owner: "Terry B", score: "" }),
      match(93, "Round of 16", "6 Jul, 8:00 PM UK", "Arlington", { flag: "", name: "Winner Match 83", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 84", owner: placeholderOwner, score: "" }),
      match(94, "Round of 16", "7 Jul, 1:00 AM UK", "Seattle", { flag: "", name: "Winner Match 81", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 82", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "left-qf",
    className: "left",
    title: "Quarter-finals",
    subtitle: "4 matches",
    matches: [
      match(97, "Quarter-final", "9 Jul, 9:00 PM UK", "Boston", { flag: "", name: "Winner Match 89", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 90", owner: placeholderOwner, score: "" }),
      match(98, "Quarter-final", "10 Jul, 8:00 PM UK", "Los Angeles", { flag: "", name: "Winner Match 93", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 94", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "left-sf",
    className: "left",
    title: "Semi-finals",
    subtitle: "2 matches",
    matches: [
      match(101, "Semi-final", "14 Jul, 8:00 PM UK", "Arlington", { flag: "", name: "Winner Match 97", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 98", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "final",
    className: "center",
    title: "Final",
    subtitle: "Champion",
    matches: [
      match(104, "Final", "19 Jul, 8:00 PM UK", "New York/New Jersey", { flag: "", name: "Winner Match 101", owner: placeholderOwner, score: ""}, { flag: "", name: "Winner Match 102", owner: placeholderOwner, score: "" }, true)
    ],
    champion: ". . ."
  },
  {
    id: "right-sf",
    className: "right",
    title: "Semi-finals",
    subtitle: "2 matches",
    matches: [
      match(102, "Semi-final", "15 Jul, 8:00 PM UK", "Atlanta", { flag: "", name: "Winner Match 99", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 100", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "right-qf",
    className: "right",
    title: "Quarter-finals",
    subtitle: "4 matches",
    matches: [
      match(99, "Quarter-final", "11 Jul, 10:00 PM UK", "Miami", { flag: "", name: "Winner Match 91", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 92", owner: placeholderOwner, score: "" }),
      match(100, "Quarter-final", "12 Jul, 2:00 AM UK", "Kansas City", { flag: "", name: "Winner Match 95", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 96", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "right-r16",
    className: "right",
    title: "Round of 16",
    subtitle: "8 matches",
    matches: [
      match(91, "Round of 16", "5 Jul, 10:00 PM UK", "New York/New Jersey", { flag: "https://flagcdn.com/w40/br.png", name: "Brazil", owner: "Darren H", score: "" }, { flag: "", name: "Winner Match 78", owner: placeholderOwner, score: "" }),
      match(92, "Round of 16", "6 Jul, 4:00 AM UK", "Mexico City", { flag: "", name: "Winner Match 79", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 80", owner: placeholderOwner, score: "" }),
      match(95, "Round of 16", "7 Jul, 5:00 PM UK", "Atlanta", { flag: "", name: "Winner Match 86", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 88", owner: placeholderOwner, score: "" }),
      match(96, "Round of 16", "7 Jul, 9:00 PM UK", "Vancouver", { flag: "", name: "Winner Match 85", owner: placeholderOwner, score: "" }, { flag: "", name: "Winner Match 87", owner: placeholderOwner, score: "" })
    ]
  },
  {
    id: "right-r32",
    className: "right r32",
    title: "Round of 32",
    subtitle: "Right half",
    matches: [
      match(76, "Round of 32", "30 Jun, 1:00 AM UK", "Monterrey", { flag: "https://flagcdn.com/w40/br.png", name: "Brazil", owner: "Darren H", score: "2", winner: true }, { flag: "https://flagcdn.com/w40/jp.png", name: "Japan", owner: "Charlene F", score: "1" }),
      match(78, "Round of 32", "30 Jun, 12:00 AM UK", "Dallas", { flag: "https://flagcdn.com/w40/ci.png", name: "Ivory Coast", owner: "Nicola S", score: "" }, { flag: "https://flagcdn.com/w40/no.png", name: "Norway", owner: "Mark B", score: "" }),
      match(79, "Round of 32", "30 Jun, 8:00 PM UK", "Atlanta", { flag: "https://flagcdn.com/w40/mx.png", name: "Mexico", owner: "Carl R", score: "" }, { flag: "https://flagcdn.com/w40/ec.png", name: "Ecuador", owner: "Jim W", score: "" }),
      match(80, "Round of 32", "1 Jul, 2:00 AM UK", "San Francisco Bay Area", { flag: "https://flagcdn.com/w40/gb-eng.png", name: "England", owner: "Catherine S", score: "" }, { flag: "https://flagcdn.com/w40/cd.png", name: "DR Congo", owner: "Steven L", score: "" }),
      match(86, "Round of 32", "4 Jul, 12:00 AM UK", "Dallas", { flag: "https://flagcdn.com/w40/ar.png", name: "Argentina", owner: "Paul F", score: "" }, { flag: "https://flagcdn.com/w40/cv.png", name: "Cabo Verde", owner: "Chris B", score: "" }),
      match(88, "Round of 32", "4 Jul, 5:00 AM UK", "Seattle", { flag: "https://flagcdn.com/w40/au.png", name: "Australia", owner: "Claire Gilm", score: "" }, { flag: "https://flagcdn.com/w40/eg.png", name: "Egypt", owner: "David R", score: "" }),
      match(85, "Round of 32", "3 Jul, 8:00 PM UK", "Miami", { flag: "https://flagcdn.com/w40/ch.png", name: "Switzerland", owner: "Neill V", score: "" }, { flag: "https://flagcdn.com/w40/dz.png", name: "Algeria", owner: "Alan T", score: "" }),
      match(87, "Round of 32", "3 Jul, 11:00 PM UK", "Philadelphia", { flag: "https://flagcdn.com/w40/co.png", name: "Colombia", owner: "Chris E", score: "" }, { flag: "https://flagcdn.com/w40/gh.png", name: "Ghana", owner: "Carl R", score: "" })
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
    teams: [home, away]
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
      </div>
      <div class="team-list">
        ${item.teams.map(renderTeam).join("")}
      </div>
    </article>
  `;
}

function renderTeam(team) {
  return `
    <div class="team ${team.winner ? "winner" : ""}">
      <span class="flag">${renderFlag(team.flag)}</span>
      <span class="team-text">
        <span class="team-name">${team.name}</span>
        <span class="team-owner">${team.owner}</span>
      </span>
      <span class="score">${team.score || "-"}</span>
    </div>
  `;
}

function renderFlag(flag) {
  if (!flag) {
    return "";
  }

  if (flag.startsWith("http")) {
    return `<img src="${flag}" alt="">`;
  }

  return flag;
}

renderBracket();
