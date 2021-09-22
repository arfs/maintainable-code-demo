// responsibility: coordinates the flow of data and objects/methods
class App {
    constructor(dao, calculator) {
        $('#calculate-button').click(this.init);
        this._dao = dao;
        this._calculator = calculator;
    }

    init() {
        let itemPrices = this._dao.getItemPrices();
        let stateTax = this._dao.getStateTax();
        let total = this._calculator.getTotal(itemPrices, stateTax);

        $('#total').html('$' + total);
    }
}

// responsibility: processes data in a specific way
class TotalTaxCalculator {
    getTotal(itemPrices, stateTax) {
        let sum = 0;

        for(let i=0; i < itemPrices.length; ++i) {
            sum += parseInt(itemPrices[i], 10);
        }

        return sum * (1 + parseFloat(stateTax));
    }
}

// responsibility: retrieves data (from the UI)
class UiItemsDAO {
    
    getItemPrices() {
        let $itemPrices = $('.item');
        let itemPrices = [];
        let price;

        for(let i=0; i < $itemPrices.length; ++i) {
            price = $itemPrices.eq(i).val()
            itemPrices.push(price);
        }

        return itemPrices;
    }

    getStateTax() {
        return parseFloat($('#tax').val());
    }
}

// responsibility: also retrieves data (from local storage)
/*
    localStorage.setItem('itemPrices', [10, 20, 30, 40, 50, 50]);
    localStorage.setItem('stateTax', 0.0725);
*/
class LocalStorageDAO {
    getItemPrices() {
        return localStorage.getItem('itemPrices').split(',');
    }

    getStateTax() {
        return localStorage.getItem('stateTax');
    }
}



///////////////////////


new App(new LocalStorageDAO(), new TotalTaxCalculator());
