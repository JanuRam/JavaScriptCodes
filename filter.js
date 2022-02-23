function greaterThanFive(val,arr1)
{
  if (val>5)
  {
    arr1.push(val)
  }
}


function filter(arr,greaterThanFive)
{
  arr1=[];
  for(i=0;i<arr.length;i++)
  {
    greaterThanFive(arr[i],arr1);
  }
 console.log(arr1);
}
arr=[1,2,5,6,7];

filter(arr,greaterThanFive);
