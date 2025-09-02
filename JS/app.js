let nameField = document.getElementById("nameF");
let countField = document.getElementById("countF");
let priceField = document.getElementById("prizeF");
let AddButton = document.getElementById("AddButton");
let sumLabel = document.getElementById("sumLbl");
let ItemsList = document.getElementById("itemsList")


let Items = [];


AddButton.addEventListener("click", () =>
     {
      if(nameField.value == "" || priceField.value == 0 || countField <= 0){
        alert("Valami nem stimmel")
        return
      }
      Items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
      })

      RefreshTable()
      clearForm()
     }
);



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

            td1.innerHTML = i+1 + '.'
            td2.innerHTML = Items[i].name;
            td3.innerHTML = Items[i].price + ' Ft';
            td4.innerHTML = Items[i].count + ' db';
            td5.innerHTML = Items[i].sum + ' Ft';

            td3.classList.add('text-end')
            td4.classList.add('text-end')
            td5.classList.add('text-end')

            Ossz += Items[i].sum

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            ItemsList.appendChild(tr);
        }
        sumLabel.innerHTML = Ossz;
}


clearForm();