const MathFxns = require('../mathfxns.js');
const math = new MathFxns();

describe('class constructor \n',()=>{
    afterEach(()=>{
        console.log('\n...Completed class instance test!\n');
    })
    it('should create an instance of the class',()=>{
        const newInstance = new MathFxns();
        expect(newInstance).toBeInstanceOf(MathFxns);
    })
})

describe('functions \n',()=>{
    // add a test hook
    var numTest = 1;
    afterEach(()=>{
        console.log(`\n...Completed functional test ${numTest++}!\n`);
    })

    describe('add two numbers',()=>{
        it('should return the sum of two numbers',()=>{
            const num1 = 5;
            const num2 = 11;
            const sum = 16;
            expect(math.addTwoNums(num1,num2)).toEqual(sum);
        });
    });

    describe('subtract two numbers',()=>{
        it('should return the sum of all numbers',()=>{
            const num1 = 11;
            const num2 = 5;
            const answer = 6;
            expect(math.subtractTwoNums(num1,num2)).toEqual(answer);
        });
    });

    describe('division',()=>{
        it('should return the quotient of two numbers',()=>{
            const num1 = 15;
            const num2 = 5;
            const quotient = 3;
            expect(math.divideTwoNums(num1,num2)).toEqual(quotient);
        })
    });

    describe('division',()=>{
        it('should return the product of two numbers',()=>{
            const num1 = 15;
            const num2 = 5;
            const product = 75;
            expect(math.multiplyTwoNums(num1,num2)).toEqual(product);
        })
    });

    describe('add all numbers',()=>{
        it('should return the sum of all numbers',()=>{
            const numsArr = [4,63,5,17,8];
            const sum = 97;
            expect(math.addNums(...numsArr)).toEqual(sum);
        });
    });

    describe('is prime',()=>{
        it('should return true or false',()=>{
            const num = 5;
            expect(math.isPrime(num)).toEqual(true);
        });
        it('should throw an error if negative',()=>{
            const num = -5;
            const sum = 16;
            expect(() => math.isPrime(num)).toThrow(Error,"Number is not positive!");
        })
    });

    describe('factor',()=>{
        it('should return an array',()=>{
            const num = 12;
            const factors = [1,2,3,4,6,12];
            expect(Array.isArray(math.factor(num))).toBe(true);
        })
        it('should return all the factors of the number',()=>{
            const num = 16;
            const factors = [1,2,4,8,16];
            expect(math.factor(num)).toEqual(expect.arrayContaining(factors));
        })
    })
})