console.clear()

const table = document.querySelector('table')
const trHead = document.querySelector(".tr-head")

const roadmap = [
    {
      projectName: "Apple Clone",
      projectURL: "www.google.com",
      estimatedTime: "10 days",
      dateStarted: "1.1.2023",
      dateCompleted: "5.1.2023",
      timeSpent: "5"
    },
    {
      projectName: "Figtrend",
      projectURL: "www.google.com",
      estimatedTime: "20 days",
      dateStarted: "5.1.2023",
      dateCompleted: "15.1.2023",
      timeSpent: "10"
    },
    {
      projectName: "Furni",
      projectURL: "www.google.com",
      estimatedTime: "25 days",
      dateStarted: "15.1.2023",
      dateCompleted: "29.1.2023",
      timeSpent: "14"
    }
  ];

  function splitAndUppercaseWords(string) {
    const newText = string
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([a-z])/g, " $1$2")
      .replace(/\ +/g, " ");
    const nextString = newText[0].toUpperCase() + newText.slice(1);
    return nextString;
  }

  function _(type) {
    return document.createElement(type);
  }
  
  const project = roadmap[0];
  const headers = [];

  Object.keys(project).forEach((key) => {
    headers.push(splitAndUppercaseWords(key))
  })

  headers.forEach((header) => {
    const th = _("th");
    th.innerText = splitAndUppercaseWords(header)
    trHead.append(th)
  })

  function createTD(string) {
    const td = _("td")
    td.innerText = string
    return td
  }

  roadmap.forEach((project) => {
    const tr = _("tr")
    const tdName = createTD(project.projectName)
    const tdURL = createTD(project.projectURL)
    const tdEstimated = createTD(project.estimatedTime)
    const tdStart = createTD(project.dateStarted)
    const tdEnd = createTD(project.dateCompleted)
    const tdDuration = createTD(project.timeSpent)
    

  tr.appendChild(tdName)
  tr.appendChild(tdURL)
  tr.appendChild(tdEstimated)
  tr.appendChild(tdStart)
  tr.appendChild(tdEnd)
  tr.appendChild(tdDuration)
  table.appendChild(tr)

})