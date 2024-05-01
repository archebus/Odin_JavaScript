const findTheOldest = function(array) {
    let oldestIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].yearOfDeath == undefined) {
            array[i].yearOfDeath = getYear();
        }
    }

    let ages = array.map(
        (array) => (array.yearOfDeath - array.yearOfBirth)
    );

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > ages[oldestIndex]){
            oldestIndex = i;
        }
    }
    return array[oldestIndex];

    function getYear() {
        const d = new Date();
        return d.getFullYear();
    }

};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
