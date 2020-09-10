Array.prototype.unique=function(){
  let res=[];
  let json=[];
  for(let i=0;i<this.length;i++){
    if(!json[this[i]]){
      res.push(this[i])
      json[this[i]]=1;
    }
  }
  return res;
}

quickSort = (arr,i,j) =>{
  let left=i;
  let right=j;
  let mid=Math.floor((left+right)/2);
  let temp=arr[mid];
  // arr[left]=arr[mid];
  // arr[mid]=arr[left];
  // let pivot=arr[left];
  // while(i<j){
  //   while(arr[j]>=pivot&&i<j){
  //     j--;
  //   }
  //   if(i<j){
  //     arr[i++]=arr[j];
  //   }
  //   while(arr[i]<=pivot&&i<j){
  //     i++;
  //   }
  //   if(i<j){
  //     arr[j--]=arr[i];
  //   }
  // }
  // arr[i]=pivot;
  // quickSort(arr,left,i-1);
  // quickSort(arr,i,right);
  while(i<mid||j>mid){
    while(arr[i]<=temp&&i<mid){
      i++;
    }
    if(i<mid){
      arr[mid]=arr[i];
      arr[i]=temp;
      temp=arr[mid];
    }
    while(arr[j]>=temp&&j>mid){
      j--;
    }
    if(j>mid){
      arr[mid]=arr[j];
      arr[j]=temp;
      temp=arr[mid];
    }
  }
  quickSort(arr,left,mid-1);
  quickSort(arr,mid,j);
  return arr;
}