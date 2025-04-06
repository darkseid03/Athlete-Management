document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("trainingForm"),t=document.getElementById("generateBtn"),n=document.getElementById("loading"),o=document.getElementById("results"),i=document.getElementById("planContent");e.addEventListener("submit",async function(e){e.preventDefault(),t.disabled=!0,n.classList.remove("hidden"),o.classList.add("hidden");const r={name:document.getElementById("name").value,age:document.getElementById("age").value,gender:document.getElementById("gender").value,sport:document.getElementById("sport").value,fitnessLevel:document.querySelector('input[name="fitnessLevel"]:checked').value,goals:document.getElementById("goals").value,injury:document.getElementById("injury").value||"None",days:document.getElementById("days").value};try{const e=`You're a certified fitness trainer. Create a weekly training plan for:
    - Name: ${r.name}
    - Age: ${r.age}
    - Gender: ${r.gender}
    - Sport: ${r.sport}
    - Fitness level: ${r.fitnessLevel}
    - Goal: ${r.goals}
    - Injury history: ${r.injury}
    - Available days: ${r.days}
    
    Return a detailed 7-day training schedule with:
    - Daily workout plan (drills, exercises)
    - Recovery tips
    - Motivational message
                
    Format the response in HTML with proper headings and sections.`,t=await callGeminiAPI(e);i.innerHTML=t,o.classList.remove("hidden")}catch(e){console.error("Error:",e),i.innerHTML=`<p class="error">Error generating training plan: ${e.message}</p>`,o.classList.remove("hidden")}finally{n.classList.add("hidden"),t.disabled=!1}});async function callGeminiAPI(e){const t="AIzaSyDTMqspY_C4KUwAqozRE7STorg0-HZD2yU",n="https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent",o=await fetch(`${n}?key=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:e}]}]})}),i=await o.json();if(!o.ok){const e=i.error||{};throw new Error(e.message||`API request failed with status ${o.status}`)}if(!i.candidates||!i.candidates[0].content.parts[0].text)throw new Error("Invalid response format from Gemini API");return i.candidates[0].content.parts[0].text}});
    