console.log("its works")

uppercase.addEventListener("click" , () => {
    console.log("Transform to uppercase")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click" , () => {
    console.log("Transform to lowercase")
    inpText.value = inpText.value.toLowerCase()
})

removespaces.addEventListener("click" , () => {
    console.log("removing extra spaces")
    // https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string
    inpText.value = inpText.value.replace(/\s+/g,' ').trim();
})

removelines.addEventListener("click" , () => {
    console.log("removing extra new lines")
    // https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string
    inpText.value = inpText.value.replace(/\n+/g,'\n').trim();
})

inpText.addEventListener("input", () => {
    console.log("change")
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
})

