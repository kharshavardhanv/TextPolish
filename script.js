console.log("These are script words");

inptext.addEventListener("input", () => {
  console.log("changed");
  charct.innerText=inptext.value.length;
  wordct.innerText=inptext.value.trim().split(" ").length;
})

uppercase.addEventListener("click",() => {
  console.log("Transforming to Uppercase");
  inptext.value=inptext.value.toUpperCase();
})
lowercase.addEventListener("click",() => {
    console.log("Transforming to Lowercase");
    inptext.value=inptext.value.toLowerCase();
  })
  removespaces.addEventListener("click", () => {
    console.log("Removing Extra spaces..");
    inptext.value=inptext.value.replace(/\s+/g,' ').trim();
  }
  )
  removelines.addEventListener("click",() => {
    console.log("Removing Extra New Lines..");
    inptext.value=inptext.value.replace(/\n+/g,'\n').trim();
  })