const fill = () => {
  console.log("ciao")
  ;["Spallanzani", "Moro", "Motti"].forEach(e => {
    document.getElementById("school").innerHTML += `<option>${e}</option>`
  })

  ;["commission1", "commission2", "commission3"].forEach(e => {
    document.getElementById("commission").innerHTML += `<option>${e}</option>`
  })
}

window.onload = fill

const submit = () => {
  const result = {
    name: document.getElementsByName("Name").value,
    surname: document.getElementsByName("Surname").value,
    email: document.getElementsByName("Email").value,
    school: document.getElementsByName("School").value,
    commission: document.getElementsByName("Commission").value,
    speches: document.getElementsByName("Speches").value,
    alias: document.getElementsByName("Alias").value,
    sex: (document.getElementById("Male").checked)? "M" : (document.getElementById("Female").checked)? "F" : "O",
    // TODO: date of Birth
    pob: document.getElementsByName("POB").value,
    phone: document.getElementsByName("Phone").value,
    address: document.getElementsByName("Address").value,
    numberTs: document.getElementsByName("Ts").value,
    parent1Name: document.getElementsByName("P1Name").value,
    parent2Name: document.getElementsByName("P2Name").value,
    parent1Phone: document.getElementsByName("P1Phone").value,
    parent2Phone: document.getElementsByName("P2Phone").value,
    allergies: document.getElementsByName("Allergies").value
  }
  console.log(result)
}
