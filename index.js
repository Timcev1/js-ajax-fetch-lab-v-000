function getIssues() {
  const repo = `https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  fetch(repo, {
    method: 'get',
    headers: {
      `Authorization`: `token ${getToken()}`
    }
  }).then(res => showIssues(json))
}

function showIssues(json) {
  const temp = Handlebars.complie(document.getElementById(`issues-template`).innerHTML);
  var issue = template(json);
  document.getElementById("issues").innerHTML += issue;
}

function createIssue() {
  const repo = `https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues`
  const data = { title: issueTitle, body: issueBody }
   fetch(`${baseApi}repos/${fork}/issues`, {
     method: 'post',
     headers: {
       'Authorization': `token ${getToken()}`
     },
     body: JSON.stringify(data)
   }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
