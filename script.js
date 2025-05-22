let inputbox = document.querySelector("#ip")
let btn = document.querySelector("#btn")
let div = document.querySelector("#output")

function update(e){
	let input = inputbox.value;
if(isNaN(input)){
	div.innerText="please enter a valid number"
	return
}
	
	let p = new Promise((resolve,reject)=>{
		setTimeout(()=>{
div.innerText = `Result:${input}`				

			resolve(input)
		},2000)
	})
	.then((res)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				
			let multi = res*2;
			div.innerText= `Result:${multi}`
			resolve(multi)
			},2000)
		})
	})
	.then((res)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				
			let multi = res-3;
			div.innerText= `Result:${multi}`
			resolve(multi)
			},1000)
		})
	})
	.then((res)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				
			let multi = res/2;
			div.innerText= `Result:${multi}`
			resolve(multi)
			},1000)
		})
	})
	.then((res)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				
			let multi = res+10;
			div.innerText= `Final result:${multi}`
			resolve(multi)
			},1000)
		})
	})
	.catch(err=>{
		console.log(err.message)
	})
}


btn.addEventListener("click",update)