fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameOne = data.objects[0].rows[0][0];
        const productNameOne = document.getElementsByClassName("js--productOne-name");
        for(let i = 0; i < productNameOne.length; i++)
        productNameOne[0].innerHTML = nameOne;
        const imageOne = data.objects[0].rows[0][1];
        const productImageOne = document.getElementsByClassName("js--productOne-image");
        for(let i = 0; i < productImageOne.length; i++)
        productImageOne[i].src = imageOne;
        const priceOne = data.objects[0].rows[0][2];
        const productPriceOne = document.getElementsByClassName("js--productOne-price");
        for(let i = 0; i < productPriceOne.length; i++)
        productPriceOne[0].innerHTML = "€" + priceOne;
        const infoOne = data.objects[0].rows[0][3];
        const productInfoOne = document.getElementsByClassName("js--productOne-info");
        for(let i = 0; i < productInfoOne.length; i++)
        productInfoOne[0].innerHTML = infoOne;
        });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameTwo = data.objects[0].rows[1][0];
        const productNameTwo = document.getElementsByClassName("js--productTwo-name");
        for(let i = 0; i < productNameTwo.length; i++)
        productNameTwo[0].innerHTML = nameTwo;
        const imageTwo = data.objects[0].rows[1][1];
        const productImageTwo = document.getElementsByClassName("js--productTwo-image");
        for(let i = 0; i < productImageTwo.length; i++)
        productImageTwo[i].src = imageTwo;
        const priceTwo = data.objects[0].rows[1][2];
        const productPriceTwo = document.getElementsByClassName("js--productTwo-price");
        for(let i = 0; i < productPriceTwo.length; i++)
        productPriceTwo[0].innerHTML = "€" + priceTwo;
        const infoTwo = data.objects[0].rows[1][3];
        const productInfoTwo = document.getElementsByClassName("js--productTwo-info");
        for(let i = 0; i < productInfoTwo.length; i++)
        productInfoTwo[0].innerHTML = infoTwo;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameThree = data.objects[0].rows[2][0];
        const productNameThree = document.getElementsByClassName("js--productThree-name");
        for(let i = 0; i < productNameThree.length; i++)
        productNameThree[0].innerHTML = nameThree;
        const imageThree = data.objects[0].rows[2][1];
        const productImageThree = document.getElementsByClassName("js--productThree-image");
        for(let i = 0; i < productImageThree.length; i++)
        productImageThree[i].src = imageThree;
        const priceThree = data.objects[0].rows[2][2];
        const productPriceThree = document.getElementsByClassName("js--productThree-price");
        for(let i = 0; i < productPriceThree.length; i++)
        productPriceThree[0].innerHTML = "€" + priceThree;
        const infoThree = data.objects[0].rows[2][3];
        const productInfoThree = document.getElementsByClassName("js--productThree-info");
        for(let i = 0; i < productInfoThree.length; i++)
        productInfoThree[0].innerHTML = infoThree;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameFour = data.objects[0].rows[3][0];
        const productNameFour = document.getElementsByClassName("js--productFour-name");
        for(let i = 0; i < productNameFour.length; i++)
        productNameFour[0].innerHTML = nameFour;
        const imageFour = data.objects[0].rows[3][1];
        const productImageFour = document.getElementsByClassName("js--productFour-image");
        for(let i = 0; i < productImageFour.length; i++)
        productImageFour[i].src = imageFour;
        const priceFour = data.objects[0].rows[3][2];
        const productPriceFour = document.getElementsByClassName("js--productFour-price");
        for(let i = 0; i < productPriceFour.length; i++)
        productPriceFour[0].innerHTML = "€" + priceFour;
        const infoFour = data.objects[0].rows[3][3];
        const productInfoFour = document.getElementsByClassName("js--productFour-info");
        for(let i = 0; i < productInfoFour.length; i++)
        productInfoFour[0].innerHTML = infoFour;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameFive = data.objects[0].rows[4][0];
        const productNameFive = document.getElementsByClassName("js--productFive-name");
        for(let i = 0; i < productNameFive.length; i++)
        productNameFive[0].innerHTML = nameFive;
        const imageFive = data.objects[0].rows[4][1];
        const productImageFive = document.getElementsByClassName("js--productFive-image");
        for(let i = 0; i < productImageFive.length; i++)
        productImageFive[i].src = imageFive;
        const priceFive = data.objects[0].rows[4][2];
        const productPriceFive = document.getElementsByClassName("js--productFive-price");
        for(let i = 0; i < productPriceFive.length; i++)
        productPriceFive[0].innerHTML = "€" + priceFive;
        const infoFive = data.objects[0].rows[4][3];
        const productInfoFive = document.getElementsByClassName("js--productFive-info");
        for(let i = 0; i < productInfoFive.length; i++)
        productInfoFive[0].innerHTML = infoFive;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameSix = data.objects[0].rows[5][0];
        const productNameSix = document.getElementsByClassName("js--productSix-name");
        for(let i = 0; i < productNameSix.length; i++)
        productNameSix[0].innerHTML = nameSix;
        const imageSix = data.objects[0].rows[5][1];
        const productImageSix = document.getElementsByClassName("js--productSix-image");
        for(let i = 0; i < productImageSix.length; i++)
        productImageSix[i].src = imageSix;
        const priceSix = data.objects[0].rows[5][2];
        const productPriceSix = document.getElementsByClassName("js--productSix-price");
        for(let i = 0; i < productPriceSix.length; i++)
        productPriceSix[0].innerHTML = "€" + priceSix;
        const infoSix = data.objects[0].rows[5][3];
        const productInfoSix = document.getElementsByClassName("js--productSix-info");
        for(let i = 0; i < productInfoSix.length; i++)
        productInfoSix[0].innerHTML = infoSix;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameSeven = data.objects[0].rows[6][0];
        const productNameSeven = document.getElementsByClassName("js--productSeven-name");
        for(let i = 0; i < productNameSeven.length; i++)
        productNameSeven[0].innerHTML = nameSeven;
        const imageSeven = data.objects[0].rows[6][1];
        const productImageSeven = document.getElementsByClassName("js--productSeven-image");
        for(let i = 0; i < productImageSeven.length; i++)
        productImageSeven[i].src = imageSeven;
        const priceSeven = data.objects[0].rows[6][2];
        const productPriceSeven = document.getElementsByClassName("js--productSeven-price");
        for(let i = 0; i < productPriceSeven.length; i++)
        productPriceSeven[0].innerHTML = "€" + priceSeven;
        const infoSeven = data.objects[0].rows[6][3];
        const productInfoSeven = document.getElementsByClassName("js--productSeven-info");
        for(let i = 0; i < productInfoSeven.length; i++)
        productInfoSeven[0].innerHTML = infoSeven;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameEight = data.objects[0].rows[7][0];
        const productNameEight = document.getElementsByClassName("js--productEight-name");
        for(let i = 0; i < productNameEight.length; i++)
        productNameEight[0].innerHTML = nameEight;
        const imageEight = data.objects[0].rows[7][1];
        const productImageEight = document.getElementsByClassName("js--productEight-image");
        for(let i = 0; i < productImageEight.length; i++)
        productImageEight[i].src = imageEight;
        const priceEight = data.objects[0].rows[7][2];
        const productPriceEight = document.getElementsByClassName("js--productEight-price");
        for(let i = 0; i < productPriceEight.length; i++)
        productPriceEight[0].innerHTML = "€" + priceEight;
        const infoEight = data.objects[0].rows[7][3];
        const productInfoEight = document.getElementsByClassName("js--productEight-info");
        for(let i = 0; i < productInfoEight.length; i++)
        productInfoEight[0].innerHTML = infoEight;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameNine = data.objects[0].rows[8][0];
        const productNameNine = document.getElementsByClassName("js--productNine-name");
        for(let i = 0; i < productNameNine.length; i++)
        productNameNine[0].innerHTML = nameNine;
        const imageNine = data.objects[0].rows[8][1];
        const productImageNine = document.getElementsByClassName("js--productNine-image");
        for(let i = 0; i < productImageNine.length; i++)
        productImageNine[i].src = imageNine;
        const priceNine = data.objects[0].rows[8][2];
        const productPriceNine = document.getElementsByClassName("js--productNine-price");
        for(let i = 0; i < productPriceNine.length; i++)
        productPriceNine[0].innerHTML = "€" + priceNine;
        const infoNine = data.objects[0].rows[8][3];
        const productInfoNine = document.getElementsByClassName("js--productNine-info");
        for(let i = 0; i < productInfoNine.length; i++)
        productInfoNine[0].innerHTML = infoNine;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameTen = data.objects[0].rows[9][0];
        const productNameTen = document.getElementsByClassName("js--productTen-name");
        for(let i = 0; i < productNameTen.length; i++)
        productNameTen[0].innerHTML = nameTen;
        const imageTen = data.objects[0].rows[9][1];
        const productImageTen = document.getElementsByClassName("js--productTen-image");
        for(let i = 0; i < productImageTen.length; i++)
        productImageTen[i].src = imageTen;
        const priceTen = data.objects[0].rows[9][2];
        const productPriceTen = document.getElementsByClassName("js--productTen-price");
        for(let i = 0; i < productPriceTen.length; i++)
        productPriceTen[0].innerHTML = "€" + priceTen;
        const infoTen = data.objects[0].rows[9][3];
        const productInfoTen = document.getElementsByClassName("js--productTen-info");
        for(let i = 0; i < productInfoTen.length; i++)
        productInfoTen[0].innerHTML = infoTen;
        });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameEleven = data.objects[0].rows[10][0];
        const productNameEleven = document.getElementsByClassName("js--productEleven-name");
        for(let i = 0; i < productNameEleven.length; i++)
        productNameEleven[0].innerHTML = nameEleven;
        const imageEleven = data.objects[0].rows[10][1];
        const productImageEleven = document.getElementsByClassName("js--productEleven-image");
        for(let i = 0; i < productImageEleven.length; i++)
        productImageEleven[i].src = imageEleven;
        const priceEleven = data.objects[0].rows[10][2];
        const productPriceEleven = document.getElementsByClassName("js--productEleven-price");
        for(let i = 0; i < productPriceEleven.length; i++)
        productPriceEleven[0].innerHTML = "€" + priceEleven;
        const infoEleven = data.objects[0].rows[10][3];
        const productInfoEleven = document.getElementsByClassName("js--productEleven-info");
        for(let i = 0; i < productInfoEleven.length; i++)
        productInfoEleven[0].innerHTML = infoEleven;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameTwelve = data.objects[0].rows[11][0];
        const productNameTwelve = document.getElementsByClassName("js--productTwelve-name");
        for(let i = 0; i < productNameTwelve.length; i++)
        productNameTwelve[0].innerHTML = nameTwelve;
        const imageTwelve = data.objects[0].rows[11][1];
        const productImageTwelve = document.getElementsByClassName("js--productTwelve-image");
        for(let i = 0; i < productImageTwelve.length; i++)
        productImageTwelve[i].src = imageTwelve;
        const priceTwelve = data.objects[0].rows[11][2];
        const productPriceTwelve = document.getElementsByClassName("js--productTwelve-price");
        for(let i = 0; i < productPriceTwelve.length; i++)
        productPriceTwelve[0].innerHTML = "€" + priceTwelve;
        const infoTwelve = data.objects[0].rows[11][3];
        const productInfoTwelve = document.getElementsByClassName("js--productTwelve-info");
        for(let i = 0; i < productInfoTwelve.length; i++)
        productInfoTwelve[0].innerHTML = infoTwelve;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameThirteen = data.objects[0].rows[12][0];
        const productNameThirteen = document.getElementsByClassName("js--productThirteen-name");
        for(let i = 0; i < productNameThirteen.length; i++)
        productNameThirteen[0].innerHTML = nameThirteen;
        const imageThirteen = data.objects[0].rows[12][1];
        const productImageThirteen = document.getElementsByClassName("js--productThirteen-image");
        for(let i = 0; i < productImageThirteen.length; i++)
        productImageThirteen[i].src = imageThirteen;
        const priceThirteen = data.objects[0].rows[12][2];
        const productPriceThirteen = document.getElementsByClassName("js--productThirteen-price");
        for(let i = 0; i < productPriceThirteen.length; i++)
        productPriceThirteen[0].innerHTML = "€" + priceThirteen;
        const infoThirteen = data.objects[0].rows[12][3];
        const productInfoThirteen = document.getElementsByClassName("js--productThirteen-info");
        for(let i = 0; i < productInfoThirteen.length; i++)
        productInfoThirteen[0].innerHTML = infoThirteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameFourteen = data.objects[0].rows[13][0];
        const productNameFourteen = document.getElementsByClassName("js--productFourteen-name");
        for(let i = 0; i < productNameFourteen.length; i++)
        productNameFourteen[0].innerHTML = nameFourteen;
        const imageFourteen = data.objects[0].rows[13][1];
        const productImageFourteen = document.getElementsByClassName("js--productFourteen-image");
        for(let i = 0; i < productImageFourteen.length; i++)
        productImageFourteen[i].src = imageFourteen;
        const priceFourteen = data.objects[0].rows[13][2];
        const productPriceFourteen = document.getElementsByClassName("js--productFourteen-price");
        for(let i = 0; i < productPriceFourteen.length; i++)
        productPriceFourteen[0].innerHTML = "€" + priceFourteen;
        const infoFourteen = data.objects[0].rows[13][3];
        const productInfoFourteen = document.getElementsByClassName("js--productFourteen-info");
        for(let i = 0; i < productInfoFourteen.length; i++)
        productInfoFourteen[0].innerHTML = infoFourteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameFifteen = data.objects[0].rows[14][0];
        const productNameFifteen = document.getElementsByClassName("js--productFifteen-name");
        for(let i = 0; i < productNameFifteen.length; i++)
        productNameFifteen[0].innerHTML = nameFifteen;
        const imageFifteen = data.objects[0].rows[14][1];
        const productImageFifteen = document.getElementsByClassName("js--productFifteen-image");
        for(let i = 0; i < productImageFifteen.length; i++)
        productImageFifteen[i].src = imageFifteen;
        const priceFifteen = data.objects[0].rows[14][2];
        const productPriceFifteen = document.getElementsByClassName("js--productFifteen-price");
        for(let i = 0; i < productPriceFifteen.length; i++)
        productPriceFifteen[0].innerHTML = "€" + priceFifteen;
        const infoFifteen = data.objects[0].rows[14][3];
        const productInfoFifteen = document.getElementsByClassName("js--productFifteen-info");
        for(let i = 0; i < productInfoFifteen.length; i++)
        productInfoFifteen[0].innerHTML = infoFifteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameSixteen = data.objects[0].rows[15][0];
        const productNameSixteen = document.getElementsByClassName("js--productSixteen-name");
        for(let i = 0; i < productNameSixteen.length; i++)
        productNameSixteen[0].innerHTML = nameSixteen;
        const imageSixteen = data.objects[0].rows[15][1];
        const productImageSixteen = document.getElementsByClassName("js--productSixteen-image");
        for(let i = 0; i < productImageSixteen.length; i++)
        productImageSixteen[i].src = imageSixteen;
        const priceSixteen = data.objects[0].rows[15][2];
        const productPriceSixteen = document.getElementsByClassName("js--productSixteen-price");
        for(let i = 0; i < productPriceSixteen.length; i++)
        productPriceSixteen[0].innerHTML = "€" + priceSixteen;
        const infoSixteen = data.objects[0].rows[15][3];
        const productInfoSixteen = document.getElementsByClassName("js--productSixteen-info");
        for(let i = 0; i < productInfoSixteen.length; i++)
        productInfoSixteen[0].innerHTML = infoSixteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameSeventeen = data.objects[0].rows[16][0];
        const productNameSeventeen = document.getElementsByClassName("js--productSeventeen-name");
        for(let i = 0; i < productNameSeventeen.length; i++)
        productNameSeventeen[0].innerHTML = nameSeventeen;
        const imageSeventeen = data.objects[0].rows[16][1];
        const productImageSeventeen = document.getElementsByClassName("js--productSeventeen-image");
        for(let i = 0; i < productImageSeventeen.length; i++)
        productImageSeventeen[i].src = imageSeventeen;
        const priceSeventeen = data.objects[0].rows[16][2];
        const productPriceSeventeen = document.getElementsByClassName("js--productSeventeen-price");
        for(let i = 0; i < productPriceSeventeen.length; i++)
        productPriceSeventeen[0].innerHTML = "€" + priceSeventeen;
        const infoSeventeen = data.objects[0].rows[16][3];
        const productInfoSeventeen = document.getElementsByClassName("js--productSeventeen-info");
        for(let i = 0; i < productInfoSeventeen.length; i++)
        productInfoSeventeen[0].innerHTML = infoSeventeen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameEighteen = data.objects[0].rows[17][0];
        const productNameEighteen = document.getElementsByClassName("js--productEighteen-name");
        for(let i = 0; i < productNameEighteen.length; i++)
        productNameEighteen[0].innerHTML = nameEighteen;
        const imageEighteen = data.objects[0].rows[17][1];
        const productImageEighteen = document.getElementsByClassName("js--productEighteen-image");
        for(let i = 0; i < productImageEighteen.length; i++)
        productImageEighteen[i].src = imageEighteen;
        const priceEighteen = data.objects[0].rows[17][2];
        const productPriceEighteen = document.getElementsByClassName("js--productEighteen-price");
        for(let i = 0; i < productPriceEighteen.length; i++)
        productPriceEighteen[0].innerHTML = "€" + priceEighteen;
        const infoEighteen = data.objects[0].rows[17][3];
        const productInfoEighteen = document.getElementsByClassName("js--productEighteen-info");
        for(let i = 0; i < productInfoEighteen.length; i++)
        productInfoEighteen[0].innerHTML = infoEighteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameNineteen = data.objects[0].rows[18][0];
        const productNameNineteen = document.getElementsByClassName("js--productNineteen-name");
        for(let i = 0; i < productNameNineteen.length; i++)
        productNameNineteen[0].innerHTML = nameNineteen;
        const imageNineteen = data.objects[0].rows[18][1];
        const productImageNineteen = document.getElementsByClassName("js--productNineteen-image");
        for(let i = 0; i < productImageNineteen.length; i++)
        productImageNineteen[i].src = imageNineteen;
        const priceNineteen = data.objects[0].rows[18][2];
        const productPriceNineteen = document.getElementsByClassName("js--productNineteen-price");
        for(let i = 0; i < productPriceNineteen.length; i++)
        productPriceNineteen[0].innerHTML = "€" + priceNineteen;
        const infoNineteen = data.objects[0].rows[18][3];
        const productInfoNineteen = document.getElementsByClassName("js--productNineteen-info");
        for(let i = 0; i < productInfoNineteen.length; i++)
        productInfoNineteen[0].innerHTML = infoNineteen;
    });

fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const nameTwenty = data.objects[0].rows[19][0];
        const productNameTwenty = document.getElementsByClassName("js--productTwenty-name");
        for(let i = 0; i < productNameTwenty.length; i++)
        productNameTwenty[0].innerHTML = nameTwenty;
        const imageTwenty = data.objects[0].rows[19][1];
        const productImageTwenty = document.getElementsByClassName("js--productTwenty-image");
        for(let i = 0; i < productImageTwenty.length; i++)
        productImageTwenty[i].src = imageTwenty;
        const priceTwenty = data.objects[0].rows[19][2];
        const productPriceTwenty = document.getElementsByClassName("js--productTwenty-price");
        for(let i = 0; i < productPriceTwenty.length; i++)
        productPriceTwenty[0].innerHTML = "€" + priceTwenty;
        const infoTwenty = data.objects[0].rows[19][3];
        const productInfoTwenty = document.getElementsByClassName("js--productTwenty-info");
        for(let i = 0; i < productInfoTwenty.length; i++)
        productInfoTwenty[0].innerHTML = infoTwenty;
    });