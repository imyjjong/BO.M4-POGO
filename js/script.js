const reviews = document.getElementsByClassName("reviews__review");
const reviewsButton = document.getElementsByClassName("review__buttons");
let modus = "one-two-three";

for(let i = 0; i < reviews.length; i++)
for(let i = 0; i < reviewsButton.length; i++){
reviewsButton[i].onclick = function(){
        if(modus === "one-two-three"){
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "flex";
            reviews[4].style.display = "flex";
            reviews[5].style.display = "flex";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "flex";
            reviews[1].style.display = "flex";
            reviews[2].style.display = "flex";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three";
        }
    }
};

//productpage



const selectSort = document.getElementsByClassName("selectMenu__sortText");
const selectMenu = document.getElementsByClassName("selectMenu__list");
const menuArrow = document.getElementById("js--selectMenu-arrow");
let sortMenu = true;
for(let i = 0; i < selectSort.length; i++)
selectSort[i].onclick = function(){
    if(sortMenu === true){
        for(let i = 0; i < selectMenu.length; i++)
        selectMenu[i].style.display = "block";
        menuArrow.style.rotate = "180deg";
        sortMenu = false;
    }
    else{
        selectMenu[i].style.display = "none";
        menuArrow.style.rotate = "0deg";
        sortMenu = true;
    }
};

const modalOverlay = document.getElementsByClassName("modal__overlay");
const productModal = document.getElementById("js--productModal");
let tryoutData = {
    "testImages": [{
        "one": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[0][4];
        })
    }, {
        "two": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[1][4];
        })
    },   {
        "three": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[2][4];
        })
    },   {
        "four": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[3][4];
        })
    },  {
        "five": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[4][4];
        })
    }, {
        "six": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[5][4];
        })
    },   {
        "seven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[6][4];
        })
    },   {
        "eight": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[7][4];
        })
    },  {
        "nine": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[8][4];
        })
    }, {
        "ten": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[9][4];
        })
    },   {
        "eleven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[10][4];
        })
    },   {
        "twelve": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[11][4];
        })
    },  {
        "thirteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[12][4];
        })
    }, {
        "fourteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[13][4];
        })
    },   {
        "fifteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[14][4];
        })
    },   {
        "sixteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[15][4];
        })
    },  {
        "seventeen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[16][4];
        })
    }, {
        "eighteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[17][4];
        })
    },   {
        "nineteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[18][4];
        })
    },   {
        "twenty": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[19][4];
        })
    },  
    ], 
    "lowhigh": [{
        "one": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[9][4];
        })
    }, {
        "two": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[14][4];
        })
    },   {
        "three": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[0][4];
        })
    },   {
        "four": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[5][4];
        })
    },  {
        "five": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[10][4];
        })
    }, {
        "six": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[15][4];
        })
    },   {
        "seven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[8][4];
        })
    },   {
        "eight": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[19][4];
        })
    },  {
        "nine": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[11][4];
        })
    }, {
        "ten": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[4][4];
        })
    },   {
        "eleven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[1][4];
        })
    },   {
        "twelve": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[12][4];
        })
    },  {
        "thirteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[17][4];
        })
    }, {
        "fourteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[2][4];
        })
    },   {
        "fifteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[7][4];
        })
    },   {
        "sixteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[18][4];
        })
    },  {
        "seventeen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[16][4];
        })
    }, {
        "eighteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[6][4];
        })
    },   {
        "nineteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[13][4];
        })
    },   {
        "twenty": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[3][4];
        })
    },  
    ],
    "highlow": [{
        "one": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[3][4];
        })
    }, {
        "two": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[13][4];
        })
    },   {
        "three": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[6][4];
        })
    },   {
        "four": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[16][4];
        })
    },  {
        "five": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[18][4];
        })
    }, {
        "six": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[7][4];
        })
    },   {
        "seven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[2][4];
        })
    },   {
        "eight": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[17][4];
        })
    },  {
        "nine": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[12][4];
        })
    }, {
        "ten": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[1][4];
        })
    },   {
        "eleven": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[4][4];
        })
    },   {
        "twelve": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[11][4];
        })
    },  {
        "thirteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[19][4];
        })
    }, {
        "fourteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[8][4];
        })
    },   {
        "fifteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[15][4];
        })
    },   {
        "sixteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[10][4];
        })
    },  {
        "seventeen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[5][4];
        })
    }, {
        "eighteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[0][4];
        })
    },   {
        "nineteen": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[14][4];
        })
    },   {
        "twenty": fetch('database.json')
                .then(response => response.json())
                .then(data => {
                    return data.objects[0].rows[9][4];
        })
    },  
    ],
};

const dataTypes = ["comic", "album", "james", "movies", "jobs", "comic", "album", "james", "movies", "jobs", "comic", "album", "james", "movies", "jobs", "comic", "album", "james", "movies", "jobs"];
const dataLowHigh = ["jobs", "jobs", "comic", "comic", "comic", "comic", "movies", "jobs", "album", "jobs", "album", "james", "james", "james", "james", "movies", "album", "album", "movies", "movies"];
const dataHighLow = ["movies", "movies", "album", "album", "movies", "james", "james", "james", "james", "album", "jobs", "album", "jobs", "movies", "comic", "comic", "comic", "comic", "jobs", "jobs"];
let html = true;
tryoutData.testImages.forEach(function(obj, index){
    let image = new Image();
    Object.values(obj)[0].then(src => {
      image.src = src;
      image.classList.add("products__product");
      image.classList.add(dataTypes[index]);
      image.dataset.product = dataTypes[index];
      image.onclick = function() {
        fetch('database.json')
          .then(response => response.json())
          .then(data => {
            const productData = data.objects[0].rows[index];
              const title = productData[0];
              const info = productData[3];
              const price = productData[1];

              productImage.src = src;
              productInfo.innerHTML = info;
              productTitle.innerHTML = title;
              productPrice.innerHTML = "€" + price;
              productModal.style.display = "flex";
              document.getElementById("body__productsPage").style.overflow = "hidden";
            });
            for(let i = 0; i < modalOverlay.length; i++)
            modalOverlay[0].style.display = "flex";
        };
        document.getElementById("tryout").append(image);
      });
    });
const recommended = document.getElementById("js--recommended");
const selectArrow = document.getElementById("js--selectMenu-arrow");
document.getElementById("js--selectMenu-arrow").previousSibling.textContent = "recommended";
recommended.style.background = "var(--color-grey-hover)";
recommended.onclick = function(){
    if(html === true){
        document.getElementById("tryout").innerHTML = '';
        tryoutData.testImages.forEach(function(obj, index){
            let image = new Image();
            Object.values(obj)[0].then(src => {
              image.src = src;
              image.classList.add("products__product");
              image.classList.add(dataTypes[index]);
              image.dataset.product = dataTypes[index];
              image.onclick = function() {
                const productImage = document.getElementById("productImage");
                const productInfo = document.getElementById("productInfo");
                const productTitle = document.getElementById("productTitle");
                const productPrice = document.getElementById("productPrice");
                fetch('database.json')
                  .then(response => response.json())
                  .then(data => {
                      const productData = data.objects[0].rows[index];
                      const title = productData[0];
                      const info = productData[3];
                      const price = productData[1];
        
                      productImage.src = src;
                      productInfo.innerHTML = info;
                      productTitle.innerHTML = title;
                      productPrice.innerHTML = "€" + price;
                      productModal.style.display = "flex";
                      document.getElementById("body__productsPage").style.overflow = "hidden";
                      modalOverlay[0].style.display = "flex";
                    });};
              document.getElementById("tryout").append(image);
              })})
              document.getElementById("js--selectMenu-arrow").previousSibling.textContent = "recommended";
              recommended.style.background = "var(--color-grey-hover)";
              lowToHigh.style.background = "var(--color-white)";
              highToLow.style.background = "var(--color-white)";
              selectMenu[0].style.display = "none";
              menuArrow.style.rotate = "0deg";
              sortMenu = true;
            html = true;
        }
    };
const lowToHigh = document.getElementById("js--lowToHigh");
lowToHigh.onclick = function(){
    if(html === true){
        document.getElementById("tryout").innerHTML = '';
        tryoutData.lowhigh.forEach(function(obj, index){
            let image = new Image();
            Object.values(obj)[0].then(src => {
                image.src = src;
                image.classList.add("products__product");
                image.classList.add(dataLowHigh[index]);
                image.dataset.product = dataLowHigh[index];
                image.onclick = function() {
                    fetch('database.json')
                      .then(response => response.json())
                      .then(data => {
                          const dataIndexes = [9, 14, 0, 5, 10, 15, 8, 19, 11, 4, 1, 12, 17, 2, 7, 18, 16, 6, 13, 3];
                          const productData = data.objects[0].rows[dataIndexes[index]];
                          const title = productData[0];
                          const info = productData[3];
                          const price = productData[1];
            
                          productImage.src = src;
                          productInfo.innerHTML = info;
                          productTitle.innerHTML = title;
                          productPrice.innerHTML = "€" + price;
                          productModal.style.display = "flex";
                          document.getElementById("body__productsPage").style.overflow = "hidden";
                          modalOverlay[0].style.display = "flex";
                        });
                    };
                    document.getElementById("tryout").append(image);
                  });
                });
                document.getElementById("js--selectMenu-arrow").previousSibling.textContent = "price: low to high";
                lowToHigh.style.background = "var(--color-grey-hover)";
                highToLow.style.background = "var(--color-white)";
                recommended.style.background = "var(--color-white)";
                selectMenu[0].style.display = "none";
                menuArrow.style.rotate = "0deg";
                sortMenu = true;
                html = true;
              }
    };
const highToLow = document.getElementById("js--highToLow");
highToLow.onclick = function(){
  if(html === true){
    document.getElementById("tryout").innerHTML = '';
    tryoutData.highlow.forEach(function(obj, index){
      let image = new Image();
      Object.values(obj)[0].then(src => {
        image.src = src;
        image.classList.add("products__product");
        image.classList.add(dataHighLow[index]);
        image.dataset.product = dataHighLow[index];
        image.onclick = function() {
          fetch('database.json')
            .then(response => response.json())
            .then(data => {
                const dataIndexes = [3, 13, 6, 16, 18, 7, 2, 17, 12, 1, 4, 11, 19, 8, 15, 10, 5, 0, 14, 9];
              const productData = data.objects[0].rows[dataIndexes[index]];
              const title = productData[0];
              const info = productData[3];
              const price = productData[1];

              productImage.src = src;
              productInfo.innerHTML = info;
              productTitle.innerHTML = title;
              productPrice.innerHTML = "€" + price;
              productModal.style.display = "flex";
              document.getElementById("body__productsPage").style.overflow = "hidden";
              modalOverlay[0].style.display = "flex";
            });
        };
        document.getElementById("tryout").append(image);
      });
    });

    document.getElementById("js--selectMenu-arrow").previousSibling.textContent = "price: high to low";
    highToLow.style.background = "var(--color-grey-hover)";
    lowToHigh.style.background = "var(--color-white)";
    recommended.style.background = "var(--color-white)";
    selectMenu[0].style.display = "none";
    menuArrow.style.rotate = "0deg";
    sortMenu = true;
    html = true;
  }
};
const products = document.getElementsByClassName("products__product");
let filters = document.getElementsByClassName("filter");
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
};
let selectedVariation = false;
const comicCheckbox = document.getElementById("js--comicCheckbox");
const albumCheckbox = document.getElementById("js--albumCheckbox");
const jamesCheckbox = document.getElementById("js--jamesCheckbox");
const moviesCheckbox = document.getElementById("js--moviesCheckbox");
const jobsCheckbox = document.getElementById("js--jobsCheckbox");
comicCheckbox.onchange = function(){
    if(comicCheckbox.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "comic"){
                products[i].style.display = "flex";
            }}
        }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "comic"){
                products[i].style.display = "none";
            }}}};
albumCheckbox.onchange = function(){
    if(albumCheckbox.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "album"){
                products[i].style.display = "flex";
            }}
        }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "album"){
                products[i].style.display = "none";
            }}}};
jamesCheckbox.onchange = function(){
    if(jamesCheckbox.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "james"){
                products[i].style.display = "flex";
            }}
        }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "james"){
                products[i].style.display = "none";
            }}}};
moviesCheckbox.onchange = function(){
    if(moviesCheckbox.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "movies"){
                products[i].style.display = "flex";
            }}
        }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "movies"){
                products[i].style.display = "none";
            }}}};
jobsCheckbox.onchange = function(){
    if(jobsCheckbox.checked === true){
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "jobs"){
                products[i].style.display = "flex";
            }}
        }
    else{
        for(let i = 0; i < products.length; i++){
            if(products[i].dataset.product === "jobs"){
                products[i].style.display = "none";
            }}}};

modalOverlay[0].onclick = function(){
    productModal.style.display = "none";
    document.getElementById("body__productsPage").style.overflow = "visible";
    modalOverlay[0].style.display = "none";
    if(selectedVariation === false){
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = true;
    }
    else{
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = false;
    }
}
const xmark = document.getElementById("js--xmark");
const removeLink = document.getElementById("js--removeLink");
const modalVariations = document.getElementsByClassName("productModal__variations");
xmark.onclick = function(){
    productModal.style.display = "none";
    document.getElementById("body__productsPage").style.overflow = "visible";
    modalOverlay[0].style.display = "none";
    if(selectedVariation === false){
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = true;
    }
    else{
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = false;
    }
};
removeLink.onclick = function(){
    productModal.style.display = "none";
    document.getElementById("body__productsPage").style.overflow = "visible";
    modalOverlay[0].style.display = "none";
    if(selectedVariation === false){
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = true;
    }
    else{
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = false;
    }
};
for(let i = 0; i < modalVariations.length; i++)
modalVariations[i].onclick = function(){
    if(selectedVariation === false){
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[i].style.background = "var(--color-grey-hover";
        selectedVariation = true;
        }
    else{
        if(modalVariations[i].style.background === "var(--color-grey-hover)"){
            modalVariations[i].style.background = "var(--color-white)";
            selectedVariation = false;
        }
}};


const addToCart = document.getElementsByClassName("productModal__addToCart");
const itemsCount = document.getElementsByClassName("header__itemsCount");
const cartProduct = document.getElementsByClassName("shoppingCart__product");
const cartModal = document.getElementById("js--cartModal");
let items = 0;
for(let i = 0; i < addToCart.length; i++)
addToCart[i].onclick = function(){
    if(selectedVariation === true){
        items = items + 1;
        itemsCount[0].innerHTML = items;
        for(let i = 0; i < itemsCount.length; i++)
        itemsCount[0].style.display = "flex";
        for(let i = 0; i < cartProduct.length; i++)
        cartProduct[0].style.display = "flex";
        productModal.style.display = "none";
        document.getElementById("body__productsPage").style.overflow = "visible";
        modalOverlay[0].style.display = "none";
        cartModal.classList.add("a-popup");
        cartModal.style.display = "flex";
        setTimeout(function(){
            cartModal.style.display = "none";
        }, 1800);
        modalVariations[0].style.background = "var(--color-white";
        modalVariations[1].style.background = "var(--color-white";
        modalVariations[2].style.background = "var(--color-white";
        modalVariations[0].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[1].style.borderColor = "rgba(0, 0, 0, 0.2)";
        modalVariations[2].style.borderColor = "rgba(0, 0, 0, 0.2)";
        selectedVariation = false;
    }
    else{
        modalVariations[0].style.background = "#fbf0e8";
        modalVariations[1].style.background = "#fbf0e8";
        modalVariations[2].style.background = "#fbf0e8";
        modalVariations[0].style.borderColor = "#dc6a21";
        modalVariations[1].style.borderColor = "#dc6a21";
        modalVariations[2].style.borderColor = "#dc6a21";
    }
};

//shoppingcart page


// document.getElementById("js--shoppingCartItem").onclick = function(){
//   fetch('database.json')
//     .then(response => response.json())
//     .then(data => {
//       const productItemData = data.objects[0].rows[1];
//       const cartImage = productItemData[4];
//       const cartTitle = productItemData[0];
//       const cartInfo = productItemData[3];
//       const cartPrice = productItemData[1];

//       imageElement.src = cartImage;
//       infoElement.textContent = cartInfo;
//       titleElement.textContent = cartTitle;
//       priceElement.textContent = "€" + cartPrice;
//     });
// };



// cartProductData.cartItems.forEach(function(obj, index){
//     let item = new Item();
//     Object.values(obj)[0].then(src)
// })

// tryoutData.testImages.forEach(function(obj, index){
//     let image = new Image();
//     Object.values(obj)[0].then(src => {
//       image.src = src;
//       image.classList.add("products__product");
//       image.classList.add(dataTypes[index]);
//       image.dataset.product = dataTypes[index];
//       image.onclick = function() {
//         fetch('database.json')
//           .then(response => response.json())
//           .then(data => {
//             const productData = data.objects[0].rows[index];
//               const title = productData[0];
//               const info = productData[3];
//               const price = productData[1];

//               productImage.src = src;
//               productInfo.innerHTML = info;
//               productTitle.innerHTML = title;
//               productPrice.innerHTML = "€" + price;
//               productModal.style.display = "flex";
//               document.getElementById("body__productsPage").style.overflow = "hidden";
//             });
//             for(let i = 0; i < modalOverlay.length; i++)
//             modalOverlay[0].style.display = "flex";
//         };
//         document.getElementById("tryout").append(image);
//       });
//     });
// const trashCan = document.getElementsByClassName("shoppingCart__trashCan");
// const removeModal = document.getElementById("js--removeModal");
// const bodyShoppingCart = document.getElementById("js--body__shoppingCart");
// const removeButton = document.getElementById("js--removeButton");
// const cancelButton = document.getElementById("js--cancelButton");
// const emptyCart = document.getElementById("js--emptyCart");
// const checkout = document.getElementById("js--checkout");
// let showRemoveModal = false;
// for(let i = 0; i < trashCan.length; i++)
// trashCan[i].onclick = function(){
//     if(showRemoveModal === false){
//         removeModal.style.display = "flex";
//         modalOverlay[1].style.display = "flex";
//         bodyShoppingCart.style.overflow = "hidden";
//         showRemoveModal = true;
//     }
// };

// removeButton.onclick = function(){
//     if(showRemoveModal === true){
//         removeModal.style.display = "none";
//         modalOverlay[1].style.display = "none";
//         bodyShoppingCart.style.overflow = "visible";
//         cartProduct[1].style.display = "none";
//         checkout.style.display = "none";
//         emptyCart.style.display = "flex";
//         document.getElementById("js--shoppingCart-header").style.borderBottom = "0.1rem solid rgba(0, 0, 0, 0.2)";
//         showRemoveModal = false;
// }};

// cancelButton.onclick = function(){
//     if(showRemoveModal === true){
//         removeModal.style.display = "none";
//         modalOverlay[1].style.display = "none";
//         bodyShoppingCart.style.overflow = "visible";
//         showRemoveModal = false;
// }};