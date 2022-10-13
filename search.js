const googleSearch = document.querySelector('.googleSearch');
const googleForm = document.querySelector('#googleForm');
const githubSearch = document.querySelector('.githubSearch');
const githubForm = document.querySelector('#githubForm');
const stackoverflowSearch = document.querySelector('.stackoverflowSearch');
const stackoverflowForm = document.querySelector('#stackoverflowForm');
const w3schoolSearch = document.querySelector('.w3schoolSearch');
const w3schoolForm = document.querySelector('#w3schoolForm');


function handleGoogleSearch() {
  const Keyword = googleSearch.value;
  googleSearch.value = "";
  window.open(
    `https://www.google.com/search?q=${Keyword}`,
    replace=false
  );
}

function handleGithubSearch() {
  const Keyword = githubSearch.value;
  githubSearch.value = "";
  window.open(
    `https://www.google.com/search?q=${Keyword}%20site%3Agithub.com`
  );
}

function handleStackoverflowSearch() {
  const Keyword = stackoverflowSearch.value;
  stackoverflowSearch.value = "";
  window.open(
    `https://www.google.com/search?q=${Keyword}%20site%3Astackoverflow.com`
  );
}

function handleW3schoolSearch(){
  const Keyword = w3schoolSearch.value;
  w3schoolSearch.value = "";
  window.open(
    `https://www.google.com/search?q=${Keyword}%20site%3Aw3schools.com`
  ); 
}

googleForm.addEventListener('submit',handleGoogleSearch);
githubForm.addEventListener('submit', handleGithubSearch);
stackoverflowForm.addEventListener('submit',handleStackoverflowSearch);
w3schoolForm.addEventListener('submit', handleW3schoolSearch);