window.onload=function(){
    const sort_btn=document.getElementById("sort-btn");
    const sort_result=document.getElementById("sort-result")
    sort_btn.addEventListener("click",sortNumbers);
    
    function sortNumbers(){
        unsorted_nums=[]
        var final_result=[]
        for (let i=1;i<=10;i++){
            n=prompt("enter number"+i);
            unsorted_nums.push(n);
        }

        function mergeSort(input) {
            const {length:arraySize} = input;
            if (arraySize < 2) return input;
            const mid = Math.floor(arraySize/2);
            const sortedLeftArray = mergeSort(input.slice(0,mid));
            const sortedRightArray = mergeSort(input.slice(mid, arraySize));
            return merge(sortedLeftArray, sortedRightArray);
          }
          function merge (left, right){
            let result = []
            while(left.length && right.length){
              if(left[0]< right[0]){
                result.push(left.shift())
              }else{
                result.push(right.shift())
              }
            }
            final_result = [...result, ...left, ...right];
            return final_result;
          }
           
          sort_result.value=mergeSort(unsorted_nums);
    }
}