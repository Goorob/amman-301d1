'use strict';

function Person(data) {
  this.name = data.name;
}
Person.prototype.render = function() {
  // $('ul').append(`
  //   <li>${this.name}</li>
  // `)

  let personClone = $('.person-template').clone();
  personClone.removeClass('person-template');
  personClone.find('.ppl').text(this.name);
  $('ul').append(personClone);
};


$('button').on('click', function() {
  $('ul').fadeIn(800);
});

$('ul').on('click', 'li', function() {
  console.log( $(this).text() );
});

$.get('./people.json')
  .then( data => {
    data.forEach( (value,idx) => {
      let person = new Person(value);
      person.render();
    })
  });
