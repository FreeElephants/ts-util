import { List } from "./List";
import { AbstractCollection } from "./AbstractCollection";

export abstract class AbstractList<E> extends AbstractCollection<E> implements List<E> {

    public add(e: E): boolean {
        let elementNotPresent = this.set.indexOf(e) > -1;
        this.set.push(e);
        return elementNotPresent;
    }

    public abstract get(index: number): E;

    public indexOf(o: E): number {
        return this.set.indexOf(o);
    }

    public lastIndexOf(o: E): number {
        return this.set.lastIndexOf(o);
    }

}
