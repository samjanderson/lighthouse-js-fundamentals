const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins) //[waster, recycling, compost]
  for (let i of keys) {
    if (i === trash) {
      bins[i] += 1
    }
  }
  return bins
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
//should return waste:4, recycling:3, compost:5


// access keys of object use object.keys(obj) to get the keys
//loop through keys to see what matches the trash