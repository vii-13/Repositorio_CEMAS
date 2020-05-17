function TWOSUM(nums, target) {
    var new_arr = nums.filter((num) => nums.includes(target - num));
    var num1 = new_arr[0];
    var num2 = new_arr.find((new_arr) => new_arr + num1 === target);
    console.log(nums)

    return [nums.indexOf(num1), nums.indexOf(num2)];
}

console.log(TWOSUM([3, 1, 2, 4, 8, 11], 7));