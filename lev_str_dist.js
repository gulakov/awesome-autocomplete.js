function string_dist(str1, str2) {

  // two rows
  var prevRow = new Array(str2.length + 1);

  // initialise previous row
  for (var i = 0; i < prevRow.length; ++i)
    prevRow[i] = i;


  // calculate current row distance from previous row
  for (i = 0; i < str1.length; ++i) {
    var nextCol = i + 1;

    for (var j = 0; j < str2.length; ++j) {
      var curCol = nextCol;

      // substution
      nextCol = prevRow[j] + ( (str1.charAt(i) === str2.charAt(j)) ? 0 : 1 );
      // insertion
      var tmp = curCol + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }
      // deletion
      tmp = prevRow[j + 1] + 1;
      if (nextCol > tmp) {
        nextCol = tmp;
      }

      // copy current col value into previous (in preparation for next iteration)
      prevRow[j] = curCol;
    }

    // copy last col value into previous (in preparation for next iteration)
    prevRow[j] = nextCol;
  }

  return nextCol;
};

search = process.argv[2]

words = "Football Sunset Fish Golf Butterfly Plate Bike Trees Car Man Tattoo Elephant Handbag Supermarket Rabbit Sail Clouds Pizza Burger Bikini Friends Hat Shoes Eyes Sheep City Swimming Tree Sky Feet Fruits Alcohol Lizard Hiking Fireworks Food Beach Bug Cat Tennis Glass Woman Tiger Bird Jewelry Surf Art Ring Soccer Flower Salad Street Snake Field Cup Snow Phone Ski Beer Selfie Waterfall Baby Lingerie Computer Sunglasses Bowl Dress Music Horse House Suit Running Spider Tv Skirt Camera Sushi Wine Shorts Tea Kiss Dance Monkey Cow Jeans Cake Balloon Lion Desert Office Dog Night Church Hand hegemony"

words = words.toLowerCase().split(" ")

best_score = 999;
best_word = '';

for (var i in words){
  score = string_dist(words[i],search)
  if (score < best_score){
    best_score = score;
    best_word = words[i];
  }


}


console.log(best_word)
