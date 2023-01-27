// const installOS = function(nextTask){
//     asyncTask("Install OS", nextTask)
// }

// const deploySoftware = function(nextTask){
//     asyncTask("Deploy Software", nextTask)
// }

// const runTests = function(){
//     asyncTask("Run Tests")
// }

// const taskDone = function(name, nextTask){
// 	console.log(`Completed async "${name}"`)
// 	if (nextTask) {
// 		nextTask()
// 	}
// }

// const asyncTask = function(name, nextTask){
// 	console.log(`Started async "${name}"...`)
// 	setTimeout(() => taskDone(name, nextTask), 
// 		random(1,3) * 1000)
// 	console.log(`Returning from async "${name}"`)
// }

// const main = function(){
// 	installOS(function(){
//         deploySoftware(function(){
//             runTests()
//         })
//     })
// }

// main()



const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const installOS = (nextTask) => asyncTask("Install OS", nextTask)

const deploySoftware = (nextTask) => asyncTask("Deploy Software", nextTask)

const runTests = () => asyncTask("Run Tests")

const taskDone = (name, nextTask) => {
	console.log(`Completed async "${name}"`)
	if (nextTask) {
		nextTask()
	}
}

const asyncTask = (name, nextTask) =>  {
	console.log(`Started async "${name}"...`)
	setTimeout(() => taskDone(name, nextTask), 
		random(1,3) * 1000)
	console.log(`Returning from async "${name}"`)
}

const main = ()=> {
	installOS(()=>deploySoftware(()=>runTests()))
}

main()