describe("Update Quality", function() {

  it("if sell_in is less than 0 item quality -2", function() {
    items.push(new Item("+5 Dexterity Vest",-1,4));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(2);

  });

});

describe("Aged Brie", function() {
  it("quality increases by 1 as sell in date decreases", function(){
    items.push(new Item("Aged Brie",4,4));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(5);
  })
  
  
})

describe("Legendary", function() {
  it("quality never decrease", function(){
    items.push(new Item("Sulfuras",4,80));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(80);
  })
})

describe("Backstage passes", function() {
  it("quality increases by 2", function(){
    items.push(new Item("Backstage passes", 6,12));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(14);
  })
  it("quality increases by 3", function(){
    items.push(new Item("Backstage passes", 4,12));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(15);
  })
  it("loses all quality", function(){
    items.push(new Item("Backstage passes", -1,12));
    update_quality();
    const updatedItem = items.at(-1);
    expect (updatedItem.quality).toEqual(0);
  })
})

