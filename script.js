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
let sum=0
let doc = document.getElementById("output");


Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
	doc.innerHTML = "";
	let count = 1;
	let maxTime = 0;

	data.forEach((value) => {
		const rounded = parseFloat(value.toFixed(3));
		maxTime = Math.max(maxTime, rounded);
		doc.innerHTML += `
			<tr>
				<td>Promise ${count++}</td>
				<td>${rounded}</td>
			</tr>
		`;
	});

	doc.innerHTML += `
		<tr>
			<td><b>Total</b></td>
			<td><b>${maxTime.toFixed(3)}</b></td>
		</tr>
	`;
});







