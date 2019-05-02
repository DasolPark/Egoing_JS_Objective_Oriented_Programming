var park = {
  name: "park",
  first: 10,
  second: 20,
  sum: function() {
    return this.first + this.second;
  }
};
// console.log('park.sum(park.first, park.second)', park.sum(park.first, park.second));
console.log("park.sum(park.first, park.second)", park.sum());

// Keyword this is used to refer to the object to which the method belongs within the method.
