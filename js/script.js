$("#btn-skill").click(
  function() {
    initSkillsForm();
    if(document.getElementById("slide-forms").style.display != 'block'){                    
      $("#slide-forms").show();                  
    };               
    if(document.getElementById("study-form").style.display == 'block'){                    
      $("#study-form").hide();                    
    };
    if(document.getElementById("work-form").style.display == 'block'){                    
      $("#work-form").hide();                    
    };
    if(document.getElementById("dev-form").style.display == 'block'){                    
      $("#dev-form").hide();                    
    };
    if(document.getElementById("skill-form").style.display != 'block'){                    
      $("#skill-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };     
  }
);
$("#btn-study").click(
  function() {
    if(document.getElementById("slide-forms").style.display != 'block'){                    
      $("#slide-forms").show();
    };
    if(document.getElementById("skill-form").style.display == 'block'){                    
      $("#skill-form").hide();
    };
    if(document.getElementById("work-form").style.display == 'block'){                    
      $("#work-form").hide();
    };
    if(document.getElementById("dev-form").style.display == 'block'){                    
      $("#dev-form").hide();
    }; 
    if(document.getElementById("study-form").style.display != 'block'){                    
      $("#study-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };               
  }
);
$("#btn-work").click(
  function() {
    if(document.getElementById("slide-forms").style.display != 'block'){                    
      $("#slide-forms").show();                  
    };
    if(document.getElementById("study-form").style.display == 'block'){                    
      $("#study-form").hide();                  
    };
    if(document.getElementById("skill-form").style.display == 'block'){                    
      $("#skill-form").hide();                   
    };
    if(document.getElementById("dev-form").style.display == 'block'){                    
      $("#dev-form").hide();
    };
    if(document.getElementById("work-form").style.display != 'block'){                    
      $("#work-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
    };
  }
);
$("#btn-dev").click(
  function() { 
    if(document.getElementById("slide-forms").style.display != 'block'){                    
      $("#slide-forms").show();                  
    };
    if(document.getElementById("study-form").style.display == 'block'){                    
      $("#study-form").hide();
    };
    if(document.getElementById("work-form").style.display == 'block'){                    
      $("#work-form").hide();
    };
    if(document.getElementById("skill-form").style.display == 'block'){                    
      $("#skill-form").hide();
    };
    if(document.getElementById("dev-form").style.display != 'block'){                    
      $("#dev-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');
    }; 
  }
);

function initSkillsForm() {
  let articleTarget = document.querySelector('#skill-form article h3');
  if (articleTarget === null) {
    articleTarget = document.querySelector('#skill-form article');
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
  skillLabel.style = 'font-size: 1.1vw;';
  newTd.style = 'min-width: 7vw;max-width: 7vw;';
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
  rowAdd.className = 'row';
  rowAdd.appendChild(tableAdd);
  let articleTarget = document.querySelector('#skill-form article');
  articleTarget.appendChild(rowAdd);
}