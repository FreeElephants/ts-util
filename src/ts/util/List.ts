import { Collection } from "./Collection";

export interface List<E> extends Collection<E> {

    /**
     * Replaces the element at the specified position in this list with the specified element (optional operation).
     */
    add(o: E): boolean;

    /**
     * Returns the element at the specified position in this list.
     */
    get(index: number): E;

    /**
     * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    indexOf(o: E): number;

    /**
     * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
     */
    lastIndexOf(o: E): number;
}
