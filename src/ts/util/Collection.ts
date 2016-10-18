import {Iterator} from "./Iterator";

/**
 * Base interface for Collection.
 * Not implemented methods:
 *      Method Summary
 *      Methods  Modifier and Type    Method and Description
 *
 *      int    hashCode()
 *      Returns the hash code value for this collection.
 *
 *      <T> T[]    toArray(T[] a)
 *      Returns an array containing all of the elements in this collection; the runtime type of the returned array is that of the specified array.
 *
 */
export interface Collection<E> {
    /**
     * Adds the specified element to this set if it is not already present (optional operation).
     */
    add(e: E): boolean;

    /**
     *     Adds all of the elements in the specified collection to this set if they're not already present.
     */
    addAll(c: Collection<E>): boolean;

    /**
     * Removes all of the elements from this collection (optional operation).
     */
    clear(): void;

    /**
     * Returns true if this collection contains the specified element.
     */
    contains(o: E): boolean;

    /**
     * Returns true if this collection contains all of the elements in the specified collection.
     */
    containsAll(c: Collection<any>): boolean;

    /**
     * Compares the specified object with this collection for equality.
     */
    equals(o: any): boolean;

    /**
     * Returns true if this collection contains no elements.
     */
    isEmpty(): boolean;

    /**
     * Returns an iterator over the elements in this collection.
     */
    iterator(): Iterator<E>;

    /**
     * Removes a single instance of the specified element from this collection, if it is present (optional operation).
     */
    remove(o: E): boolean

    /**
     * Removes all of this collection's elements that are also contained in the specified collection (optional operation).
     */
    removeAll(c: Collection<any>): boolean;

    /**
     * Retains only the elements in this collection that are contained in the specified collection (optional operation).
     */
    retainAll(c: Collection<any>): boolean;

    /**
     * Returns the number of elements in this collection.
     */
    size(): number;

    /**
     * Returns an array containing all of the elements in this collection.
     */
    toArray(): E[];

}
