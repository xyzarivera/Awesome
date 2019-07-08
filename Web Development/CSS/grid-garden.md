https://cssgridgarden.com/
---
display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;

- 5 columns and 5 rows
- 6 border lines, count starting at 1
---
grid-column-start property

grid-column-start: 3;
starts at 3rd vertical border from the left in the grid.
---
grid-column-end property

When grid-column-start is used alone, the grid item by default will span exactly one column. However, you can extend the item across multiple columns by adding the grid-column-end property.

grid-column-end:4;
ends at 4th vertical border
---
When pairing grid-column-start and grid-column-end, you might assume that the end value has to be greater than the start value. It can be interchanged

If you want to count grid lines from the right instead of the left, you can give grid-column-start and grid-column-end negative values. For example, you can set it to -1 to specify the first grid line from the right.
---
grid-column-end: span 2;

Instead of defining a grid item based on the start and end positions of the grid lines, you can define it based on your desired column width using the span keyword. Keep in mind that span only works with positive values.
--
grid-column property

grid-column is a shorthand property that can accept both values at once, separated by a slash.

For example, grid-column: 2 / 4; will set the grid item to start on the 2nd vertical grid line and end on the 4th grid line.

grid-column: 2/span 3; The span keyword also works with this shorthand property
--- 

