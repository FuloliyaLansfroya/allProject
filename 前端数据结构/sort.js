function quickSort(arr, i, j) {
  if (i < j) {
    let left = i;
    let right = j;
    let mid = Math.floor((left + right) / 2);
    let temp = arr[left];
    arr[left] = arr[mid];
    arr[mid] = temp;
    let pivot = arr[left];
    while (i < j) {
      while (arr[j] >= pivot && i < j) {
        // 从后往前找比基准小的数
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j];
      }
      while (arr[i] <= pivot && i < j) {
        // 从前往后找比基准大的数
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i];
      }
    }
    arr[i] = pivot;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
    return arr;
  }
}

function quickSort(arr, i, j) {
  if (i < j) {
    let left = i;
    let right = j;
    let mid = Math.floor((left + right) / 2);
    let temp = arr[mid];
    while (i < j) {
      while (arr[j] >= temp && j > mid) {
        j--;
      }
      if (j > mid) {
        arr[mid] = arr[j];
        arr[j] = temp;
        mid = j;
      }
      while (arr[i] <= temp && i < mid) {
        i++;
      }
      if (i < mid) {
        arr[mid] = arr[i];
        arr[i] = temp;
        mid = i;
      }
    }
    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right);
    return arr;
  }
}
