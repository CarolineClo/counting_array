let counter = 0;
let result;
result = Array.from(counter);

count();

function count() {
  result.unshift(counter++ + 1);
  result.slice(0, 9);
  setTimeout(() => {
    count();
  }, 500);
  console.log(result);
}

//push= add something at the end
//add counter plus one to the end
//then add that new number plus one to the end
//then add that new number plus one to the end
//then add that new number plus one to the end
