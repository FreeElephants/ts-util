import { Collection } from "./Collection";
import { SimpleIterator } from "./SimpleIterator";
import { Iterator } from "./Iterator";

export abstract class AbstractCollection<E> implements Collection<E> {

    protected set: E[] = [];

    public add(e: E): boolean {
        if (this.set.indexOf(e) > -1) {
            return false;
        } else {
            this.set.push(e);
            return true;
        }
    }

    public addAll(c: Collection<E>): boolean {
        if (c.isEmpty()) {
            return false;
        } else {
            let values = c.toArray();
            let withoutDuplicates: boolean = true;
            for (let i in values) {
                if (this.add(values[i]) === false) {
                    withoutDuplicates = false;
                }
            }
            return withoutDuplicates;
        }
    }

    public clear(): void {
        this.set = [];
    }

    public contains(o: E): boolean {
        return this.set.indexOf(o) > -1;
    }

    public containsAll(c: Collection<any>): boolean {
        let collectionNotEmpty = c.isEmpty() === false;
        let collectionNotSame = this !== c;

        if (collectionNotEmpty && collectionNotSame) {
            let iterator: Iterator<any> = c.iterator();
            while (iterator.hasNext()) {
                if (false === this.contains(iterator.next())) {
                    return false;
                }
            }
        }

        return true;
    }

    public equals(o: any): boolean {
        if (this.size() === o.size()) {
            if (this.isEmpty()) {
                return true;
            } else {
                let iterator: Iterator<any> = this.iterator();
                while (iterator.hasNext()) {
                    if (false === o.contains(iterator.next())) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            return false;
        }
    }

    public isEmpty(): boolean {
        return this.set.length === 0;
    }


    public iterator(): Iterator<E> {
        return new SimpleIterator(this);
    }

    public remove(o: E): boolean {
        if (this.contains(o)) {
            let index = this.set.indexOf(o);
            this.set.splice(index, 1);
            return true;
        }
        return false;
    }

    public removeAll(c: Collection<any>): boolean {
        if (c.isEmpty() || this.isEmpty()) {
            return false;
        } else {
            let iterator: Iterator<any> = c.iterator();
            let somethingRemoved = false;
            while (iterator.hasNext()) {
                let currentRemoved: boolean = this.remove(iterator.next());
                somethingRemoved = somethingRemoved || currentRemoved;
            }

            return somethingRemoved;
        }
    }

    retainAll(c: Collection<any>): boolean {
        if (this.isEmpty()) {
            return false;
        } else if (c.isEmpty()) {
            this.clear();
            return true;
        } else {
            let iterator: Iterator<any> = this.iterator();
            let somethingRemoved = false;
            while (iterator.hasNext()) {
                let e: E = iterator.next();
                if (false === c.contains(e)) {
                    this.remove(e);
                    somethingRemoved = somethingRemoved || true;
                }
            }

            return somethingRemoved;
        }
    }

    public size(): number {
        return this.set.length;
    }

    public toArray(): E[] {
        return this.set.slice();
    }
}
