type Fish = { swim: () => void };
type Bird = { fly: () => void };


function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(type: number): Fish | Bird {
    if(type === 0) {
        return {swim: () => {console.log('swimming')}}
    } else {
        return {fly: () => {console.log('flying')}}
    }
}

function run() {
    const pet = getSmallPet(0);
    if(isFish(pet)) {
        pet.swim()
    }
    const pet2 = getSmallPet(1);
    if(!isFish(pet2)) {
        pet2.fly()
    }
}
run();
