$("#btn-skill").click(
  function() {
    initSkillsForm();
    if(document.getElementById("slide-container").style.display != 'block'){                    
      $("#slide-container").show();                  
    };               
    if(document.getElementById("study-container").style.display == 'block'){                    
      $("#study-container").hide();                    
    };
    if(document.getElementById("work-container").style.display == 'block'){                    
      $("#work-container").hide();                    
    };
    if(document.getElementById("dev-container").style.display == 'block'){                    
      $("#dev-container").hide();                    
    };
    if(document.getElementById("skill-container").style.display != 'block'){                    
      $("#skill-container").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };     
  }
);
$("#btn-study").click(
  function() {
    if(document.getElementById("slide-container").style.display != 'block'){                    
      $("#slide-container").show();
    };
    if(document.getElementById("skill-container").style.display == 'block'){                    
      $("#skill-container").hide();
    };
    if(document.getElementById("work-container").style.display == 'block'){                    
      $("#work-container").hide();
    };
    if(document.getElementById("dev-container").style.display == 'block'){                    
      $("#dev-container").hide();
    }; 
    if(document.getElementById("study-container").style.display != 'block'){                    
      $("#study-container").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };               
  }
);
$("#btn-work").click(
  function() {
    if(document.getElementById("slide-container").style.display != 'block'){                    
      $("#slide-container").show();                  
    };
    if(document.getElementById("study-container").style.display == 'block'){                    
      $("#study-container").hide();                  
    };
    if(document.getElementById("skill-container").style.display == 'block'){                    
      $("#skill-container").hide();                   
    };
    if(document.getElementById("dev-container").style.display == 'block'){                    
      $("#dev-container").hide();
    };
    if(document.getElementById("work-container").style.display != 'block'){                    
      $("#work-container").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };
  }
);
$("#btn-dev").click(
  function() { 
    if(document.getElementById("slide-container").style.display != 'block'){                    
      $("#slide-container").show();                  
    };
    if(document.getElementById("study-container").style.display == 'block'){                    
      $("#study-container").hide();
    };
    if(document.getElementById("work-container").style.display == 'block'){                    
      $("#work-container").hide();
    };
    if(document.getElementById("skill-container").style.display == 'block'){                    
      $("#skill-container").hide();
    };
    if(document.getElementById("dev-container").style.display != 'block'){                    
      $("#dev-container").animate({height: 'toggle', opacity: 'toggle'}, 'fast');
    }; 
  }
);

function initSkillsForm() {
  let articleTarget = document.querySelector('#skill-container article h3');
  if (articleTarget === null) {
    articleTarget = document.querySelector('#skill-container article');
    let titleHardSkills = document.createElement('h3');
    titleHardSkills.innerText = 'Hard Skills';
    articleTarget.appendChild(titleHardSkills);
    showSkillProgress(6, 'Dart');
    showSkillProgress(7, 'Flutter');
    showSkillProgress(5, 'HTML5');
    showSkillProgress(6, 'CSS3');
    showSkillProgress(3, 'JavaScript');
    showSkillProgress(1, 'TypeScript');
  }
}

function showSkillProgress(value, label) {
  let tableAdd = document.createElement('table');
  tableAdd.className = 'skill-progress';
  let tableBody = document.createElement('tbody');
  let skillLabel = document.createElement('h4');
  let newTd = document.createElement('td');
  skillLabel.style = 'font-size: 2vh;';
  newTd.className = 'skill-progress-label';
  newTd.appendChild(skillLabel);
  tableAdd.appendChild(tableBody);
  tableBody.appendChild(newTd);
  skillLabel.innerText = label;
  for (let index = 1; index <= 8; index += 1) {    
    let tdTyleProgress = document.createElement('td');
    let divTyleProgress = document.createElement('div');
    divTyleProgress.className = 'skill-progress-tyle';
    if (index <= value) {      
      divTyleProgress.style.backgroundColor = 'cadetblue';
    }
    tdTyleProgress.appendChild(divTyleProgress);
    tableBody.appendChild(tdTyleProgress);
  }
  let rowAdd = document.createElement('div');
  // rowAdd.className = 'row';
  rowAdd.appendChild(tableAdd);
  let articleTarget = document.querySelector('#skill-container article');
  articleTarget.appendChild(rowAdd);
}

function adaptLayout() {
  width = document.getElementsByTagName('body')[0].clientWidth;
  if (width >= 728) {
    document.getElementsByTagName('main')[0].classList.add('row');
  } else {
    document.getElementsByTagName('main')[0].classList.add('column');
  }
}

window.onload = () => {
  adaptLayout();
  initSkillsForm();
}