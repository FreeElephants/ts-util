import {Iterator} from "./Iterator";
import {Collection} from "./Collection";

export class SimpleIterator<E> implements Iterator<E> {

    private arrayCopy: E[];

    /**
     *
     * @param {Collection<E>} collection
     */
    public constructor(collection: Collection<E> | E[]) {
        if (collection instanceof Array) {
            this.arrayCopy = collection.slice();
        } else {
            this.arrayCopy = collection.toArray();
        }
    }

    public hasNext(): boolean {
        return this.arrayCopy.length > 0;
    }

    public next(): E {
        return this.arrayCopy.shift();
    }

}
