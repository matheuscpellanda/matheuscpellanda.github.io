$("#btn-skill").click(
    function() {
        if(document.getElementById("slide-forms").style.display != 'block'){                    
            $("#slide-forms").animate({width: 'toggle', opacity: 'toggle'}, 'fast');                  
        };
        if(document.getElementById("skill-form").style.display != 'block'){                    
            $("#skill-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };                
        if(document.getElementById("study-form").style.display == 'block'){                    
            $("#study-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("work-form").style.display == 'block'){                    
            $("#work-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("dev-form").style.display == 'block'){                    
            $("#dev-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };                
    }
);
$("#btn-study").click(
    function() {
        if(document.getElementById("slide-forms").style.display != 'block'){                    
            $("#slide-forms").animate({width: 'toggle', opacity: 'toggle'}, 'fast');                  
        };
        if(document.getElementById("study-form").style.display != 'block'){                    
            $("#study-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("skill-form").style.display == 'block'){                    
            $("#skill-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("work-form").style.display == 'block'){                    
            $("#work-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("dev-form").style.display == 'block'){                    
            $("#dev-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };                
    }
);
$("#btn-work").click(
    function() {
        if(document.getElementById("slide-forms").style.display != 'block'){                    
            $("#slide-forms").animate({width: 'toggle', opacity: 'toggle'}, 'fast');                  
        };
        if(document.getElementById("work-form").style.display != 'block'){                    
            $("#work-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("study-form").style.display == 'block'){                    
            $("#study-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("skill-form").style.display == 'block'){                    
            $("#skill-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("dev-form").style.display == 'block'){                    
            $("#dev-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
    }
);
$("#btn-dev").click(
    function() { 
        if(document.getElementById("slide-forms").style.display != 'block'){                    
            $("#slide-forms").animate({width: 'toggle', opacity: 'toggle'}, 'fast');                  
        };
        if(document.getElementById("dev-form").style.display != 'block'){                    
            $("#dev-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };               
        if(document.getElementById("study-form").style.display == 'block'){                    
            $("#study-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("work-form").style.display == 'block'){                    
            $("#work-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
        if(document.getElementById("skill-form").style.display == 'block'){                    
            $("#skill-form").animate({height: 'toggle', opacity: 'toggle'}, 'fast');                    
        };
    }
);