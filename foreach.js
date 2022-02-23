function printArrWithIndex(val,i)
{
  console.log("Number: "+val+" "+"Index: "+i)

}

function forEach(arr,printArrWithIndex)
{
  for(i=0;i<arr.length;i++)
  {
    printArrWithIndex(arr[i],i);
  }
}
arr=[1,2,3,4,5];
forEach(arr,printArrWithIndex);
