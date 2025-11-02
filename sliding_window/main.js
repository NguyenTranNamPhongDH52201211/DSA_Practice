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


let b=[2,3,1,2,4,3,0]
function findMinLenght(a, target){
    let minL=Infinity;
    let l=0,r=0;
    let sum=0;
    for(r=0; r<a.length;r++){
        sum+=a[r];
        while(sum>=target){
            minL=Math.min(minL,r-l+1);
            sum-=a[l];
            l++;
        }
    }

    return minL;
}
//let result = longestLength(a);
let result2=findMinLenght(b,7);
console.log(result2);

