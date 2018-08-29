var tickets = new Set();
var jiraTicketRegex = /([A-Z]+-\d+)/;

var jiraBaseURL, blackListRegex;
chrome.storage.sync.get(function(obj) {
  if (obj.blackLists) blackListRegex = new RegExp(obj.blackLists.split(/\s*,\s*/).join('|'),'i');
  jiraBaseURL = obj.jiraBaseURL;
  main();
});

const main = () => {
  if (jiraBaseURL) {
    var branches = document.querySelectorAll('.branch span');
    if (branches && branches[1]) {
      var ticket = branches[1].innerText.match(jiraTicketRegex);
      if (ticket) tickets.add(ticket[1]);
    }
  }
  
  var commitsArray = Array.from(document.querySelectorAll('.commit-message a'));
  var commits = [...new Set(
    commitsArray
    .filter( el => (title = el.title) && (!blackListRegex || !title.match(blackListRegex)) )
    .map(el => `${el.title} ${el.href.match("[^/]+$")[0]}`)
    .map(title => {
      if (jiraBaseURL) {
        var ticket = title.match(jiraTicketRegex);
        if (ticket) tickets.add(ticket[1]);
      }
      return `- ${title}`
    })
  )].join("\n");
  
  var authorsArray = Array.from(document.querySelectorAll('.commit-author a'));
  var authors = [...new Set(
    authorsArray.map(el => `@${el.text}`)
  )].join(', ');
  
  tickets = [...tickets].map(ticket => `- [${ticket}](${jiraBaseURL}/${ticket})`).join("\n");
  
  var ticket_info;
  if (jiraBaseURL && tickets) ticket_info = "**Tickets:**" + "\n" + tickets;
  var commit_info = "**In this release:**" + "\n" + commits;
  var author_info = "**Contributors:**" + "\n" + authors;
  var date = "**Date:**" + "\n" + new Date().toLocaleString();
  
  document.querySelector("#pull_request_body").value = [ ticket_info, commit_info, author_info, date].filter(Boolean).join("\n\n");
  document.querySelector(".preview-tab").click();
}
