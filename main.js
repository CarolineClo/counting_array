let counter = 0;
let result;
result = Array.from(counter);

count();

function count() {
  result.unshift(counter);
  setTimeout(() => {
    count();
  }, 500);
  console.log(result.slice(0, 9));
  counter++;
}

//push= add something at the end
//add counter plus one to the end
//then add that new number plus one to the end
//then add that new number plus one to the end
//then add that new number plus one to the end
