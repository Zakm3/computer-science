Results for the extraLargeArray
insert 770.315167 ms
append 2.16775 ms

Results for the  largeArray
insert 6.437834 ms
append 407.917 μs

Results for the  mediumArray
insert 125.417 μs
append 87.5 μs

Results for the  smallArray
insert 28.208 μs
append 73.875 μs

Results for the  tinyArray
insert 16.625 μs
append 44.416 μs

Paragraph explanation
Overall the append function scales better than the insert function for larger arrays. Although the insert function works better on smaller arrays. I can tell all of this by looking at the results. You could say that the append function is more linear. 

extra credit.
when using unshift it has to shift all elements of the array to a different location, js has to create a new array for each number that gets appended, where push it keeps the same array and just pushes new number.
