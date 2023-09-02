import { from, merge } from 'rxjs';
import { partition, map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/partition
// Example 1: Split even and odd numbers

const src$ = from([1, 2, 3, 4, 5, 6]);
//first value is true, second false
const [evens, odds] = src$.pipe(partition((val) => val % 2 === 0));

const subscribe = merge(
  evens.pipe(map((val) => `Even: ${val}`)),
  odds.pipe(map((val) => `Odd: ${val}`))
).subscribe((val) => console.log(val));
/*
  Output:
  "Even: 2"
  "Even: 4"
  "Even: 6"
  "Odd: 1"
  "Odd: 3"
  "Odd: 5"
*/
