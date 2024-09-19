import {sum} from "../sum";

test("Sum should cal sum of two nums",()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
})