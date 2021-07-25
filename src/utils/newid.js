let lastId = 0;

export default function newid(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}