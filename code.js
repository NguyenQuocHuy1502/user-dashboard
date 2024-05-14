let courses = [
	{
		name: "Javascript",
		price: 50,
	},
	{
		name: "HTML&CSS",
		price: 35,
	},
	{
		name: "Java",
		price: 45,
	},
	{
		name: "PHP&MySQL",
		price: 55,
	},
];
let arr=[]
arr=courses.map(item=>(
    {
        ...item,
        price: item.price/100*70
    }))
console.log(arr.find(item=>item.price>30))