export interface Iterator<E> {

    /**
     * Returns true if the iteration has more elements.
     */
    hasNext(): boolean;

    /**
     * Returns the next element in the iteration.
     */
    next(): E;
}
