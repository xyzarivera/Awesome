CSS Cheat Sheet

Reference:
*https://www.w3schools.com/cssref/css_selectors.asp
*https://css-tricks.com/almanac/
specificity calculator

Cascading Style Sheets at the most basic level it indicates that the order of CSS rules matter. 


.class
#id
*
element
element, element
element element
element > element
element + element
:hover
:last-child
:first-child
!important (not recommended)
/* element element, select all p in h2  */
/* element > element, select p that have parent of h2*/
/* element + element, select p element that is exactly after an h2 element*/
/* :hover, changes when element is hovered */
/* :lastchild, : firstchild * slect last/first of each div/
/* !important, overrides any of CSS rules */


What seletors win out in the cascade depends on:
-Specificity
-Importance
-Source Order