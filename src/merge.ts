export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const reversed2: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        reversed2.push(collection_2[i]);
    }

    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < collection_1.length || j < reversed2.length || k < collection_3.length) {
        let val1: number;
        if (i < collection_1.length) {
            val1 = collection_1[i];
        } else {
            val1 = Infinity;
        }

        let val2: number;
        if (j < reversed2.length) {
            val2 = reversed2[j];
        } else {
            val2 = Infinity;
        }

        let val3: number;
        if (k < collection_3.length) {
            val3 = collection_3[k];
        } else {
            val3 = Infinity;
        }

        if (val1 <= val2 && val1 <= val3) {
            result.push(val1);
            i++;
        } else if (val2 <= val1 && val2 <= val3) {
            result.push(val2);
            j++;
        } else {
            result.push(val3);
            k++;
        }
    }

  return result;
}