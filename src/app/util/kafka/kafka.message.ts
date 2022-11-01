function toJSON(message: Buffer) {
    const msg: Buffer = Buffer.from(message);
    return JSON.parse(msg.toString());

}

export { toJSON };