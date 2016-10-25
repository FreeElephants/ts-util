import { AbstractCollection } from "./AbstractCollection";
import { IndexOutOfBoundsException } from "./Exception";
import { List } from "./List";

export class ArrayList<E> extends AbstractCollection<E> implements List<E> {

    public get(index: number): E {
        if (typeof this.set[index] === "undefined") {
            throw new IndexOutOfBoundsException();
        }

        return this.set[index];
    }
}
