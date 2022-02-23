function subArray(val,total)
{
  total = total - val;
  return total

}

function reduce(arr,subArray)
{
  let total=arr[0];
  for(i=1;i<arr.length;i++)
  {
    total = subArray(arr[i],total);
  }
  console.log("AFTER SUB",total);
}
arr=[100,30,45,2];
reduce(arr,subArray);
