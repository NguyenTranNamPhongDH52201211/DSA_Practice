//Find the length of the layout subarray with the same value 

const a = [7, 3, 3, 3, 3, 3, 2, 2, 2, 2];

function longestLength(a) {
    if (a.length == 0) return 0;

    let max = 1;
    let l = 0, r = 0;
    while (r < a.length) {
       if(a[r]!=a[l]){
        l=r;
       }
       max=Math.max(max, r-l+1);
       r++;
    }
    return max;
}

let result = longestLength(a);
console.log(result);

