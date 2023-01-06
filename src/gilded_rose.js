class Item{ // This is the item class
  constructor(name,sell_in,qualitiy){
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  };
  updatedQuality(){
    this.sell_in--;
    
  };
};

class Basic extends Item{
  updatedQuality(){
    this.sell_in--;
    if(this.quality > 0){
      this.quality--;
    };
    if(this.sell_in < 0 && this.quality > 0){
      this.quality-=2;
    }else if(this.sell_in <=0 &&this.quality > 0){
      this.quality = 0;
    };
    
  };
};

class Legendary extends Item{
  
  updatedQuality(){
    this.quality = 80;
    this.sell_in = 0;
  };
};

class Cheese extends Item{
  
  updatedQuality(){
    this.sell_in--;
    if(this.quality < 50){
      this.quality++;
    };
  };
};

class Pass extends Item{
  updatedQuality(){
    this.sell_in--;
    if(this.sell_in<=10 && this.sell_in > 5){
      this.quality+=2;
    }else if(this.sell_in<=5 && this.sell_in >=0){
      this.quality+=3
    }else if(this.sell_in < 0){
      this.quality = 0
    } else{
      this.quality++;
    }
  }
};

class Conjured extends Item{
  
};
// List of items available.
var items = []
// The items being added to the items array.
items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

// main function 
function update_quality() {
  for (var i = 0; i < items.length; i++) {
    // all common items degrade by 1
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else { 
      // target Aged Brie and back stage passes quality +1
      if (items[i].quality < 50) {// 
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { //if pass
          if (items[i].sell_in < 11 && items[i].sell_in > 5) { //if between 11 days and 5 days
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1 // quality increase by +2
            }
          }
          if (items[i].sell_in < 6) { // 5 days or less
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 2 // quality increses by 3
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') { // not legendary 
      items[i].sell_in = items[i].sell_in - 1; // decrease sell in date by 1
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') { // not Aged Brie
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality // backstage pass = 0 quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
