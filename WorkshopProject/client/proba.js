const items = [{firstName: 'Emil', age: 13}, {firstName: 'Boni', age: 21}, {firstName: 'Cindel', age: 31}];


const sortedData = [...items].sort((a, b) => a.firstName.localeCompare(b.firstName))

for (let i = 0; i < items.length; i++) {
    console.log(sortedData[i])
}

console.log('ariwee')