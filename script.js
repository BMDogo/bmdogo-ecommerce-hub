// ==== BMDOGO TECH SOURCE CODE ==== //

let masterProductList = [];
const displayBox = document.getElementById('item-list');
let currentItem = [];

// ==== ASYNC AND AWAIT FUNCTION ==== //

async function systemProduct() {
    try {
         let getProductList = await fetch('data.json');
         masterProductList = await getProductList.json()
         // console.log(masterProductList);

         updateRecord(masterProductList);
    } catch (error) {
        console.log('SOMETHING WENT WRONG PLEASE TRY AGAIN', error);
    }
};

function updateRecord(displayToUI) {
    let HTMLContainer = "";


    displayToUI.forEach(product => {
        
    // ==== DEFINE AVAILABILITY OF PRODUCT STATUS ===== //
        const statusName = product.isAvailable ? 'Available' : 'Out-of-Stuck';
        const statusClass = product.isAvailable ? 'available' : 'unavailable';
      
        // ==== BUIDING DYNAMIC HTML PRODUCT LIST CARD ===== //

        HTMLContainer += `
            <div class="item-card">
                <h3 class"item-title>${product.title}</h3>
                <p class"category">${product.category}</p>
             <div class="item-info">
              <span class="price">$${product.price.toFixed(2)}</span>
              <span class="${statusClass}">${statusName}</span>
             </div>
             <button class="add-btn" data-id="${product.id}">
             Add To Cart
             </button>
           </div>
       `;
    });
    
    displayBox.innerHTML = HTMLContainer;
    AddToChart();
}

systemProduct()


function filterProductList() {
    let selectElement = document.getElementById('filter-item').value;
    let searchElement = document.getElementById('search-item').value.toLowerCase();
 // console.log('click');
  
    let filteredItem = masterProductList;
// ===== FILTERING PRODUCT BASED ON TYPES VIA SELECT VALUE ==== //
    switch (selectElement) {
        case 'All':
               filteredItem = filteredItem;
            break;
        case 'WebDev':
              filteredItem = filteredItem.filter(item => item.category === "Web Template");
              break;
        case 'Available':
              filteredItem = filteredItem.filter(item => item.isAvailable === true);
              break;
        case 'Unavailable':
              filteredItem = filteredItem.filter(item => item.isAvailable === false);
              break;
        default:
            filteredItem = filteredItem;
            break;
    };
      
    // ===== SEARCHING PRODUCT BASED ON USER INPUT ==== //
   
       searchResult = filteredItem.filter(productName => {
            return productName.title.toLowerCase().includes(searchElement)         
        })
         if (searchResult.length === 0) {
                displayBox.innerHTML = `<p class="nothing-Alert"> Ops!! Template Not Available At the moment, contact BMDogo for more Info....</p>`
            }else {
            updateRecord(searchResult)
            }
};
filterProductList() 
document.getElementById('filter').addEventListener('click', filterProductList);
document.getElementById('search-item').addEventListener('input', filterProductList);


// ==== TOGGLING THEME CODE ==== //
let toggleBtn = document.getElementById('toggleTheme');
const currentTheme = localStorage.getItem('theme');
     if (currentTheme === 'dark') {
        document.body.classList.toggle('dark-Mode');
        toggleBtn.textContent = '☀️ Light-Mode';
     } else {
        toggleBtn.textContent = '🌙 Dark-Mode';
    }

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-Mode');
   if (document.body.classList.contains('dark-Mode')) {
       localStorage.setItem('theme', 'dark');
       toggleBtn.textContent = '☀️ Light-Mode';
   } else {
       localStorage.setItem('theme', 'light');
       toggleBtn.textContent = '🌙 Dark-Mode';
   };
});
// ==== ADD TO CHART BUTTON FUNCTION ==== //
let userShoppingList = [];
let userShoppingBox = document.getElementById('current-item');
let totalList = document.getElementById('totalAdd');
totalList.style.color = 'red';
function AddToChart(){
    let AddBtn = document.querySelectorAll('.add-btn');
    AddBtn.forEach(pressBtn => {
        pressBtn.addEventListener('click', (e) => {
        const pressedProductButton = parseInt(e.target.getAttribute('data-id'));
        const activeProductCard = masterProductList.find(productCard => productCard.id === pressedProductButton);
         e.stopPropagation()
       // console.log('clicked ' + pressedProductButton + ' ' + activeProductCard.title );
           if (activeProductCard) {
              userShoppingList.push(activeProductCard);
             // console.log(userShoppingList.length);
              userCurrentList()
           }
        });
    });
};

function userCurrentList() {
    let userList = "";
    if (userShoppingList.length === 0) {
       userShoppingBox.innerHTML = `<p class="nothing-Alert">Ops!! No Items found, Please add Items to you Cart</p>`;

    } else {   
           userShoppingList.forEach((listName, listPosition) =>{
        userList += `
         <div class="current-list">
                <span id="proName">${listName.title}</span>
                <span id="proPrice">$${listName.price.toFixed(2)}</span>
                <span class="delete" data-index="${listPosition}">❌</span>
         </div>
        `;
            })
        totalList.innerText = userShoppingList.length;
         userShoppingBox.innerHTML = userList;
        }
    calculateUserCost()
   
}

userShoppingBox.addEventListener('click', (e) =>{
        if (e.target.classList.contains('delete')) {
            const removeList = parseInt(e.target.getAttribute('data-index')); 
            userShoppingList.splice(removeList, 1)
            totalList.innerText = userShoppingList.length;
            userCurrentList()
        }
})
let userPromoOffer = 0;
function calculateUserCost() {
     let subTotal = 0;
    for (const price of userShoppingList) {
        subTotal += price.price;
    }
    
    let discountAmount = subTotal * userPromoOffer;
    let NetSubTotal = subTotal - discountAmount;
    const VATrate = 0.07;
   // console.log(NetSubTotal);
    
    let VATAmount = NetSubTotal * VATrate;
    let totalPay = NetSubTotal + VATAmount;

    document.getElementById('subTotal').textContent = `$${subTotal.toFixed(2)}`;
    document.getElementById('discount').textContent = `$${discountAmount.toFixed(2)}`;
    document.getElementById('VAT').textContent = `$${VATAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${totalPay.toFixed(2)}`;
};
userCurrentList()
document.getElementById('enterPromo').addEventListener('click', () =>{
    let userPromoCode = document.getElementById('promoCode').value;

       
    if (userPromoCode.trim() === "BMDOGO20") {
        userPromoOffer = 0.20;
      //  UserPromoCode.textContent = '';
    } else {
        userPromoOffer = 0;
    }
    calculateUserCost();
});


document.getElementById('complete').addEventListener('click', () => {
    alert('Purchased Completed Successfully....')
})
