const promise1 = () => {
	return new Promise((resolve, reject) => {
		let start=Date.now();
		setTimeout(() => {
			let end=Date.now();
			resolve((end-start)/1000);
		}, 1000);
	});
};

const promise2 = () => {
	return new Promise((resolve, reject) => {
		let start=Date.now();
		setTimeout(() => {
			let end=Date.now();
			resolve((end-start)/1000);
		}, 2000);
	});
};

const promise3 = () => {
	return new Promise((resolve, reject) => {
		let start=Date.now();
		setTimeout(() => {
			let end=Date.now();
			resolve((end-start)/1000);
		}, 3000);
	});
};

let count = 1;
let doc = document.getElementById("output");

Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
	data.forEach((value)=>{
	doc.innerHTML+=`
		<tr>
			<td>Promise ${count}</td>
			<td>${Math.floor(value)}</td>
		</tr>
	`
	count++;	
	})
})
