export default function getItemTotalCount(items) {

    if(!items.length)
        return 0;
        
    let counts = items.map(item => item.count);

    let result = counts.reduce((prev, cur) => {
        return prev + cur;
    });

    return result;
}