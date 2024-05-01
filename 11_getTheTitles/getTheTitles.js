const getTheTitles = function(array) {
    let titles = [];
    for (let i = 0; i < array.length; i++) {
        titles.push(array[i].title);
    }
    return titles;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
