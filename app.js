async function getAdvice()
    {
      let req=await fetch("https://api.adviceslip.com/advice");
      let data=await req.json();
  
      document.getElementById("advice_id").innerHTML=`Advice# ${data.slip.id}`;
      document.getElementById("advice").innerHTML=`"${data.slip.advice}"`;
      console.log(data);
    }
    getAdvice();