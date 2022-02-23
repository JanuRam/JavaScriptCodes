function multiplyWithTen(val,arr1)
{
  arr1.push(val*10);

}

function map(arr,multiplyWithTen)
{
  arr1=[]
  for(i=0;i<arr.length;i++)
  {
    multiplyWithTen(arr[i],arr1);
  }
  console.log(arr1);
}
arr=[1,2,5,6,7];
map(arr,multiplyWithTen);
