import { IndexOutOfBoundsException } from "./Exception";
import { AbstractList } from "./AbstractList";

export class ArrayList<E> extends AbstractList<E> {

    public get(index: number): E {
        if (typeof this.set[index] === "undefined") {
            throw new IndexOutOfBoundsException();
        }

        return this.set[index];
    }
}
