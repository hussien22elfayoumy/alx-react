import $ from 'jquery';

const firstParagraph = $('<p>').text('Holberton Dashboard');
const secondParagraph = $('<p>').text('Dashboard data for the students');
const thirdParagraph = $('<p>').text('Copyright - Holberton School');

$('body').append(firstParagraph, secondParagraph, thirdParagraph);

console.log('hello');
