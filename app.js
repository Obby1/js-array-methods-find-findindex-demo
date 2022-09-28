const scores = [
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	55,
	59,
	69,
	73,
	73,
	75,
	79,
	83,
	88,
	91,
	93
];

scores.find(function(score){
	return score > 75;
})

scores.find(function(score){
	return score%2===0;
})

const evenScores = scores.filter(function(score){
	return score%2 ===0;
})


const firstEven = scores.findIndex(function(score){
	return score%2===0 && score>0;
})

scores.findIndex(function(score){
	return score> 100;
})

function partition(arr,pivot){
	const pivotIndex = arr.findIndex(function(el){
		return el > pivot
	})
	console.log(pivotIndex);
	const left = arr.slice(0,pivotIndex);
	const right = arr.slice(pivotIndex );
	return [left, right];
}


function myFind(arr, callback){
	for (let i = 0; i<arr.length; i ++){
		if (callback(arr[i], i , arr)) return arr[i]
	};
}

myFind(scores, function(score){
	return score>91;
})

function myFindIdx(arr, callback){
	for (let i = 0; i<arr.length; i++){
		if (callback(arr[i], i , arr)) return i;
	};
	return -1;
}

function myFindIdx2(arr, callback){
	for (let i = 0; i<arr.length; i ++){
		if (callback(arr[i], i , arr)) return i
	};
}



myFindIdx(scores, function(score){
	return score !== 0 && score %2 ===0;
})

// scores.find(function(score) {
// 	return score > 75;
// });
// //79

// scores.find(function(score) {
// 	return score !== 0 && score % 2 === 0;
// });
// //88

// //If you need to find ALL, use filter:
// const evenScores = scores.filter(function(score) {
// 	return score % 2 === 0;
// });
// //[0, 0, 0, 0, 0, 0, 0, 0, 88]

// const firstEven = scores.findIndex(function(score) {
// 	return score !== 0 && score % 2 === 0;
// });
// //16

// scores.findIndex(function(score) {
// 	return score > 100;
// });

// function partition(arr, pivot) {
// 	//Find the index we'll use to pivot around
// 	const pivotIdx = arr.findIndex(function(el) {
// 		return el > pivot;
// 	});
// 	//create 2 new arrays, using that pivotIdx we just found
// 	const left = arr.slice(0, pivotIdx);
// 	const right = arr.slice(pivotIdx);
// 	//return both arrays as a single array:
// 	return [ left, right ];
// }
// //partition(scores, 0)
// //Returns...
// // [
// //   [ 0, 0, 0, 0, 0, 0, 0, 0 ],
// //   [ 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93 ]
// // ];

// // *********************************
// // Writing Our Own Versions
// // *********************************
// function myFind(arr, callback) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (callback(arr[i], i, arr) === true) return arr[i];
// 	}
// }

// myFind(scores, function(score) {
// 	return score > 91;
// });

// myFind(scores, function(score) {
// 	return score > 100;
// });

// function myFindIndex(arr, callback) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (callback(arr[i], i, arr) === true) return i;
// 	}
// 	return -1;
// }

// myFindIndex(scores, function(score) {
// 	return score !== 0 && score % 2 == 0;
// });
