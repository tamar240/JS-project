document.querySelector("#level").innerText ="";
const matchlevel=()=>{
    let level;
    let age = Number(new URLSearchParams(location.search).get("age"));
    if (age != null) {
        level = age <= 8 ? "level C" : age <= 12 ? "level B" : "level A";
        console.log(level);
        // document.querySelector("#level").display="block";
     //   document.querySelector("#level").style.display="block";
        document.querySelector("#level").innerText = `${level} הרמה המומלצת היא`;
    }}

    document.querySelector("#age").addEventListener("click",matchlevel())
