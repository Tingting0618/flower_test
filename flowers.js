const flowers = [
    {id: 1,
     color: "White",
     species: "Rose",
     price:0.90
    },
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.1
    }

]

const addFlower = (flowerObject) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

        const lastIndex = flowers.length - 1
        const currentLastFlowers = flowers[lastIndex]
        const maxId = currentLastFlowers.id
        const idForNewFlowers = maxId + 1
    
        flowerObject.id = idForNewFlowers
        flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

    for (const flowerObject of flowers) {
        // Only one flower will cause the condition below to evaluate to true
        if (flowerObject.price >= 1) {
            expensiveFlowers.push(flowerObject)
        }
    }


    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

