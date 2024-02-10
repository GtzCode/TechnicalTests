import { binarySearch } from "./algorithms/binarySearch";
import { ReverseList } from "./algorithms/resetReverse";

let vlListReverse:number[] = [1,2,3,4,5,6];
ReverseList(vlListReverse);
console.log(`ReverseList: ${vlListReverse}`);

let vlNumSearch:string[] = ['00','11','22','33','44','55','66','77','88','99'];
let vlValueSearch:string = '77';
let vlPosition = binarySearch(vlValueSearch,vlNumSearch);
console.log(`Binary Search: ${vlPosition}`);
