let nameField = document.getElementById("nameF");
let countField = document.getElementById("countF");
let priceField = document.getElementById("prizeF");
let AddButton = document.getElementById("AddButton");
let sumLabel = document.getElementById("sumLbl");
let ItemsList = document.getElementById("itemsList")
let TermekDL = document.getElementById("TermekData")


let Items = [];
let Elozmenyek = []

AddButton.addEventListener("click", () =>
     {
      if(nameField.value == "" || priceField.value == 0 || countField <= 0){
        alert("Valami nem stimmel")
        return
      }

      let optionData = document.createElement('option')
      optionData.value = nameField.value
      let idx = Elozmenyek.findIndex(item => item.name == nameField.value)
      if (idx == -1){
        Elozmenyek.push({
          name2: nameField.value,
          price2: Number(priceField.value)
        })
      }


      Items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
      })

      
      RefreshTable()
      clearForm()
      save()
    
     }  
);

nameField.addEventListener('selectionchange', (item) => {
})


function clearForm(){
    nameField.value = '';
    priceField.value = '';
    countField.value = '';
}

function RefreshTable(){
    console.log(Items)

      
      ItemsList.innerHTML = "";
      let Ossz = 0;
      for(let i = 0; i < Items.length; i++)
        {
            let tr = document.createElement('tr')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
            let td5 = document.createElement('td')
            let td6 = document.createElement('td')
            let torolG = document.createElement('button')

            td1.innerHTML = i+1 + '.'
            td2.innerHTML = Items[i].name;
            td3.innerHTML = Items[i].price + ' Ft';
            td4.innerHTML = Items[i].count + ' db';
            td5.innerHTML = Items[i].sum + ' Ft';
            torolG.innerHTML = "X"

            td3.classList.add('text-end')
            td4.classList.add('text-end')
            td5.classList.add('text-end')
            td6.classList.add('text-center')
            torolG.classList.add('btn' ,'btn-danger', 'text-end')

            Ossz += Items[i].sum

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6)
            td6.appendChild(torolG)

            torolG.addEventListener("click", () => {deleteItem(i)})
            ItemsList.appendChild(tr);
        }
        sumLabel.innerHTML = Ossz;
}

function deleteItem(index){
  if(confirm("Biztosan szeretnéd törölni a "+ (index +1) + ". számú elemet?" ))
  {
    Items.splice(index, 1)
    RefreshTable()
    save()
  }
  alert("Sikeres törlés")
}

function save(){
    localStorage.setItem('bevLista', JSON.stringify(Items))
    localStorage.setItem('elozLista', JSON.stringify(Elozmenyek))
}

function load(){
  if(localStorage.getItem('bevLista')){
    Items = JSON.parse(localStorage.getItem('bevLista'))
  }
  if(localStorage.getItem('elozLista')){
    Items = JSON.parse(localStorage.getItem('elozLista'))
  }
}

load()
RefreshTable();
clearForm();