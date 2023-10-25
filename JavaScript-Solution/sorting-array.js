function SortDescending(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          // Swap the two elements.
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    // Return the sorted array.
    return array;
  }
  
  // Example
  const array = [5, 3, 2, 1, 4];
  console.log(array);

  const sortedArray = SortDescending(array);  
  console.log(sortedArray);